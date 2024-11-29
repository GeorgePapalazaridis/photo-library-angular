import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class PhotoDto {
    @IsString()
    @IsNotEmpty()
    url!: string;

    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsUUID()
    @IsNotEmpty()
    id!: string;
}
