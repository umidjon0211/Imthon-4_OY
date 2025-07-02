import { DataTypes } from 'sequelize';
import {Table, Column, Model, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { UserModel } from './user.modul';
import { Movies_Model } from './movies.modul';
import {v4 as uuidv4} from "uuid"
@Table({ tableName: 'Reviews' })
export class Review_Model extends Model {
  @Column({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, 
    primaryKey: true,
  })
  Id: string;

  @ForeignKey(() => UserModel)
  @Column({ type: DataTypes.UUID })
  user_id: string;

  @BelongsTo(() => UserModel)
  user: UserModel;

  @ForeignKey(() => Movies_Model)
  @Column({ type: DataTypes.UUID})
  movie_id: string;

  @BelongsTo(() => Movies_Model)
  movie: Movies_Model;

  @Column({
    type: DataTypes.INTEGER,
    validate: { min: 1,max: 5,},
  })
  rating: number;

  @Column({
    type: DataTypes.TEXT,
  })
  comment: string;

}
