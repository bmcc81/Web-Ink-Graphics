export declare class AssetFieldValueInputDto {
    key: string;
    value: string;
}
export declare class CreateProjectAssetDto {
    templateId: string;
    name?: string;
    values?: AssetFieldValueInputDto[];
}
