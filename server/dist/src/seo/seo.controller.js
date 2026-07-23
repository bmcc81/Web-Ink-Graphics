var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Res } from '@nestjs/common';
import { SeoService } from './seo.service.js';
let SeoController = class SeoController {
    seo;
    constructor(seo) {
        this.seo = seo;
    }
    async sitemap(response) {
        response.type('application/xml').send(await this.seo.sitemap());
    }
    robots(response) {
        response.type('text/plain').send(this.seo.robots());
    }
};
__decorate([
    Get('sitemap.xml'),
    __param(0, Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SeoController.prototype, "sitemap", null);
__decorate([
    Get('robots.txt'),
    __param(0, Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SeoController.prototype, "robots", null);
SeoController = __decorate([
    Controller(),
    __metadata("design:paramtypes", [SeoService])
], SeoController);
export { SeoController };
//# sourceMappingURL=seo.controller.js.map