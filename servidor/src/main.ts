import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    // Configuração do CORS
    app.use(cors());

  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('Gerando Documentação')
    .setVersion('1.0')
    .addTag('Cliente')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
