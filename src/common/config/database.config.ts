import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { Categories_Model } from 'src/core/model/categories.model';
import { Favorite_Model } from 'src/core/model/favourite.modul';
import { Movies_Categories_Model } from 'src/core/model/movie.categories.modul';
import { Movies_Files_Model } from 'src/core/model/movies.files.modul';
import { Movies_Model } from 'src/core/model/movies.modul';
import { Payments_Model } from 'src/core/model/payments.modul';
import { Review_Model } from 'src/core/model/reviews.modul';
import { Subscriptions_Plans_Model } from 'src/core/model/subscription_plans.modul';
import { User_Subscriptions_Model } from 'src/core/model/user_subscriptions.modul';
import { UserModel } from 'src/core/model/user.modul';
import { Watch_History_Model } from 'src/core/model/watch_history.modul';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        dialect: 'postgres',
        host: config.get('DB_HOST'),
        port: +config.get('DB_PORT'),
        username: config.get('DB_USER'),
        password: config.get('DB_PASS'),
        database: config.get('DB_NAME'),
        models: [
          Categories_Model,
          Favorite_Model,
          Movies_Categories_Model,
          Movies_Files_Model,
          Movies_Model,
          Payments_Model,
          Review_Model,
          Subscriptions_Plans_Model,
          User_Subscriptions_Model,
          UserModel,
          Watch_History_Model,
        ],
        autoLoadModels: true,
        synchronize: true,
        dialectOptions: config.get('DB_HOST') !== 'localhost' ? {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        } : {},  
      }),

    }),
  ],
})
export class DatabaseModule { }
