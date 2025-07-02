import { CategoriesService } from './categories.service';
import { CategoryDto } from './CategoryDto/category.dto';
export declare class CategoriesController {
    private readonly catergoryService;
    constructor(catergoryService: CategoriesService);
    AddCategory(payload: CategoryDto): Promise<import("../../core/model/categories.model").Categories_Model>;
    AllCategory(): Promise<import("../../core/model/categories.model").Categories_Model[]>;
    CHangeCategory(id: string, payload: CategoryDto): Promise<import("../../core/model/categories.model").Categories_Model>;
    DeleteCategory(id: string): Promise<{
        success: boolean;
        data: number;
    }>;
}
