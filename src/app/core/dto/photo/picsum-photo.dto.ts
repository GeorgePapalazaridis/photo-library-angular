import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class PicsumPhotoDto {
    @IsUUID()
    @IsNotEmpty()
    id!: string;

    @IsString()
    @IsNotEmpty()
    author!: string;

    @IsNumber()
    @IsNotEmpty()
    width!: number;

    @IsNumber()
    @IsNotEmpty()
    height!: number;

    @IsString()
    @IsNotEmpty()
    url!: string;

    @IsString()
    @IsNotEmpty()
    download_url!: string;
}
