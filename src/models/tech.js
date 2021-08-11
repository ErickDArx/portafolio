const moongose = require('mongoose');
const { Schema } = moongose;

const Tech = new Schema({
    url: { type: String, required: false, unique: false },
    titulo: { type: String, required: false, unique: false },
    tag: { type: String, required: false, unique: false },
});

module.exports = moongose.model('Tech', Tech);