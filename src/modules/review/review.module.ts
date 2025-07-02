import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Review_Model } from 'src/core/model/reviews.modul';

@Module({
  imports: [SequelizeModule.forFeature([Review_Model])],
  providers: [ReviewService],
  controllers: [ReviewController]
})
export class ReviewModule {}
