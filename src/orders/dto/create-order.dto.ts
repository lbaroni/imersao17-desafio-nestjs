import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";



export class CreateOrderDto {
    @IsNotEmpty()
    asset_id: string;

    @IsPositive()
    @IsNumber()
    @IsNotEmpty()
    price: number;

    // @IsNotEmpty()
    // status: string;
}
