import { MoviesService } from './movies.service';
import { MovieDto } from './MovieDto/movie.dto';
import { Movie_Files_Dto } from '../movies-files/MovieDto/movie.dto';
import { MovieQuery } from './MovieDto/movie.query.dto';
import { Updated_MovieDto } from './MovieDto/update.dto';
export declare class MoviesController {
    private readonly movieService;
    constructor(movieService: MoviesService);
    getByQuery(query: MovieQuery): Promise<{
        success: boolean;
        data: any[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            pages: number;
        };
    }>;
    createMovie(req: Request, poster: Express.Multer.File, payload: MovieDto): Promise<{
        success: boolean;
        message: string;
        data: import("../../core/model/movies.modul").Movies_Model;
    }>;
    create(id: string, video: Express.Multer.File, payload: Movie_Files_Dto): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    GetSlug(slug: string): Promise<{
        success: boolean;
        dataa: import("../../core/model/movies.modul").Movies_Model[];
    }>;
    Updated_Movie(id: string, payload: Updated_MovieDto): Promise<{
        success: boolean;
        data: import("../../core/model/movies.modul").Movies_Model | undefined;
    }>;
    Delete(id: string): Promise<{
        success: boolean;
        data: number;
    }>;
    GetAll(): Promise<import("../../core/model/movies.modul").Movies_Model[]>;
}
