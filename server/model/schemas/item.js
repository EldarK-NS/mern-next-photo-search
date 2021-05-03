const mongoose = require('mongoose')
const { Schema } = mongoose

const ItemSchema = new Schema({
    body: {
        type: Object,
        unique: true,
        required: true
    },
    email: {
        type: String,
        minlength: 3,
        unique: false
    }
})

const Item = mongoose.model('item', ItemSchema);
module.exports = Item;