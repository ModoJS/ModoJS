import { statement } from '../DAL/models/statement.model';
import statementRepository from "../DAL/Repositories/statement.repository";

class StatementServices {

    constructor(StatementRepository: any) {
    }
    async post(statement: statement) {      
        return await statementRepository.Create(statement);
    }
    async getAll() {
        return await statementRepository.Retrieve({});
    }
    async getByNumerId(id: number) {  
        return await statementRepository.Retrieve({id});
    }
    async deleteByNumberId(id: number) {  
        return await statementRepository.Delete(id);
    }
    async putByNumberId(id: number, statement: statement) {  
        return await statementRepository.Update(id, statement);
    }
}
export default new StatementServices(statementRepository);