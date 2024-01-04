export interface Auction{
    readonly id: string;
    readonly dateCreated: Date;

    categoryId: number;

    artistName: string,
    albumName:string

    price: number;
    description: string;
    photos: string[];
    tracklist: string[];

    isBought: boolean;
    buyerId: string | null;
    dateBought: Date | null;
}