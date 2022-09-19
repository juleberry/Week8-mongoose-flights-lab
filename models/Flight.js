const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const flightSchema = new Schema({
  // Blueprint goes in here! (Exercises Step 6)
  airline: { type: String, enum: ['American', 'Southwest', 'United'] },
  flightNo: { type: Number, required: true, min: 10, max: 9999 },
  // still need to add 'one year from date created' constraints
  departs: { type: Date, default: 2023 }
});

const Flight = model('Flight', flightSchema);

module.exports = Flight;