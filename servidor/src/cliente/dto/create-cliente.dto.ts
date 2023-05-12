import { Transform } from 'class-transformer';
import { IsString, IsDate, Length, IsBoolean, IsNumber, IsNumberString, IsBooleanString } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  @Length(2, 100, { message: 'O nome deve ter entre 2 e 100 caracteres' })
  name: string;

  @IsString()
  birthdate: string;

  @IsString()
  document: string;

  @IsBooleanString({ message: 'acceptedTermsAndConditions deve ser uma string booleana' })
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
