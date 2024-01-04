import { Type } from "../enums/Type.enum";

export interface Auction{
    readonly id: string;
    readonly dateCreated: Date;

    categoryId: number;

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