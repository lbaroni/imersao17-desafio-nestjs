import { IsNotEmpty, IsString } from "class-validator";

export class CreateAssetDto {
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    symbol: string;
}
