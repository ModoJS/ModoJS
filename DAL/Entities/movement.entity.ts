var {Schema, model} = require('mongoose');


const movementSchema = new Schema({
    movement_id: { type: String, required: [true, 'El id es necesario'] },
    description: { type: String },
    amount: { type: Number },
    card: { type: Schema.Types.ObjectId, ref: 'card' }
});

export default model('movement', movementSchema);