import CardRepository from '../DAL/Repositories/card.repository';
import { card } from "../DAL/models/card.model";

class CardService {

    constructor() {
    }
    async post(card: card) {
        return await CardRepository.Create(card);
    }
    async getAll() {
        return await CardRepository.Retrieve({});
    }
    async getCardByNumerId(number_id: number) {  
        return await CardRepository.Retrieve({number_id});
    }
    async deleteByNumberId(number_id: number) {  
        return await CardRepository.Delete(number_id);
    }
    async putByNumberId(number_id: number, card: card) {  
        return await CardRepository.Update(number_id, card);
    }
}
export default new CardService;