"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    constructor(entityService, entityMap) {
        this._entityService = entityService;
        this._entityMap = entityMap;
    }
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._entityService().getAll()
                .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            // let entity = await this._entityService.get(id);
            // if (!entity) {
            return res.status(200).json({
                ok: true,
                message: 'No se encontraron resultados',
                payload: null
            });
            // }
            // entity.then((data: any) => {
            // return res.status(200).json({
            // ok: true,
            // payload: data
            // });
            // });
        });
    }
    // async create(req: Request res: Response) {
    //     const { body } = req;
    //     console.log('body');
    //     console.log(body);
    //     console.log(this._entityService);
    //     try{
    //         const createdEntity = await this._entityService.post(body);
    //         if(!createdEntity){
    //             return res.status(404).json({
    //                 ok: true,
    //                 error: 'no se puede guardar la tarjeta'
    //             });
    //         }
    //         return res.status(201).json({
    //             ok: true,
    //             payload: createdEntity
    //         });
    //     }catch(e){
    //         console.log(e);
    //     }
    // }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const { id } = req.params;
            yield this._entityService.update(id, body);
            return res.status(204).send();
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield this._entityService.delete(id);
            return res.status(204).send();
        });
    }
}
exports.default = Controller;
//# sourceMappingURL=controllers.js.map