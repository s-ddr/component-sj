const mongoose = require('mongoose')

const searchSchema = mongoose.Schema({name: String, categories: Array, descriptions: Array})
const SearchObj = mongoose.model('SearchObjects', searchSchema)

mongoose.connect('mongodb://localhost/Search', {useNewUrlParser: true})
const db = mongoose.connection
mongoose.Promise = global.Promise;

db.on('error', function() {
    console.error('failed to connect')
})
db.once('open', function() {
    console.log('successful connection')
})

module.exports = {
    SearchObj,
    db
}