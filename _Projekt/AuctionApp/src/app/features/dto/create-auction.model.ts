import { Category } from "src/app/shared/enums/Category.enum";

export default interface CreateAuction{
    category: Category;
    artistName: string,
    albumName: string
    type: string,
    price: number;
    description: string;
    photos: string[];
}