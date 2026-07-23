FROM node:22.20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY prisma ./prisma
COPY prisma.config.ts nest-cli.json tsconfig.json tsconfig.build.json ./
COPY src ./src
# Prisma's schema-engine binary isn't published for 32-bit ARM (linux-arm),
# so `prisma generate` can't fetch it there. On platforms where it works,
# this regenerates the client fresh from schema.prisma; where it can't,
# it falls back to whatever was last committed under src/generated/prisma.
# Re-run `npm run prisma:generate` and commit the result after any
# schema.prisma change so that fallback stays current.
RUN npm run prisma:generate || echo "prisma generate failed; falling back to the committed generated client"
RUN test -f src/generated/prisma/client.ts
RUN npm run build

FROM node:22.20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json ./
COPY prisma ./prisma
COPY prisma.config.ts ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --from=build /app/dist ./dist

USER node
EXPOSE 3000
# Migrations are applied as an explicit deploy step (see README), not
# automatically on container start: `prisma migrate deploy` needs the same
# schema-engine binary that isn't available on 32-bit ARM hosts.
CMD ["node", "dist/src/main.js"]
