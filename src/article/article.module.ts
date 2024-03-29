import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { Category } from './category.entity';
import { Author } from './author.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Article, Author, Category]),
  ],
  controllers: [ArticleController],
  providers: [ArticleService]
})
export class ArticleModule {}
