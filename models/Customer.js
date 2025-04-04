const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Customer', CustomerSchema);