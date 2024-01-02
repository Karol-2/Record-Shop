import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import auctionRoutes from "./routes/auctionRoutes";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('', auctionRoutes)
app.use('', userRoutes)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
