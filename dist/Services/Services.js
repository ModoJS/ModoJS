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
class Services {
    constructor(EntityRepository) {
        this._entityRepository = EntityRepository;
    }
    get(Expresion) {
        return __awaiter(this, void 0, void 0, function* () {
            const entity = yield this._entityRepository.Retrieve(Expresion);
            return entity;
        });
    }
    post(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdEntity = yield this._entityRepository.create(entity);
            return createdEntity;
        });
    }
    update(id, entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedEntity = yield this._entityRepository.update(id, entity);
            return updatedEntity;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedEntity = yield this._entityRepository.delete(id);
            return deletedEntity;
        });
    }
}
exports.default = Services;
//# sourceMappingURL=Services.js.map