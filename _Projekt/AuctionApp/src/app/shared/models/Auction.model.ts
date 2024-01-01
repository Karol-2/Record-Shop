import { Category } from "../enums/Category.enum";

export interface Auction{
    readonly id: string;
    readonly dateCreated: Date;

    readonly ownerId: string;
    category: Category;

    name: string;
    price: number;
    descriprion: string;
    photos: string[];
    isBought: boolean;

    buyerId: string | null;
    dateBought: Date | null;
    
}