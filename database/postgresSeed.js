const data = require('./mongoSeed.js'); // names, descriptions, categories
const db = require('./postgresIndex.js');

const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();

// returns a random element from an array, or a random number (put in 0, and max value)
const randomizer = (array, maximum) => {
  let max = maximum || array.length - 1;
  let randomNum = Math.floor(Math.random() * ( max + 1 ));
  if (array) {
    return array[randomNum];
  } else {
    return randomNum;
  };
};

// Functions that seeds database with two tables, Category and Description. ~ 50 entires each.
// These tables are for the main table (Product) to refer to.
const createCategoryTable = () => {
  for (let i = 0; i < data.categories.length; i++) {
    db.Category.create({name: data.categories[i + 1]})
      .then(() => {} )
      .catch((err) => { console.log('error', err)})
  }
};
const createDescriptionTable = () => {
  for (let i = 0; i < data.descriptions.length; i++) {
    db.Description.create({name: data.descriptions[i + 1]})
    .then(() => {} )
    .catch((err) => { console.log('error', err)})
  }
};

createCategoryTable();
createDescriptionTable();
console.log('description and category tables seeded')

// Writes a .csv with 10 million records to the Product table
const dataGenerator = () => {
  writer.pipe(fs.createWriteStream('./psql-data.csv'));
  for (let i = 0; i < 10000000; i++) {
    writer.write({
      name: randomizer(data.names),
      category1: randomizer(0, 48) + 1,
      category2: randomizer(0, 48) + 1, 
      category3: randomizer(0, 48) + 1,
      description1: randomizer(0, 50) + 1, 
      description2: randomizer(0, 51) + 1, 
      description3: randomizer(0, 51) + 1, 
      description4: randomizer(0, 51) + 1, 
      description5: randomizer(0, 51) + 1
    })
  }
  writer.end();
  console.log('Data created!')
}

dataGenerator();

// COPY products(name, category1, category2, category3, description1, description2, description3, description4, description5) FROM '/Users/amandapost/Documents/GitHub/component-sj/psql-data.csv' DELIMITER ',' CSV HEADER;