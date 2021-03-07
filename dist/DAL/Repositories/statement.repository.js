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
const statement_entity_1 = __importDefault(require("../Entities/statement.entity"));
class StamentRepository {
    constructor() {
    }
    Create(stament) {
        return __awaiter(this, void 0, void 0, function* () {
            const newStatement = new statement_entity_1.default({
                stament
            });
            return yield newStatement.save((err, statementSaved) => {
                if (err)
                    throw err;
                return statementSaved;
            });
        });
    }
    Retrieve(Expression) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield statement_entity_1.default.find(Expression, (err, statement) => {
                if (err) {
                    return;
                }
                return statement;
            });
        });
    }
    Update(id, statement) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield statement_entity_1.default.findOne({
                id: id
            })
                .then((statementFounded) => {
                if (statement.Entity)
                    statementFounded.Entity = statement.Entity;
                statement_entity_1.default
                    .save((err, statementModified) => {
                    if (err)
                        throw err;
                    console.log(statementModified);
                    return true;
                });
            })
                .catch((err) => {
                console.log(err);
                return false;
            });
        });
    }
    Delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield statement_entity_1.default.deleteOne({
                'id': id
            }, (err, statementDeleted) => {
                if (err)
                    throw err;
                console.log(statementDeleted);
                return true;
            })
                .catch((err) => {
                console.log(err);
                return false;
            });
        });
    }
}
exports.default = new StamentRepository;
//# sourceMappingURL=statement.repository.js.map