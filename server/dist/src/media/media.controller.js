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
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { CreateUploadDto } from './dto/create-upload.dto.js';
import { MediaService } from './media.service.js';
let MediaController = class MediaController {
    media;
    constructor(media) {
        this.media = media;
    }
    createUpload(user, dto) {
        return this.media.createUpload(user, dto);
    }
};
__decorate([
    Post('upload-url'),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateUploadDto]),
    __metadata("design:returntype", void 0)
], MediaController.prototype, "createUpload", null);
MediaController = __decorate([
    Controller('media'),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [MediaService])
], MediaController);
export { MediaController };
//# sourceMappingURL=media.controller.js.map