require('newrelic');
const express = require('express');
const path = require('path');
const parser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan')
// const postgres = require('../database/postgresIndex.js');
// const sequelize = require('sequelize');
// const Op = sequelize.Op
const mongoose = require('mongoose');
const db = require('../database/mongoIndex.js');

const app = express()
const port = 3001;

app.use(parser.json()) // converts to json
app.use(parser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../client/dist')));


// to get all the available documents with the given search input [can limit to 10]
app.get("/api/search/chars/:input", (req, res) => {
 let { input } = req.params;
  mongoose.connection.db.collection('searchobjects')
    .find({ name: {$regex: new RegExp(input), $options: 'i'}}).limit(10).toArray((err, docs) => { 
      if (err) { res.status(404).send('feelsbadman', err) }
      res.status(200).send(docs)
    })
})

// to get one record with the given id
app.get("/api/search/id/:input", (req, res) => {
  let { input } = req.params;
  mongoose.connection.db.collection('searchobjects')
    .findOne({ id: Number(input) }, 
      (err, docs) => { 
        if (err) { res.status(404).send('feelsbadman', err) } else {
          res.status(200).send(docs)
        }
      })
})

app.post("/api/search/", (req, res) => {
  let { id,name,categories,descriptions } = req.body;
  mongoose.connection.db.collection('searchobjects')
    .insertOne({ id,name,categories,descriptions }, (err) => {
      if (err) { res.status(404).send('feelsbadman', err) } else {
        res.status(200).send(`Successfully added document`)
      }
    })
})

app.put("/api/search/", (req, res) => {
  let { id,name,categories,descriptions } = req.body;
  mongoose.connection.db.collection('searchobjects')
    .updateOne({ id,name,categories,descriptions }, (err, docs) => {
      if (err) { res.status(404).send('feelsbadman', err) }
      res.status(200).send(`Successfully updated id: ${input}`)
    })
})

app.delete("/api/search/id/:input", (req, res) => {
  let { input } = req.params;
  mongoose.connection.db.collection('searchobjects')
    .remove({id: input}, (err) => {
        if (err) { res.status(404).send('feelsbadman', err) }
        res.status(200).send(`Successfully deleted for id: ${input}`)
    })
})

app.listen(port, () => console.log(`listening on port ${port}`));