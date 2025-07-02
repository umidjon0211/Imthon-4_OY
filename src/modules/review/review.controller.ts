import { Body, Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewDto } from './ReviewDto/dto';
import { ApiTags, ApiOperation, ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger';

@ApiTags('reviews')
@Controller('review')
export class ReviewController {
    constructor(private readonly reviewService: ReviewService) {}

    @Post('add/:movie_id')
    @ApiOperation({ summary: 'yangi rewiews qoshishn' })
    @ApiBody({ type: ReviewDto })
    @ApiResponse({ status: 201, description: 'Review successfully added' })
    @ApiResponse({ status: 400, description: 'Invalid data' })
    Add_Review(@Body() payload: ReviewDto, @Req() req: Request, @Param('movie_id') movie_id: string) {
        return this.reviewService.add_review(payload, req['user'].id, movie_id);
    }

    @Get('all/reviews')
    @ApiOperation({ summary: 'hammasini olish admin' })
    @ApiResponse({ status: 200, description: 'List of all reviews' })
    Get_Review() {
        return this.reviewService.get_reviews();
    }

    @Delete('/:id')
    @ApiOperation({ summary: 'delet qilsih id orqali' })
    @ApiParam({ name: 'id', type: String, description: 'Review ID' })
    @ApiResponse({ status: 200, description: 'Review successfully deleted' })
    @ApiResponse({ status: 404, description: 'Review not found' })
    Delete_Review(@Param('id') id: string) {
        return this.reviewService.delete_review(id);
    }
}
