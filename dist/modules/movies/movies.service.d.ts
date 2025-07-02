import { Movies_Model } from 'src/core/model/movies.modul';
import { MovieDto } from './MovieDto/movie.dto';
import { Movies_Files_Model } from 'src/core/model/movies.files.modul';
import { Movie_Files_Dto } from '../movies-files/MovieDto/movie.dto';
import { MovieQuery } from './MovieDto/movie.query.dto';
import { Updated_MovieDto } from './MovieDto/update.dto';
export declare class MoviesService {
    private moviesModel;
    private moviesFileModel;
    constructor(moviesModel: typeof Movies_Model, moviesFileModel: typeof Movies_Files_Model);
    getAll(query: MovieQuery): Promise<{
        success: boolean;
        data: any[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            pages: number;
        };
    }>;
    createMovie(id: string, payload: MovieDto, poster: Express.Multer.File): Promise<{
        success: boolean;
        message: string;
        data: Movies_Model;
    }>;
    create(id: string, payload: Movie_Files_Dto, filename: Express.Multer.File): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    get_by_slug(slug: string): Promise<{
        success: boolean;
        dataa: Movies_Model[];
    }>;
    delete_movie(id: string): Promise<{
        success: boolean;
        data: number;
    }>;
    put_movie(id: string, payload: Updated_MovieDto): Promise<{
        success: boolean;
        data: Movies_Model | undefined;
    }>;
    Get_All(): Promise<Movies_Model[]>;
}
