import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNumber, IsString, MinLength } from "class-validator";

export class CreateTaskDto {
    @ApiProperty({ example: "Titulo 1" })
    @IsString()
    @MinLength(1)
    title: string;

    @ApiProperty({ example: "Descripcion 1" })
    @IsString()
    @MinLength(1)
    description: string;

    @ApiProperty({ example: "0" })
    @IsNumber()
    priority: number;

    @ApiProperty({ example: "example@correo.com" })
    @IsEmail()
    @MinLength(1)
    email: string

    @ApiProperty({ example: true })
    @IsBoolean()
    status: boolean;
}