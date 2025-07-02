import { Module } from '@nestjs/common';
import { SubscriptionPlanService } from './sub-plan.service';
import { SubscriptionPlanController } from './sub-plan.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Subscriptions_Plans_Model } from 'src/core/model/subscription_plans.modul';
import { JwtModule } from '@nestjs/jwt';
import { User_Subscriptions_Model } from 'src/core/model/user_subscriptions.modul';

@Module({
  imports: [SequelizeModule.forFeature([Subscriptions_Plans_Model, User_Subscriptions_Model]), JwtModule],
  providers: [SubscriptionPlanService],
  controllers: [SubscriptionPlanController]
})
export class SubscriptionPlanModule {}
