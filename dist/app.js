"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./Api/server"));
const mongodb_1 = __importDefault(require("./DAL/Entities/mongodb"));
dotenv_1.default.config();
const server = new server_1.default();
server.listen();
mongodb_1.default();
//# sourceMappingURL=app.js.map