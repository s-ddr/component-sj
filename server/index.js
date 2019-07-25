const express = require('express')
const path = require('path')
const parser = require('body-parser')
const cors = require('cors')
const dbHelpers = require('../database/dbhelpers');
const model = require('../database/index');
const mongoose = require('mongoose')

const app = express()
const port = 3001;

app.use(parser.json()) // converts to json
app.use(parser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../client/dist')));

// testing find()
app.post("/api/search", (req, res) => {
 let input = req.body.text;
 console.log('input:', input)
  mongoose.connection.db.collection('searchobjects').find({
    name: {$regex: new RegExp(input), $options: 'i'}
  }).limit(10).toArray((err, docs) => { if (err) { res.status(404).send('feelsbadman', err) }
    console.log(docs)
      res.status(200).send(docs)
    })
})

// // testing findOne()
// app.post("/api/search", (req, res) => {
//   mongoose.connection.db.collection('searchobjects').findOne({
//     id: 9999999}, (err, docs) => { if (err) { res.status(404).send('feelsbadman', err) }
//     console.log(docs)
//       res.status(200).send(docs)
//   })
// })

// // testing findOne()
// app.post("/api/search", (req, res) => {
//   let input = req.body.text;
//   mongoose.connection.db.collection('searchobjects').findOne({
//     id: input}, (err, docs) => { if (err) { res.status(404).send('feelsbadman', err) }
//     console.log(docs)
//       res.status(200).send(docs)
//   })
// })

// app.post("/api/search", cors(), (req, res) => {
//     Promise.all([dbHelpers.getAllCategories(), dbHelpers.getAllDesc(), dbHelpers.getAllObjs()])
//         .then((results) => {
//             var categories = results[0]
//             var descriptions = results[1]
//             var searchObjs = results[2] 
//             var searchWord = req.body.text.toLowerCase()
            
//             var createSearchResults = function(word) {
//                 var results = [];
//                 var searchResultObjs = searchObjs
                
              
//                 var autoComplete = function(word) {
//                   var wordLength = word.length
                
//                     for (var i = 0; i < searchResultObjs.length; i++) {
//                       var arrayEle = searchResultObjs[i].name.slice(0, wordLength)
//                       if(word === arrayEle) {
//                         return searchResultObjs[i]
//                       }
//                     }
//                   return -1
//                 }
              
//                 var resultsFormatter = function(obj) {
//                   var catSearchResults = []
//                   var descSearchResults = []
                  
//                   while(catSearchResults.length !== 3) {
//                     var randomCatIndex = Math.floor(Math.random()*obj.categories.length)
//                     catSearchResults.push(`${obj.name} in ${obj.categories[randomCatIndex]}`)
//                     obj.categories.splice(randomCatIndex, 1)
//                   }
                
//                   while(descSearchResults.length !== 5) {
//                     var randomDescIndex = Math.floor(Math.random()*obj.descriptions.length)
//                     descSearchResults.push(`${obj.descriptions[randomDescIndex]} ${obj.name}`)
//                     obj.descriptions.splice(randomDescIndex, 1)
//                   }
                
                  
//                   descSearchResults.unshift(obj.name)
//                   results.push(...catSearchResults)
//                   results.push(...descSearchResults)
//                   return results
//                   }

//                   var resultRandomizer = function(word) {
//                       var catResults = [];
//                       var descResults = [];

//                     while(catResults.length !== 3) {
//                         var catIndex = Math.floor(Math.random() * categories.length)
//                         catResults.push(`${word} in ${categories[catIndex].name}`)
//                         categories.splice(catIndex, 1)
//                     }

//                     while(descResults.length !== 5) {
//                         var descIndex = Math.floor(Math.random() * descriptions.length)
//                         descResults.push(`${descriptions[descIndex].name} ${word}`)
//                         descriptions.splice(descIndex, 1)
//                     }

//                     descResults.unshift(word)
//                     results.push(...catResults)
//                     results.push(...descResults)
//                     return results
//                   }
              
//                 if(autoComplete(searchWord) === -1) {
//                   resultRandomizer(searchWord)
//                   return results
//                 } else {
//                   var completeWord = autoComplete(searchWord)
//                   resultsFormatter(completeWord)
//                   return results
//                 }
//         }
              
//          res.send(createSearchResults(searchWord))
        
//          })

// })


app.listen(port, () => console.log(`listening on port ${port}`))
