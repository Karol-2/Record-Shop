import { Category } from "../enum/Category.enum";

export interface Auction{
    readonly id: string;
    readonly dateCreated: Date;

    readonly ownerId: string;
    category: Category;

    name: string;
    price: number;
    description: string;
    photos: string[];
    isBought: boolean;

    buyerId: string | null;
    dateBought: Date | null;
    
}