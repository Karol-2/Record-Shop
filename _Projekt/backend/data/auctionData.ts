import { Auction } from "../models/Auction.model";
import { v4 as uuidv4 } from 'uuid';
import { userData } from "./userData";
import { Category } from "../enum/Category.enum";

export const auctionData: Auction[] = [
    {
        id: uuidv4(),
        dateCreated: new Date(11,12,2023),
        ownerId: userData[0].id,
        name: "Smartfon SAMSUNG Galaxy S23 8/128GB 5G 6.1' 120Hz",
        price: 3456.13,
        category: Category.ELECTRONICS,
        description: "Cool phone for cool guys",
        photos: [
            "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/50/5073848/Smartfon-SAMSUNG-Galaxy-S23-Ultra-5G-Zielony-front-tyl-1.jpg",
            "https://images.samsung.com/pl/smartphones/galaxy-s23/buy/02_Image_Carousel/02-1_Group_KV_Basic_Color/S23Plus-group_kv_MO.jpg"
        ],
        isBought: false,
        buyerId: null,
        dateBought: null
    },
    {
        id: uuidv4(),
        dateCreated: new Date(12,12,2023),
        ownerId: userData[0].id,
        name: "Taylor Swift - Folklore LP",
        price: 156.13,
        category: Category.ENTERTAINMENT,
        description: "Taylor Swift's surprise album, folklore, is available here on vinyl. Born out of social distancing and isolation, full of her whims, dreams, fears and musings, Swift’s eighth studio album features collaborations with Aaron Dessner, Bon Iver, William Bowery and Jack Antonoff. 2020, Republic",
        photos: [
            "https://imageseu.urbndata.com/is/image/UrbanOutfittersEU/0550434960095_000_b?$xlarge$&fit=constrain&qlt=80&wid=640",
            "https://www.turntablelab.com/cdn/shop/products/taylorswift-folklore-coloredvinyl-2_1000x1000.jpg?v=1627934292"
        ],
        isBought: false,
        buyerId: null,
        dateBought: null
    }

]