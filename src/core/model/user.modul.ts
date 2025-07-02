import { Column, Table, Model, PrimaryKey, HasMany } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { v4 as uuidv4} from "uuid"
import { UserRole } from "../types/user.types";
import { User_Subscriptions_Model } from "./user_subscriptions.modul";
import { Movies_Model } from "./movies.modul";
import { Favorite_Model } from "./favourite.modul";
import { Watch_History_Model } from "./watch_history.modul";
import { Review_Model } from "./reviews.modul";

@Table({tableName: "Users"})
export class UserModel extends Model{
    @Column({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, 
    primaryKey: true,
  })
  Id: string;
    
    @Column
    username: string

    @Column
    email: string

    @Column
    password: string

    @Column({
      defaultValue: null
    })
    phone: string

    @Column({
      defaultValue: null
    })
    country: string

    @Column({
      defaultValue: null
    })
    avatar_url?: string

    @Column({
        type: DataTypes.ENUM(...Object.values(UserRole)),
        defaultValue: UserRole.SUPERADMIN
    })
    role: UserRole

    @HasMany(() => User_Subscriptions_Model)
    user_subscriptions: User_Subscriptions_Model[]

    @HasMany(() => Movies_Model)
    movies: Movies_Model

    @HasMany(() => Favorite_Model)
    favourites: Favorite_Model[]

    @HasMany(() => Watch_History_Model)
    watch_history: Watch_History_Model[]

    @HasMany(() => Review_Model)
    review: Review_Model[]
 
}

