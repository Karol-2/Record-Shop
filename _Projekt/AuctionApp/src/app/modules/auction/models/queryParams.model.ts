import { Category } from "src/app/shared/enums/Category.enum";

export interface QueryParams {
    readonly type: string,
    readonly artistName: string,
    readonly category: Category,
    readonly showFinished: boolean,
    readonly showOngoing: boolean
}