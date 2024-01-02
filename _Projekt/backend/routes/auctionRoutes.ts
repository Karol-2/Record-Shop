import express, { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Auction } from '../models/Auction.model';
import { auctionData } from '../data/auctionData';
import jwt from 'jsonwebtoken';
import { RequestWithUser } from '../models/RequestWithUser.model';

const router = express.Router();

const secretKey = '123456';

let auctions: Auction[] = auctionData;

console.log(auctions[0])

const authenticateUser = (req: RequestWithUser, res: Response, next: NextFunction) => {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - No token provided' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    if (typeof decoded === 'string') {
      req.user = { username: decoded };
    } else {
      req.user = decoded as { username: string };
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};

router.get('/auctions', (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || auctions.length;
  
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
  
    const paginatedAuctions = auctions.slice(startIndex, endIndex);
  
    res.status(200).json({
      auctions: paginatedAuctions,
      totalPages: Math.ceil(auctions.length / pageSize),
      currentPage: page,
    });
  });

router.get('/auctions/:id', (req: Request, res: Response) => {
  const auctionId = req.params.id;
  const auction = auctions.find((a) => a.id === auctionId);

  if (auction) {
    res.status(200).json({ auction });
  } else {
    res.status(404).json({ message: 'Auction not found' });
  }
});

// ********** SECURED **********

router.post('/auctions',  authenticateUser, (req: Request, res: Response) => {
  const {
    ownerId,
    category,
    name,
    price,
    description,
    photos,
    isBought,
    buyerId,
    dateBought,
  } = req.body;

  const newAuction: Auction = {
    id: uuidv4(),
    dateCreated: new Date(),
    ownerId,
    category,
    name,
    price,
    description,
    photos,
    isBought,
    buyerId: buyerId || null,
    dateBought: dateBought || null,
  };

  auctions.push(newAuction);

  res.status(201).json({ message: 'Auction created successfully', auction: newAuction });
});


router.put('/auctions/:id',  authenticateUser, (req: Request, res: Response) => {
  const auctionId = req.params.id;
  const updatedAuction = req.body;

  const index = auctions.findIndex((a) => a.id === auctionId);

  if (index !== -1) {
    auctions[index] = { ...auctions[index], ...updatedAuction };
    res.status(200).json({ message: 'Auction updated successfully', auction: auctions[index] });
  } else {
    res.status(404).json({ message: 'Auction not found' });
  }
});

router.delete('/auctions/:id', authenticateUser, (req: Request, res: Response) => {
  const auctionId = req.params.id;
  const index = auctions.findIndex((a) => a.id === auctionId);

  if (index !== -1) {
    auctions.splice(index, 1);
    res.status(200).json({ message: 'Auction deleted successfully' });
  } else {
    res.status(404).json({ message: 'Auction not found' });
  }
});


router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email === 'user@wp.pl' && password === 'password') {

    const accessToken = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
    const refeshToken = jwt.sign({ email}, secretKey, {expiresIn: '2h'})
    res.status(200).json({ accessToken: accessToken , refreshToken: refeshToken});
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});



export default router;
