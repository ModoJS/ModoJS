import Statement from '../Entities/statement.entity';
import IRepository from './IRepository';
import { movement } from '../models/movement.model';
import { card } from '../models/card.model';
import Card from '../Entities/card.entity';
import Movement from '../Entities/movement.entity';
import { statement } from '../models/statement.model';

class StamentRepository implements IRepository{

    constructor() {

    }

    async Create(stament: statement): Promise<any>{  
      
        
        const newStatement = new Statement({
            stament
        });

        return await newStatement.save((err: Error, statementSaved: statement) => {
            if (err) throw err;
            return statementSaved;
        });
    }
    async Retrieve(Expression: any): Promise<any>{
        return await Statement.find( Expression , (err: Error, statement: statement) => {
            if (err) {
                return;
            }
            return statement;
        });
    }    
    async Update(id: number, statement: statement): Promise<boolean> {
        return await Statement.findOne({
            id: id
        })
        .then((statementFounded: any) => {
            if(statement.Entity)  statementFounded.Entity = statement.Entity; 
            Statement
                .save((err: Error, statementModified: statement) => {
                    if (err) throw err;
                    console.log(statementModified);                    
                    return true;
                });
        })
        .catch((err: Error) =>{
            console.log(err);
            return false;            
        });
    }
    async Delete(id: number): Promise<boolean>  {
        return await Statement.deleteOne({ 
                        'id' : id 
                    },(err: Error, statementDeleted: any) => {
                        if (err) throw err;
                        console.log(statementDeleted);                            
                        return true;
                    })
                    .catch((err: Error) =>{
                        console.log(err);
                        return false;            
                    });
    }

}
export default new StamentRepository;