import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";



export class Movie_Files_Dto {

    @ApiProperty({format: 'binary'})
    video: string

    @ApiProperty()
    @IsNotEmpty()
    quality: ["240" | '360' | '480', | '720', | '1080', | '4K']

    @ApiProperty()
    @IsNotEmpty()
    language: ['uzbek' | 'english' | 'rusia']
}