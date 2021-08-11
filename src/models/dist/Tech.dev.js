"use strict";

var moongose = require('mongoose');

var Schema = moongose.Schema;
var Tech = new Schema({
  url: {
    type: String,
    required: false,
    unique: false
  },
  titulo: {
    type: String,
    required: false,
    unique: false
  },
  tag: {
    type: String,
    required: false,
    unique: false
  }
});
module.exports = moongose.model('Tech', Tech);