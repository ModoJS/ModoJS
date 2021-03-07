"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouting = void 0;
const card_services_1 = __importDefault(require("../../Services/card.services"));
const movement_services_1 = __importDefault(require("../../Services/movement.services"));
const card_controllers_1 = __importDefault(require("../controllers/card.controllers"));
const movement_controllers_1 = __importDefault(require("../controllers/movement.controllers"));
const card_dto_1 = require("../DTO/card.dto");
class AppRouting {
    constructor(route) {
        this.route = route;
        this.route = route;
        this.configure();
    }
    configure() {
        // Add the routing classes.
        this.addRoute(new card_controllers_1.default(card_services_1.default, card_dto_1.CardDTO));
        this.addRoute(new movement_controllers_1.default(movement_services_1.default, card_dto_1.CardDTO));
    }
    addRoute(appRoute) {
        this.route.use(appRoute.route, appRoute.router);
    }
}
exports.AppRouting = AppRouting;
//# sourceMappingURL=AppRouting.js.map