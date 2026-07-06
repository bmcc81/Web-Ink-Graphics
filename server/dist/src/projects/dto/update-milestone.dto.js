"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMilestoneDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_milestone_dto_1 = require("./create-milestone.dto");
class UpdateMilestoneDto extends (0, mapped_types_1.PartialType)(create_milestone_dto_1.CreateMilestoneDto) {
}
exports.UpdateMilestoneDto = UpdateMilestoneDto;
//# sourceMappingURL=update-milestone.dto.js.map