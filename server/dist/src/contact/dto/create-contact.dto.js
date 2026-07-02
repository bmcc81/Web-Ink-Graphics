"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContactDto = void 0;
const class_validator_1 = require("class-validator");
const services = [
    'website',
    'redesign',
    'seo',
    'newsletter',
    'graphic-design',
    'maintenance',
    'web-application',
    'not-sure',
];
class CreateContactDto {
    name;
    company;
    email;
    phone;
    service;
    budget;
    launchDate;
    website;
    message;
    source;
    fax;
}
exports.CreateContactDto = CreateContactDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 100),
    __metadata("design:type", String)
], CreateContactDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(120),
    __metadata("design:type", String)
], CreateContactDto.prototype, "company", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(180),
    __metadata("design:type", String)
], CreateContactDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(40),
    __metadata("design:type", String)
], CreateContactDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsIn)(services),
    __metadata("design:type", Object)
], CreateContactDto.prototype, "service", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(80),
    __metadata("design:type", String)
], CreateContactDto.prototype, "budget", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(80),
    __metadata("design:type", String)
], CreateContactDto.prototype, "launchDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)({ require_tld: false }),
    (0, class_validator_1.MaxLength)(300),
    __metadata("design:type", String)
], CreateContactDto.prototype, "website", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(20, 4000),
    __metadata("design:type", String)
], CreateContactDto.prototype, "message", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(300),
    __metadata("design:type", String)
], CreateContactDto.prototype, "source", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)({ message: 'Spam validation failed' }),
    __metadata("design:type", String)
], CreateContactDto.prototype, "fax", void 0);
//# sourceMappingURL=create-contact.dto.js.map