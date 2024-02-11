import { Category } from "src/app/shared/enums/Category.enum";

export default interface CreateAuction{
    readonly category: Category;
    readonly artistName: string,
    readonly albumName: string
    readonly type: string,
    readonly price: number;
    readonly description: string;
    readonly photos: string[];
}