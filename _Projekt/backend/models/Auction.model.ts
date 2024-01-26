import { Category } from "../enums/Category.enum";
import { Type } from "../enums/Type.enum";

export interface Auction{
    readonly id: string;
    readonly dateCreated: Date;

    category: Category;

    artistName: string,
    albumName:string
    type: Type,

    price: number;
    description: string;
    photos: string[];

    isBought: boolean;
    buyerId: string | null;
    dateBought: Date | null;
}