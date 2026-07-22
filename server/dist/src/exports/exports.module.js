var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module.js';
import { ExportsController } from './exports.controller.js';
import { ExportsService } from './exports.service.js';
let ExportsModule = class ExportsModule {
};
ExportsModule = __decorate([
    Module({
        imports: [ActivityLogModule],
        controllers: [ExportsController],
        providers: [ExportsService],
    })
], ExportsModule);
export { ExportsModule };
//# sourceMappingURL=exports.module.js.map