import { Category } from "../enums/Category.enum";
import { Type } from "../enums/Type.enum";

export interface Auction{
    readonly id: string;
    readonly dateCreated: Date;

    readonly category: Category;

    readonly artistName: string,
    readonly albumName: string
    readonly type: Type,

    readonly price: number;
    readonly description: string;
    readonly photos: string[];

    readonly isBought: boolean;
    readonly buyerId: string | null;
    readonly dateBought: Date | null;
}