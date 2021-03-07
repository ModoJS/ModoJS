"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var { Schema, model } = require('mongoose');
const movementSchema = new Schema({
    movement_id: { type: String, required: [true, 'El id es necesario'] },
    description: { type: String },
    amount: { type: Number },
    card: { type: Schema.Types.ObjectId, ref: 'card' }
});
exports.default = model('movement', movementSchema);
//# sourceMappingURL=movement.entity.js.map