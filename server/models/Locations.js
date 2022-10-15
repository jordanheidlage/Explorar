const { Schema } = require('mongoose');

const locationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  locationId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  }
});

module.exports = locationSchema;
