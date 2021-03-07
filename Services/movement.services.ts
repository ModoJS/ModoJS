import MovementRepository from '../DAL/Repositories/movement.repository';
import { movement } from "../DAL/models/movement.model";

class MovementServices {

    constructor(MovementRepository: any) {
    }
    async post(movement: movement) {      
        return await MovementRepository.Create(movement);
    }
    async getAll() {
        return await MovementRepository.Retrieve({});
    }
    async getByNumerId(number_id: number) {  
        return await MovementRepository.Retrieve({number_id});
    }
    async deleteByNumberId(number_id: number) {  
        return await MovementRepository.Delete(number_id);
    }
    async putByNumberId(number_id: number, movement: movement) {  
        return await MovementRepository.Update(number_id, movement);
    }
}
export default new MovementServices(MovementRepository);