const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },
  user_email: {
    type: String,
    required: true,
  },
  user_pass: {
    type: String,
    required: true,
  },
  user_status: {
    type: String,
    enum: ['enable', 'disable'],
    default: 'enable',
  }
});

module.exports = mongoose.model('user_mst', userSchema);
