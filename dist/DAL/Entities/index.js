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
var mongoose = require('mongoose');
const dbConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose.connect(process.env.MONGODB_CNN, {
            'useNewUrlParser': true,
            'useUnifiedTopology': true,
            'useCreateIndex': true,
            'useFindAndModify': false
        });
        //conexión a la base de datos mongodb
        console.log(`Base de datos mongo en el puerto: ${27017} \x1b[36m%s\x1b[0m`, 'online');
    }
    catch (error) {
        console.log(error);
        throw new Error("Error de conexion a la base de datos");
    }
});
exports.default = dbConnection;
//# sourceMappingURL=index.js.map