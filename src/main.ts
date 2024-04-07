import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RedisIoAdapter } from '@nestjs/platform-socket.io/adapters/redis-adapter'; // For Redis adapter
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new RedisIoAdapter(app)); // Set up Redis adapter for WebSockets

  app.useGlobalPipes(new ValidationPipe()); // Enable global validation pipe

  await app.listen(3000);
}
bootstrap();
