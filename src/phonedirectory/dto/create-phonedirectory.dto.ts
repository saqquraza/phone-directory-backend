import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePhonedirectoryDto {

    @ApiProperty({ example: "Akash", description: 'The firstname of the person' })
    @IsString()
    firstName: string;

    @ApiProperty({ example: "Roy", description: 'The lastname of the person' })
    @IsString()
    lastName: string;

    @ApiProperty({ example: 12, description: 'The age of the person' })
    @IsOptional()
    @IsNumber()
    age: number;

    @ApiProperty({ example: 1234, description: 'The phone number of the person' })
    @IsOptional()
    @IsNumber()
    phone: number;
}
