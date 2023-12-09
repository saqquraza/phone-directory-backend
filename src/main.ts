import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe()
  )
  const swaggerConfig = new DocumentBuilder()
    .setTitle("Shaquelain's Phone Directory")
    .setDescription("Api for phone directory")
    .setVersion('1.0')
    .addTag('Phone Directory')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
  app.enableCors()
  await app.listen(4000);
}
bootstrap();
