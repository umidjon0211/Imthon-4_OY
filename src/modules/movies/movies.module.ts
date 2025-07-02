import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movies_Model } from 'src/core/model/movies.modul';
import { JwtModule } from '@nestjs/jwt';
import { Movies_Files_Model } from 'src/core/model/movies.files.modul';

@Module({
  imports: [SequelizeModule.forFeature([Movies_Model, Movies_Files_Model]), JwtModule],
  providers: [MoviesService],
  controllers: [MoviesController]
})
export class MoviesModule {}
