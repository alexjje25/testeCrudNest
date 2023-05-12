## pré-requisitos
```bash
npm install -g npm
npm insta```ll -g @nestjs/cli
```
## outros pré-requisitos
```bash
instale o postman ou insomnia e também um sgbd do mysql de sua escolha ,é possivel utilizar o swagger tambem atraves do link http://localhost:3001/api/
```
## criando o projeto
```bash
nest new Projeto-API
```
## rodar em modo dev
```bash
npm run start:dev
```

## instalando typeorm para mysql
```bash
npm install --save typeorm mysql2
```
## fonte: https://docs.nestjs.com/recipes/sql-typeorm

## instalando o swagger
```bash
npm install --save @nestjs/swagger
```
## incluindo o swagger no main.ts
```bash
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
```
## fonte: https://docs.nestjs.com/openapi/introduction 

```bash
nest g resource cliente --no-spec
```
