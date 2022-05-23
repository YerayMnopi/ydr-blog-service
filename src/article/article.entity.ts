import { Entity, ManyToOne, ManyToMany, Column, JoinColumn, JoinTable } from "typeorm";
import { SlugeableEntity } from "ydr-nest-common";
import { IsString, MinLength } from 'class-validator';
import { Author } from "./author.entity";
import { Category } from "./category.entity";

@Entity('articles')
export class Article extends SlugeableEntity {
    @Column({ type: 'varchar', length: 255 })
    @IsString()
    @MinLength(2)    
    description: string;

    @ManyToOne(type => Author, author => author.articles, {
        eager: true,
    })
    @JoinColumn() 
    author: Author;

    @Column({ type: 'varchar', length: 255 })
    @IsString()
    @MinLength(2)    
    body: string;

    @Column('date', {
        default: null,
        nullable: true
    })
    publishedAt: Date | null;

    @ManyToMany(() => Category, category => category.articles)
    @JoinTable()
    categories: Category[];
    

}
