import { NestFactory } from '@nestjs/core';
import * as Config from 'config';
import { AppConfig } from './interfaces/app-config.interface';
import { SwaggerConfig } from './interfaces/swagger-config.interface';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap(config: AppConfig,  swaggerConfig: SwaggerConfig) {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter({ logger: true}) );
  // Accept cross-origin
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const options = new DocumentBuilder()
    .setTitle(swaggerConfig.title)
    .setDescription(swaggerConfig.description)
    .setVersion(swaggerConfig.version)
    .addTag(swaggerConfig.tag)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  // setup swagger module
  SwaggerModule.setup(swaggerConfig.path, app, document);
  // launch server
  await app.listen(config.port, config.host);
  Logger.log(`Application served at http://${config.host}:${config.port}`, 'bootstrap');
}
bootstrap(Config.get<AppConfig>('server'), Config.get<SwaggerConfig>('swagger'));
