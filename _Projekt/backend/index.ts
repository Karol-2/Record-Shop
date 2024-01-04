import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import auctionRoutes from "./routes/auctionRoutes";
import userRoutes from "./routes/userRoutes";
import categoryRoutes from "./routes/categoryRoutes"

const cors = require('cors');

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(cors());

app.use('', auctionRoutes)
app.use('', userRoutes)
app.use('', categoryRoutes)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
