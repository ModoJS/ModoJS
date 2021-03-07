"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
var _ = require('underscore');
const cardRoutes = () => {
    console.log("hola");
    const router = express_1.Router();
    // router.route("/:id").get(CardController.get.bind(CardController));
    // router.post("/", MovementController.create.bind(MovementController));
    // router.put("/:id", MovementController.update.bind(MovementController));
    // router.delete("/:id", MovementController.delete.bind(MovementController));
    return router;
};
exports.default = cardRoutes;
//# sourceMappingURL=card.routes.js.map