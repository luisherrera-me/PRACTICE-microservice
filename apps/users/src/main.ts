import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UsersModule, 
    {
      transport: Transport.KAFKA,
      options:{
        client:{
          brokers:['localhost:9091']
        },
        consumer:{
          groupId:'users',
        },
      },
    },
    );
  await app.listen().then(()=> console.log('Micro servise User Up'));
}
bootstrap();
