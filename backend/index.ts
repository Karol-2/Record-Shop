/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable no-console */
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import auctionRoutes from "./routes/auctionRoutes";
import userRoutes from "./routes/userRoutes";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require('cors');

dotenv.config();

const app = express();
const port: number = 3000;

app.use(bodyParser.json());

app.use(cors());

app.use('', auctionRoutes);
app.use('', userRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
