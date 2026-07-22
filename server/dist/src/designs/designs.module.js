var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module.js';
import { DesignsController } from './designs.controller.js';
import { DesignsService } from './designs.service.js';
import { FigmaService } from './figma.service.js';
let DesignsModule = class DesignsModule {
};
DesignsModule = __decorate([
    Module({
        imports: [ActivityLogModule],
        controllers: [DesignsController],
        providers: [DesignsService, FigmaService],
    })
], DesignsModule);
export { DesignsModule };
//# sourceMappingURL=designs.module.js.map