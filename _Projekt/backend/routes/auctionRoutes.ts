import express, { Request, Response, Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { Auction } from "../models/Auction.model";
import { auctionData } from "../data/auctionData";
import { authenticateUser } from "../tokens/authenticateUser";
import { AuctionAddReq } from "../models/AuctionAddReq.model";

const router: Router = express.Router();

const auctions: Auction[] = auctionData;

router.get("/auctions", (req: Request, res: Response) => {
  res.status(200).json({auctions: auctions});
});

router.get("/auctions/:id", (req: Request, res: Response) => {
  const auctionId: string = req.params.id;
  const auction: Auction | undefined = auctions.find((a: Auction) => a.id === auctionId);

  if (auction) {
    res.status(200).json({auction});
  } else {
    res.status(404).json({ message: "Auction not found" });
  }
});

// ********** SECURED **********

router.post("/auctions", authenticateUser, (req: Request, res: Response) => {
  const {
    category,
    artistName,
    albumName,
    type,
    price,
    description,
    photos,
  }: AuctionAddReq = req.body;

  const newAuction: Auction = {
    id: uuidv4(),
    dateCreated: new Date(),
    category: category,
    artistName: artistName,
    albumName: albumName,
    type: type,
    price: price,
    description: description,
    photos: photos,
    isBought: false,
    buyerId: null,
    dateBought: null,
  };

  auctions.push(newAuction);

  res
    .status(201)
    .json(newAuction);
});

router.put("/auctions/:id", authenticateUser, (req: Request, res: Response) => {
  const auctionId: string = req.params.id;
  const updatedAuction: Auction = req.body;

  const index: number = auctions.findIndex((a: Auction) => a.id === auctionId);

  if (index !== -1) {
    auctions[index] = { ...auctions[index], ...updatedAuction };
    res
      .status(200)
      .json(auctions[index]);
  } else {
    res.status(404).json({ message: "Auction not found" });
  }
});

router.delete(
  "/auctions/:id",
  authenticateUser,
  (req: Request, res: Response) => {
    const auctionId: string = req.params.id;
    const index: number = auctions.findIndex((a: Auction) => a.id === auctionId);

    if (index !== -1) {
      auctions.splice(index, 1);
      res.status(200).json({ message: "Auction deleted successfully" });
    } else {
      res.status(404).json({ message: "Auction not found" });
    }
  }
);

export default router;
