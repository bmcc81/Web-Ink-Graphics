import { createParamDecorator } from '@nestjs/common';
export const CurrentUser = createParamDecorator((_data, context) => {
    const request = context
        .switchToHttp()
        .getRequest();
    return request.user;
});
//# sourceMappingURL=current-user.decorator.js.map