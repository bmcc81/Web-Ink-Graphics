"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectAssetsModule = void 0;
const common_1 = require("@nestjs/common");
const activity_log_module_1 = require("../activity/activity-log.module");
const project_assets_controller_1 = require("./project-assets.controller");
const project_assets_service_1 = require("./project-assets.service");
let ProjectAssetsModule = class ProjectAssetsModule {
};
exports.ProjectAssetsModule = ProjectAssetsModule;
exports.ProjectAssetsModule = ProjectAssetsModule = __decorate([
    (0, common_1.Module)({
        imports: [activity_log_module_1.ActivityLogModule],
        controllers: [project_assets_controller_1.ProjectAssetsController],
        providers: [project_assets_service_1.ProjectAssetsService],
    })
], ProjectAssetsModule);
//# sourceMappingURL=project-assets.module.js.map