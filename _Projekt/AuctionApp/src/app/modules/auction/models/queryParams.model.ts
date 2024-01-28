import { Category } from "src/app/shared/enums/Category.enum";

export interface QueryParams {
    type: string,
    artistName: string,
    category: Category,
    showFinished: boolean,
    showOngoing: boolean
}