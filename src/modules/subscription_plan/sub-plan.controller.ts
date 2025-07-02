import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SubscriptionDto } from './sub_dto/sub.dto';
import { SubscriptionPlanService } from './sub-plan.service';
import { Auth } from 'src/core/decorator/user.decorator';
import { UserRole } from 'src/core/types/user.types';
import { UserSubs } from './sub_dto/user_plan.dto';

@Controller('sub plan')
export class SubscriptionPlanController {
     constructor(private readonly subsService: SubscriptionPlanService) {}

    @ApiOperation({ summary: "yangi plan qoshish"})
    @ApiResponse({ status: 200, description: 'Success' })
    @ApiResponse({ status: 404, description: 'UnSuccess' })
    @Post('create')
    CreateSubs(@Body() payload: SubscriptionDto) {
        return this.subsService.createSubs(payload)
    }

    @Auth(UserRole.USER)
    @Post('purchase')
    createUserSubs( @Req() req :Request, @Body() payload: Required<UserSubs>) {
     return  this.subsService.createUserSubs(req['user'].id, payload)

    }
    @ApiOperation({ summary: "Subscription hamasini olish"})
    @ApiResponse({ status: 200, description: 'Success' })
    @ApiResponse({ status: 404, description: 'UnSuccess' })
    @Get('all/subs')
    GetSubs() {
        return this.subsService.get_all_subs()
    }
    
}
