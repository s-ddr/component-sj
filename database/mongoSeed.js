const SearchObj = require('./mongoIndex.js');

// mongoose.connection.collections['searchobjects'].drop( function(err) {
//     console.log('collection dropped');
// });

const categories = [
"Living Room",
"Sofa & Sectional Collections",
"Dining Room & Kitchen",
"Kitchen Furniture",
"Bedroom",
"Home Office",
"More Rooms",
"Outdoor Furniture",
"Outdoor Pillows & Decor",
"Planters & Garden",
"Outdoor Planters",
"All Planters & Terrariums",
"Outdoor Entertaining",
"All Rugs",
"Windows",
"All Bedding",
"Bedding Essentials",
"All Bedding Essentials",
"Baby & Kids Bedding",
"Bath Linens",
"Bath Linen Collections",
"Bath Accessories & Organization",
"Bathroom Hardware & Lighting",
"All Lighting",
"Lighting Collections",
"Pillows & Throws & Poufs",
"All Pillows, Throws & Poufs",
"Organization",
"All Home Organization",
"Room Accents",
"Accessories & Gifts",
"Mirrors",
"All Mirrors",
"Art",
"All Art",
"Art By Color",
"Art By Subject",
"Wall Organization",
"Frames & Wall Decor",
"Dinnerware",
"Dinnerware Collections",
"All Dinnerware",
"Serveware",
"Flatware",
"Bar & Glassware",
"All Barware & Glassware",
"Table Linens",
"All Table Linens",
"Kitchen",
"Brands"
];

const descriptions = [
  "glass",
  "stem",
  "bath",
  "garden",
  "dining",
  "bar",
  "counter",
  "kitchen",
  "desk",
  "office",
  "baby",
  "kids",
  "accent",
  "urban",
  "side",
  "outdoor",
  "patio",
  "indoor",
  "patterned",
  "solid",
  "moroccan",
  "persian",
  "natural",
  "entryway",
  "hallway",
  "window",
  "decorative",
  "linen",
  "organic cotton",
  "white",
  "neutral",
  "gray",
  "blue",
  "purple",
  "pink",
  "floor",
  "table",
  "ceiling",
  "closet",
  "wall",
  "abstract",
  "modern",
  "leather",
  "wood",
  "marble",
  "rattan",
  "silk",
  "mid-century",
  "bamboo",
  "wicker",
  "plastic",
  "metal"
]

const names = 
[
'sofas',
'sectionals',
'loveseats',
'furniture',
'chairs',
'coffee tables',
'side tables',
'tables',
'bar stools',
'bar carts',
'wall art',
'rugs',
'lighting',
'lamps',
'pillows',
'Lift chairs',
'Bean bags',
'Chaise longues',
'Fauteuils',
'Ottomans',
'Recliners',
'Stools',
'Bar Stools',
'Footstool or ottomans',
'Tuffets',
'Fainting couchs',
'Rocking chairs',
'Bar chairs',
'Daybed',
'Futon',
'Hammock',
'Headboard',
'Infant bed',
'Mattress',
'Sofa bed',
'Billiard table',
'Chess table',
'Entertainment center',
'Gramophone',
'Jukebox',
'Pinball machine',
'Radiogram',
'Home bar',
'Television set',
'Radio receiver',
'Video game console',
'Desktop PCs and laptops',
'Chabudai',
'Changing table',
'Desk',
'Davenport desk',
'Drawing board',
'Computer desk',
'Writing desk',
'Kotatsu',
'Korsi',
'Lowboy',
'Monks bench',
'Pedestal',
'Game Table',
'Coffee table',
'Dining table',
'Refectory table',
'Drop-leaf table',
'End table',
'Folding table',
'Gateleg table',
'Poker table',
'Trestle table',
'TV tray table',
'Wine table',
'Washstand',
'Workbench',
'Bakers rack',
'Bookcase',
'Cabinetry',
'Bathroom cabinet',
'Chifforobe',
'Closet',
'Cupboard',
'Curio cabinet',
'Hutch',
'Hoosier cabinet',
'Kitchen cabinet',
'Liquor cabinet',
'Pantry',
'Pie safe'
]

const mongoose = require('mongoose');
const fs = require('fs');
const csvStream = fs.createWriteStream('data.csv');

// returns random element from an array
const randomizer = (array) => {
  let randomNum = Math.floor(Math.random() * ( array.length ));
  return array[randomNum];
};

const randomizedProduct = () => {
  return '' + i + randomizer(names) + randomizer(categories) + randomizer(descriptions);
}

let i = 0;

csvStream.write('id,name,categories,descriptions\n');

const dataGenerator = () => {
  var ok = true;
  do {
    i++;
    if (i % 1000000 === 0) { console.log(`${i} documents created`) }
    if (i === 10000000) {
      csvStream.write(randomizedProduct(), 'utf8', () => { csvStream.end(); mongoose.connection.close(); });
    } else {
      ok = csvStream.write(randomizedProduct(), 'utf8');
    }
  } while (i <= 10000000 && ok);
  if (i > 0) {
    csvStream.once('drain', dataGenerator);
  }
}

dataGenerator();
// const dataGenerator = () => {
//   writer.pipe(fs.createWriteStream('./data.csv'));
//   for (let i = 0; i <= 10000000; i++) {
//     writer.write({
//       id: counter++,
//       name: randomizer(names),
//       categories: [randomizer(categories), randomizer(categories), randomizer(categories)],
//       descriptions: [randomizer(descriptions), randomizer(descriptions), randomizer(descriptions), randomizer(descriptions), randomizer(descriptions)]
//     })
//   }
  // writer.end();
  // mongoose.connection.close();
//   console.log('Data created!')
// }


module.exports = {
  names, 
  descriptions, 
  categories
};