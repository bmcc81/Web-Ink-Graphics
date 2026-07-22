var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsEmail, IsEmpty, IsIn, IsOptional, IsString, IsUrl, Length, MaxLength, } from 'class-validator';
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
export class CreateContactDto {
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
__decorate([
    IsString(),
    Length(2, 100),
    __metadata("design:type", String)
], CreateContactDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(120),
    __metadata("design:type", String)
], CreateContactDto.prototype, "company", void 0);
__decorate([
    IsEmail(),
    MaxLength(180),
    __metadata("design:type", String)
], CreateContactDto.prototype, "email", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(40),
    __metadata("design:type", String)
], CreateContactDto.prototype, "phone", void 0);
__decorate([
    IsIn(services),
    __metadata("design:type", Object)
], CreateContactDto.prototype, "service", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(80),
    __metadata("design:type", String)
], CreateContactDto.prototype, "budget", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(80),
    __metadata("design:type", String)
], CreateContactDto.prototype, "launchDate", void 0);
__decorate([
    IsOptional(),
    IsUrl({ require_tld: false }),
    MaxLength(300),
    __metadata("design:type", String)
], CreateContactDto.prototype, "website", void 0);
__decorate([
    IsString(),
    Length(20, 4000),
    __metadata("design:type", String)
], CreateContactDto.prototype, "message", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(300),
    __metadata("design:type", String)
], CreateContactDto.prototype, "source", void 0);
__decorate([
    IsEmpty({ message: 'Spam validation failed' }),
    __metadata("design:type", String)
], CreateContactDto.prototype, "fax", void 0);
//# sourceMappingURL=create-contact.dto.js.map