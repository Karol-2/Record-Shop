import { Auction } from "../models/Auction.model";
import { v4 as uuidv4 } from 'uuid';
import { Type } from "../enums/Type.enum";

export const auctionData: Auction[] = [
    {
        id: uuidv4(),
        dateCreated: new Date(2023,11,12),
        categoryId: 0,
        artistName: "Taylor Swift",
        albumName: "Folklore",
        type: Type.VINYL,
        price: 156.13,
        description: "Taylor Swift's surprise album, folklore, is available here on vinyl. Born out of social distancing and isolation, full of her whims, dreams, fears and musings, Swift’s eighth studio album features collaborations with Aaron Dessner, Bon Iver, William Bowery and Jack Antonoff. 2020, Republic",
        photos: [
            "https://imageseu.urbndata.com/is/image/UrbanOutfittersEU/0550434960095_000_b?$xlarge$&fit=constrain&qlt=80&wid=640",
            "https://www.turntablelab.com/cdn/shop/products/taylorswift-folklore-coloredvinyl-2_1000x1000.jpg?v=1627934292"
        ],
        isBought: false,
        buyerId: null,
        dateBought: null
    },
    {
        id: uuidv4(),
        dateCreated: new Date(2023,10,22),
        categoryId: 1,
        artistName: "Led Zeppelin",
        albumName: "IV LP",
        type: Type.VINYL,
        price: 199.99,
        description: "Classic rock album by Led Zeppelin.",
        photos: [
            "https://via.placeholder.com/500x500",
            "https://via.placeholder.com/500x500"
        ],
        isBought: false,
        buyerId: null,
        dateBought: null
    },
    
    {
        id: uuidv4(),
        dateCreated: new Date(2024,0,1),
        categoryId: 1,
        artistName: "Pink Floyd",
        albumName: "Dark Side of the Moon LP",
        type: Type.VINYL,
        price: 249.99,
        description: "Iconic progressive rock album by Pink Floyd.",
        photos: [
            "https://via.placeholder.com/500x500",
            "https://via.placeholder.com/500x500"
        ],
        isBought: false,
        buyerId: null,
        dateBought: null
    },
    {
        id: uuidv4(),
        dateCreated: new Date(2024,0,2),
        categoryId: 1,
        artistName: "Queen",
        albumName: "A Night at the Opera LP",
        type: Type.VINYL,
        price: 179.99,
        description: "Classic album by Queen with Bohemian Rhapsody.",
        photos: [
            "https://via.placeholder.com/500x500",
            "https://via.placeholder.com/500x500"
        ],
        isBought: false,
        buyerId: null,
        dateBought: null
    },
    
    {
        id: uuidv4(),
        dateCreated: new Date(2022,5,4),
        categoryId: 4,
        artistName: "Bob Dylan",
        albumName: "Highway 61 Revisited LP",
        type: Type.VINYL,
        price: 199.99,
        description: "Influential album by Bob Dylan.",
        photos: [
            "https://via.placeholder.com/500x500",
            "https://via.placeholder.com/500x500"
        ],
        isBought: false,
        buyerId: null,
        dateBought: null
    },
    
    {
        id: uuidv4(),
        dateCreated: new Date(2023,8,16),
        categoryId: 2,
        artistName: "Arctic Monkeys",
        albumName: "Tranquility Base Hotel & Casino LP",
        type: Type.VINYL,
        price: 29.99,
        description: "Latest album by Arctic Monkeys with a unique sound.",
        photos: [
            "https://via.placeholder.com/500x500",
            "https://via.placeholder.com/500x500"
        ],
        isBought: false,
        buyerId: null,
        dateBought: null
    },
    {
        id: uuidv4(),
        dateCreated: new Date(2023,6,13),
        categoryId: 0,
        artistName: "Billie Eilish",
        albumName: "Happier Than Ever LP",
        type: Type.VINYL,
        price: 39.99,
        description: "Chart-topping album by Billie Eilish.",
        photos: [
            "https://via.placeholder.com/500x500",
            "https://via.placeholder.com/500x500"
        ],
        isBought: false,
        buyerId: null,
        dateBought: null
    },
    
    {
        id: uuidv4(),
        dateCreated: new Date(2022,2,23),
        categoryId: 0,
        artistName: "Lorde",
        albumName: "Solar Power LP",
        type: Type.VINYL,
        price: 49.99,
        description: "Lorde's latest album showcasing her evolving sound.",
        photos: [
            "https://via.placeholder.com/500x500",
            "https://via.placeholder.com/500x500"
        ],
        isBought: false,
        buyerId: null,
        dateBought: null
    },
    
    {
        id: uuidv4(),
        dateCreated: new Date(2023,10,18),
        categoryId: 0,
        artistName: "The Weeknd",
        albumName: "After Hours LP",
        type: Type.VINYL,
        price: 59.99,
        description: "The Weeknd's critically acclaimed album with hits like 'Blinding Lights.'",
        photos: [
            "https://via.placeholder.com/500x500",
            "https://via.placeholder.com/500x500"
        ],
        isBought: false,
        buyerId: null,
        dateBought: null
    },


]