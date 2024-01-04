import { Type } from "src/app/shared/enums/Type.enum";

export default interface CreateAuction{
    categoryId: number;
    artistName: string,
    albumName:string
    type: Type,
    price: number;
    description: string;
    photos: string[];
}