import { Entity, ManyToMany } from "typeorm";
import { SlugeableEntity } from "ydr-nest-common";
import { Article } from "src/article/article.entity";

@Entity('categories')
export class Category extends SlugeableEntity {

    @ManyToMany(() => Article, article => article.categories)
    articles: Article[];
}
