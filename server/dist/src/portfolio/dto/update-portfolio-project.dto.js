"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePortfolioProjectDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_portfolio_project_dto_1 = require("./create-portfolio-project.dto");
class UpdatePortfolioProjectDto extends (0, mapped_types_1.PartialType)(create_portfolio_project_dto_1.CreatePortfolioProjectDto) {
}
exports.UpdatePortfolioProjectDto = UpdatePortfolioProjectDto;
//# sourceMappingURL=update-portfolio-project.dto.js.map