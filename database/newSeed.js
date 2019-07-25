const mongoose = require('mongoose');
const SearchObj = require('./index.js');

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

const randomizer = (array, maximum) => {
  let max = maximum || array.length - 1;
  let randomNum = Math.floor(Math.random() * ( max + 1 ));
  if (array) {
    return array[randomNum];
  } else {
    return randomNum;
  };
};

const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
var counter = 0;

const dataGenerator = () => {
  writer.pipe(fs.createWriteStream('./data.csv'));
  for (let i = 0; i <= 10000000; i++) {
    writer.write({
      id: counter++,
      name: randomizer(names),
      categories: [randomizer(categories), randomizer(categories), randomizer(categories)],
      descriptions: [randomizer(descriptions), randomizer(descriptions), randomizer(descriptions), randomizer(descriptions), randomizer(descriptions)]
    })
  }
  writer.end();
  mongoose.connection.close();
  console.log('Data created!')
}

dataGenerator();


// // creates one set of 10,000 records
// const dataCreator = () => {
//   let arr = [];
//   for (let i = 0; i < 10000; i++) {
//     console.log('creating')
//     arr.push({
//       name: randomizer(names),
//       categories: [randomizer(categories), randomizer(categories), randomizer(categories)],
//       descriptions: [randomizer(descriptions), randomizer(descriptions), randomizer(descriptions), randomizer(descriptions), randomizer(descriptions)]
//     })
//   }
//   return arr;
// }

// // seeds one set of 10,000 records
// const seeder = () => {
//     SearchObj.insertMany(dataCreator())
//     .then(() => {
//       mongoose.connection.close();
//       console.log('success')
//     })
//     .catch(() => console.log('gosh hecking darnit', err)) 
// }

// // // seeds i amount x 10,000 records
// // const seeder = () => {
// //   for (let i = 0; i < 100; i++) {
// //     SearchObj.insertMany(miniSeeder())
// //     .then(() => console.log('success'))
// //     .catch(() => console.log('gosh hecking darnit', err))
// //   }
// //   // mongoose.connection.close();
// // }