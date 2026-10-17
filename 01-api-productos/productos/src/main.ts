import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { envs } from './config/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Se agrega el prefijo api a todo el proyecto
  app.setGlobalPrefix('api');

  // Configuar las pipes o tuberias de la clases validator y transformer
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true,
    }),
  );

  await app.listen(envs.port);
  console.log(`Server Running on port ${envs.port}`);
}
bootstrap();
