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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movement_repository_1 = __importDefault(require("../DAL/Repositories/movement.repository"));
class MovementServices {
    constructor(MovementRepository) {
    }
    post(movement) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield movement_repository_1.default.Create(movement);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield movement_repository_1.default.Retrieve({});
        });
    }
    getByNumerId(number_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield movement_repository_1.default.Retrieve({ number_id });
        });
    }
    deleteByNumberId(number_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield movement_repository_1.default.Delete(number_id);
        });
    }
    putByNumberId(number_id, movement) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield movement_repository_1.default.Update(number_id, movement);
        });
    }
}
exports.default = new MovementServices(movement_repository_1.default);
//# sourceMappingURL=movement.services.js.map