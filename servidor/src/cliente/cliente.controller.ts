import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, BadRequestException, UsePipes, ValidationPipe } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { AccessTokenGuard } from 'src/access-token.guard';


@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  @UsePipes(new ValidationPipe({ skipMissingProperties: true }))
  create(@Body() createClienteDto: CreateClienteDto) {
    if (createClienteDto.name.length < 2 || createClienteDto.name.length > 100) {
      throw new BadRequestException('O nome deve conter no minimo 2 caracteres e no maximo 100 caracteres');
    }
    if (createClienteDto.birthdate.length < 1) {
      throw new BadRequestException('Data de nascimento é obrogatoria');
    }
    if (createClienteDto.zipcode.length < 8) {
      throw new BadRequestException('O cep é obrigatorio, Preencha corretamente');
    }

    return this.clienteService.create(createClienteDto);
  }
  // @Post()
  // create(@Body() createClienteDto: CreateClienteDto) {
  //   return this.clienteService.create(createClienteDto);
  // }

  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    updateClienteDto.updatedAt = new Date();
    return this.clienteService.update(+id, updateClienteDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   
  // }
  
  @Delete(':id')
  @UseGuards(AccessTokenGuard)
  deleteUsuario(@Param('id') id: string) {
    return this.clienteService.remove(+id);
  }
}
