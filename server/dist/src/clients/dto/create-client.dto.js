var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ClientStatus } from '../../generated/prisma/client.js';
import { IsEmail, IsEnum, IsOptional, IsString, IsUrl, Length, MaxLength, } from 'class-validator';
export class CreateClientDto {
    companyName;
    industry;
    website;
    serviceArea;
    status;
    contactName;
    contactEmail;
    contactPhone;
    generalNotes;
}
__decorate([
    IsString(),
    Length(2, 160),
    __metadata("design:type", String)
], CreateClientDto.prototype, "companyName", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(120),
    __metadata("design:type", String)
], CreateClientDto.prototype, "industry", void 0);
__decorate([
    IsOptional(),
    IsUrl({ require_tld: false }),
    __metadata("design:type", String)
], CreateClientDto.prototype, "website", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(200),
    __metadata("design:type", String)
], CreateClientDto.prototype, "serviceArea", void 0);
__decorate([
    IsOptional(),
    IsEnum(ClientStatus),
    __metadata("design:type", String)
], CreateClientDto.prototype, "status", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(120),
    __metadata("design:type", String)
], CreateClientDto.prototype, "contactName", void 0);
__decorate([
    IsOptional(),
    IsEmail(),
    __metadata("design:type", String)
], CreateClientDto.prototype, "contactEmail", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(40),
    __metadata("design:type", String)
], CreateClientDto.prototype, "contactPhone", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(4000),
    __metadata("design:type", String)
], CreateClientDto.prototype, "generalNotes", void 0);
//# sourceMappingURL=create-client.dto.js.map