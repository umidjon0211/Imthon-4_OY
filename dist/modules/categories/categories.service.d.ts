import { Categories_Model } from 'src/core/model/categories.model';
import { CategoryDto } from './CategoryDto/category.dto';
export declare class CategoriesService {
    private categoryModel;
    constructor(categoryModel: typeof Categories_Model);
    create_category(payload: Required<CategoryDto>): Promise<Categories_Model>;
    get_all(): Promise<Categories_Model[]>;
    put_category(id: string, payload: Required<CategoryDto>): Promise<Categories_Model>;
    delete_category(id: string): Promise<{
        success: boolean;
        data: number;
    }>;
}
