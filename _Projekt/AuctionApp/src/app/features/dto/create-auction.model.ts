import { Category } from "src/app/shared/enums/Category.enum";

export default interface CreateAuction{
    ownerId: string;
    category: Category;
    name: string;
    price: number;
    description: string;
    photos: string[];
}