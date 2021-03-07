import { card } from "./card.model";

export interface movement {
    movement_id: String,
    description: String,
    amount: Number,
    cards: card[]

}
