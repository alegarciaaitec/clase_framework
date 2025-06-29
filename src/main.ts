import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  );

  const config = new DocumentBuilder()
    .setTitle('Clase Frameworks')
    .setDescription('Swagger de clase de frameworks')
    .setVersion('1.0')
    .addTag('api')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, documentFactory);

  app.enableCors();

  await app.listen(3000);
}
bootstrap();
