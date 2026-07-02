"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.set('trust proxy', 1);
    app.use((0, helmet_1.default)({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'"],
                styleSrc: [
                    "'self'",
                    "'unsafe-inline'",
                    'https://fonts.googleapis.com',
                ],
                fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:'],
                imgSrc: ["'self'", 'data:', 'https:'],
                connectSrc: ["'self'", 'https:'],
                objectSrc: ["'none'"],
                baseUri: ["'self'"],
                frameAncestors: ["'none'"],
            },
        },
        crossOriginResourcePolicy: { policy: 'cross-origin' },
    }));
    app.use((0, compression_1.default)());
    app.setGlobalPrefix('api', {
        exclude: [
            { path: 'sitemap.xml', method: common_1.RequestMethod.GET },
            { path: 'robots.txt', method: common_1.RequestMethod.GET },
        ],
    });
    app.enableCors({
        origin: process.env.WEB_ORIGIN ?? 'http://localhost:4200',
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
//# sourceMappingURL=main.js.map