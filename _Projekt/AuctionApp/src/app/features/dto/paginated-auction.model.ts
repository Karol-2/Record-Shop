import { Auction } from "src/app/shared/models/Auction.model";

export default interface PaginatedAuction{
    auctions: Auction[],
    totalPages: number,
    currentPage: number
}