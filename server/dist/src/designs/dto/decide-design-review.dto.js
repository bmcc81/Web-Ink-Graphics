var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
export var DesignReviewDecision;
(function (DesignReviewDecision) {
    DesignReviewDecision["CHANGES_REQUESTED"] = "CHANGES_REQUESTED";
    DesignReviewDecision["APPROVED"] = "APPROVED";
})(DesignReviewDecision || (DesignReviewDecision = {}));
export class DecideDesignReviewDto {
    decision;
    note;
}
__decorate([
    IsEnum(DesignReviewDecision),
    __metadata("design:type", String)
], DecideDesignReviewDto.prototype, "decision", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(2000),
    __metadata("design:type", String)
], DecideDesignReviewDto.prototype, "note", void 0);
//# sourceMappingURL=decide-design-review.dto.js.map