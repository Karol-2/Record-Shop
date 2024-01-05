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
            "https://images.squarespace-cdn.com/content/v1/5f4a6763a23dbb3ab86255f7/1703697323536-1U9XRIF5SGFZ4AHL99OC/3.png",
            "https://www.turntablelab.com/cdn/shop/products/taylorswift-folklore-coloredvinyl-2_1000x1000.jpg?",
            "https://m.media-amazon.com/images/I/61aCZ-+3EhL._UF894,1000_QL80_.jpg"
        ],
        isBought: false,
        buyerId: null,
        dateBought: null
    },
    {
        id: uuidv4(),
        dateCreated: new Date(2023,10,22),
        categoryId: 1,
        artistName: "Fleetwood Mac",
        albumName: "Rumours",
        type: Type.VINYL,
        price: 99.99,
        description: "This 1975 multi-platimum album, Rumours became Fleetwood Mac's most celebrated album and one of the best-selling albums of all time. Certified at 18 million units by the RIAA (2/01). This Diamond Award Winning, Grammy 'Album Of The Year' masterpiece from Fleetwood Mac is available as an Audiophile Deluxe Version pressed on 2-Disc 45 RPM, 180 gram vinyl (pressed At Pallas), as well as a standard 33 1/3 single disc.",
        photos: [
            "https://www.impericon.com/432x624x90/media/catalog/product/2/0/20230120_fleetwood_mac_rumors_lp_lg_1.jpg",
            "https://cdn11.bigcommerce.com/s-rdecee92oy/products/25987/images/5916113/wealp97934-45-large__47707.1676630513.500.750.jpg?c=2",
            "https://c8.alamy.com/comp/D5K641/fleetwood-mac-rumours-album-label-with-classic-tracks-dreams-and-go-D5K641.jpg"
        
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
        description: "Widely acknowledged as one of the greatest British rock albums of all time, ‘The Dark Side of the Moon’ remains a truly extraordinary recording, notching up sales in excess of a staggering 50 million worldwide! Rare / Unusual New Zealand Pressing Of The Pink Floyd Masterpiece On Vinyl! Gatefold Cover & Label Numbers Are Standard NZ, But The Matrices Indicate This Is A Quadraphonic Edition!",
        photos: [
            "https://static.musictoday.com/store/bands/4373/product_600/X3LPPF09.JPG",
            "https://muzikercdn.com/uploads/product_gallery/4333/433314/thumb_d_gallery_base_f93a6e63.jpg"
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
        albumName: "A Night at the Opera",
        type: Type.CD,
        price: 17.99,
        description: "Nothing succeeds like excess at least that's the case with Queen's breakthrough classic, A Night at the Opera. On one level, the title is a reference to the band's operatic pretensions, best in evidence here on the classic 'Bohemian Rhapsody,' which was championed by headbangers a generation before being revived by the Wayne's World set. Of course, A Night at the Opera was also the title of a Marx Brothers movie, and the reference isn't lost on Queen, who seldom scaled the heights of pomprock without a knowing wink. The album is remembered for its meticulously produced bombast, but the truth is that there's a wide variety of material here.",
        photos: [
            "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71eu02SZK1L._UF1000,1000_QL80_.jpg",
            "https://i.ebayimg.com/images/g/yhoAAOSwz~Zfaqkw/s-l1600.jpg"
        ],
        isBought: false,
        buyerId: null,
        dateBought: null
    },
    
    {
        id: uuidv4(),
        dateCreated: new Date(2022,5,4),
        categoryId: 0,
        artistName: "Taylor Swift",
        albumName: "1989 Deluxe",
        type: Type.CD,
        price: 19.99,
        description: "Pop perfection by Taylor Swift.",
        photos: [
            "https://m.media-amazon.com/images/I/817iW0LZV5L._UF894,1000_QL80_.jpg",
            "https://www.blackvinylrecordsspain.com/cdn/shop/files/340a2e5f-5e02-4b40-9c04-87f5476b2010.9e67b958e1c6ef26ec7f5b33e2a3238a.jpg"
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
        albumName: "AM",
        type: Type.VINYL,
        price: 89.99,
        description: "Most popular album by Arctic Monkeys with a unique sound.",
        photos: [
            "https://plasticstone.net/cdn/shop/products/ArcticMonkeys-AMLP_BlackVinyl_1024x1024@2x.jpg",
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
            "https://static.asfaltshop.pl/uploads2/photos/original/2022/11/24/20221124013516_418467121811_800.jpg",
            "https://muzyka.sklep.pl/img/product_media/1-1000/BILLIE-EILISH-HAPPIER-THAN-EVER-EXCLUSIVE-MULTICOLOR-VINYL-1804.png"
        ],
        isBought: false,
        buyerId: null,
        dateBought: null
    },
    
    {
        id: uuidv4(),
        dateCreated: new Date(2022,2,23),
        categoryId: 0,
        artistName: "Lana del Ray",
        albumName: "Norman Fucking Rockwell",
        type: Type.VINYL,
        price: 99.99,
        description: "We have for sale this Lana Del Rey album 'Norman Fucking Rockwell' on a double black vinyl LP. It is brand new and still sealed, so it is in mint condition. If you purchase from us before 1pm Monday to Friday, we can send this to you the same day! Otherwise, we will send next working day.",
        photos: [
            "https://m.media-amazon.com/images/I/711NXSkCIqL._UF894,1000_QL80_.jpg",
            "https://images.squarespace-cdn.com/content/v1/59e4d7048c56a80fde553a0b/1602085837075-RAPAH4JZNA0TLR8L9PZQ/LDR+Vinyl+spread+outer.jpg"
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
        description: "The Weeknd's critically acclaimed album with hits like 'Blinding Lights.After Hours - Exclusive Limited Edition Clear w/ Red Blood Splatter Colored Vinyl 2LP. This release features alternate cover art and three bonus tracks.'",
        photos: [
            "https://youngvinyl.com/wp-content/uploads/2021/08/IMG_9833.png",
            "https://images.stockx.com/images/The-Weeknd-After-Hours-Album-Collector-001-Vinyl.png",
            "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/5144+9tTkRL._UX250_.jpg"
        ],
        isBought: false,
        buyerId: null,
        dateBought: null
    },


]