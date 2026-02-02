import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

console.log('ENV CHECK:', {
  PROJECT_DB_HOST: process.env.PROJECT_DB_HOST,
  PROJECT_DB_USER: process.env.PROJECT_DB_USER,
  PROJECT_DB_NAME: process.env.PROJECT_DB_NAME,
});

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PROJECT_DB_HOST,
      port: Number(process.env.PROJECT_DB_PORT),
      username: process.env.PROJECT_DB_USER,
      password: process.env.PROJECT_DB_PASSWORD,
      database: process.env.PROJECT_DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      synchronize: false,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
