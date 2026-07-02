import {
  IsEmail,
  IsEmpty,
  IsIn,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  MaxLength,
} from 'class-validator';

const services = [
  'website',
  'redesign',
  'seo',
  'newsletter',
  'graphic-design',
  'maintenance',
  'web-application',
  'not-sure',
] as const;

export class CreateContactDto {
  @IsString()
  @Length(2, 100)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  company?: string;

  @IsEmail()
  @MaxLength(180)
  email: string;

  @IsOptional()
  @IsString()
  @MaxLength(40)
  phone?: string;

  @IsIn(services)
  service: (typeof services)[number];

  @IsOptional()
  @IsString()
  @MaxLength(80)
  budget?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  launchDate?: string;

  @IsOptional()
  @IsUrl({ require_tld: false })
  @MaxLength(300)
  website?: string;

  @IsString()
  @Length(20, 4000)
  message: string;

  @IsOptional()
  @IsString()
  @MaxLength(300)
  source?: string;

  @IsEmpty({ message: 'Spam validation failed' })
  fax?: string;
}
