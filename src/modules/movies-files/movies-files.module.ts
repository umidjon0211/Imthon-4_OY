import { Module } from '@nestjs/common';
import { MoviesFilesService } from './movies-files.service';
import { MoviesFilesController } from './movies-files.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movies_Files_Model } from 'src/core/model/movies.files.modul';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Movies_Files_Model]), JwtModule],
  providers: [MoviesFilesService],
  controllers: [MoviesFilesController]
})
export class MoviesFilesModule {}
