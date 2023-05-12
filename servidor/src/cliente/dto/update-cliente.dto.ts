/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { CreateClienteDto } from './create-cliente.dto';
import { IsBoolean, IsBooleanString, IsDate, IsNumber, IsNumberString, IsString, Length } from 'class-validator';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
    @IsString()
  @Length(2, 100, { message: 'O nome deve ter entre 2 e 100 caracteres' })
  name: string;

  @IsString()
  birthdate: string;

  @IsString()
  document: string;

  @IsBooleanString()
  acceptedTermsAndConditions: string;

  @IsNumberString()
  zipcode: string;

  @IsString()
  street: string;
 
  @IsString()
  neighborhood: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsDate({ message: 'dataCriacao deve ser uma instância de Date' })
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

}
