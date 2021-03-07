import { CardDTO } from '../DTO/card.dto';
import MovementService from "../../Services/movement.services";
import {Router, Response, Request, NextFunction } from 'express';


 class MovementController {
     public router: Router = Router();
     public route: string =  '/movement';

    constructor(public MovementService: any , public CardDTO : any) {
        this.router.get('/', this.getAll);
        this.router.get('/:movement_id', this.getByNumerId);
        this.router.post('/', this.create);
        this.router.delete('/:movement_id', this.deleteByNumberId);
        this.router.put('/:movement_id', this.putByNumberId);

    }

    async create(req: Request, res: Response) {
          const {body} = req
        return await  MovementService.post(body)
        .then((createdEntity) =>{
            return res.status(201).json({
                ok: true,
                payload: 'Se ha cargado correctamente!!'
            });
        })
        .catch((e:Error) =>{
            return res.status(404).json({
                    ok: true,
                    error: 'no se puede guardar el movimiento',
                });
        });       
    }
    async getAll(req: Request, res: Response, next: NextFunction) {
        return await MovementService.getAll()
        .then((data: any) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }
    async getByNumerId(req: Request, res: Response, next: NextFunction) {
        const { number_id } = req.params;
   
        return await MovementService.getByNumerId(parseInt(number_id))
        .then(data =>{
            if (!data) {
                return res.status(404).json({
                    ok: true,
                    message: 'No se encontraron resultados',
                    payload: null
                });               
            }
            return res.status(200).json({
                ok: true,
                payload: data
            });
        }).catch(e => {
            console.log(e)
            return res.status(500).json({
                ok: true,
                message: 'Errores en el sevidor',
            }); 
        });
      
    }
    async deleteByNumberId(req: Request, res: Response, next: NextFunction) {
        const { movement_id } = req.params;
        return await MovementService.deleteByNumberId(parseInt(movement_id))
         .then( (borrado:any) =>{
            if(!borrado){
                return res.status(404).json({
                    ok: true,
                    message: 'El borrado no se pudo realizar',
                    payload: null
                });      
            }
            return res.status(200).json({
                ok: true,
                msg:'El borrado fue realizado exitosamente!!'
            });
        }).catch((e: Error) => {
            console.log(e)

            return res.status(500).json({
                ok: true,
                message: 'Errores en el sevidor',
            }); 
        });
    }
    async putByNumberId(req: Request, res: Response, next: NextFunction) {
        const { movement_id } = req.params;
        const { body } = req;

        return await MovementService.putByNumberId(parseInt(movement_id), body)
        .then( actualizado =>{
            if(!actualizado){
                return res.status(404).json({
                    ok: true,
                    message: 'El actualizado del movimiento no se pudo realizar',
                    payload: null
                });      
            }
            return res.status(200).json({
                ok: true,
                msg:'El actualizado del movimiento fue realizado exitosamente!!'
            });
        }).catch(e => {
            console.log(e)

            return res.status(500).json({
                ok: true,
                message: 'Errores en el sevidor',
            }); 
        });
    }
}
export default MovementController;

