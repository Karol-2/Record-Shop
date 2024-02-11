import { Category } from "../enums/Category.enum";
import { Type } from "../enums/Type.enum";

export interface AuctionAddReq {
  readonly category: Category;
  readonly artistName: string;
  readonly albumName: string;
  readonly type: Type;
  readonly price: number;
  readonly description: string;
  readonly photos: string[];
  }