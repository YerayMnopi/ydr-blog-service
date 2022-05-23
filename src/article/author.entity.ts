import { Article } from "src/article/article.entity";
import { Entity, OneToMany } from "typeorm";
import { SlugeableEntity } from "ydr-nest-common";

@Entity('authors')
export class Author extends SlugeableEntity {
    @OneToMany(() => Article, (article: Article) => article.author)
    articles: Article[];

}
