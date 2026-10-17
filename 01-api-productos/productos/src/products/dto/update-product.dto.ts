import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsOptional, IsUUID, IsString } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) { // UpdateProductDto tomamos informacion de CreateProductDto
    @IsString()
    @IsUUID()
    @IsOptional()
    id?:string;
    
}

