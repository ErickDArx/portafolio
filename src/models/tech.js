const moongose = require('mongoose');
const { Schema } = moongose;

const tech = new Schema({
    url: String,
    titulo: String,
    tag: String,
});

module.exports = moongose.model('Tech', tech);