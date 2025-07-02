import { Module } from '@nestjs/common';
import { ActiveController } from './act.controller';
import { ActiveService } from './act.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Subscriptions_Plans_Model } from 'src/core/model/subscription_plans.modul';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Subscriptions_Plans_Model]), JwtModule],
  controllers: [ActiveController],
  providers: [ActiveService]
})
export class ActiveModule {}