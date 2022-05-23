import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';
import { ConfigModule } from '@nestjs/config';
import { ormConfig } from 'ydr-nest-common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ArticleModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(ormConfig),
    
  ]
})
export class AppModule {}
