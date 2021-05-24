const mongoose = require("mongoose")

const infoShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
})
mongoose.model('info', infoShema)
const infomodel = mongoose.model('info')

module.exports = infomodel
