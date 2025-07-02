import { DataTypes } from "sequelize";
import { Column, Table, Model, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Movies_Categories_Model } from "./movie.categories.modul";
import { Movies_Model } from "./movies.modul";

@Table({tableName: "Categories"})
export class Categories_Model extends Model{

    @Column({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, 
    primaryKey: true,
     })
     Id: string;
    
    @Column
    name: string

    @Column
    slug: string

    @Column({
        type: DataTypes.TEXT
    })
    description: string

    @HasMany(() => Movies_Categories_Model)
    movies_category: Movies_Categories_Model[]

    @ForeignKey(() => Movies_Model)
    movies_id: string

    @BelongsTo(() => Movies_Model)
    movies: Movies_Model
}