const mongoose = require('mongoose');
const models = require('./mongoIndex.js');

mongoose.connection.collections['descriptions','categories','searchobjects'].drop( function(err) {
    console.log('collection dropped');
});

const categorySeedData = [
  { name: "Living Room" },
  { name: "Sofa & Sectional Collections" },
  { name: "Dining Room & Kitchen" },
  { name: "Kitchen Furniture" },
  { name: "Bedroom" },
  { name: "Home Office" },
  { name: "More Rooms" },
  { name: "Outdoor Furniture" },
  { name: "Outdoor Pillows & Decor" },
  { name: "Planters & Garden" },
  { name: "Outdoor Planters" },
  { name: "All Planters & Terrariums" },
  { name: "Outdoor Entertaining" },
  { name: "All Rugs" },
  { name: "Windows" },
  { name: "All Bedding" },
  { name: "Bedding Essentials" },
  { name: "All Bedding Essentials" },
  { name: "Baby & Kids Bedding" },
  { name: "Bath Linens" },
  { name: "Bath Linen Collections" },
  { name: "Bath Accessories & Organization" },
  { name: "Bathroom Hardware & Lighting" },
  { name: "All Lighting" },
  { name: "Lighting Collections" },
  { name: "Pillows & Throws & Poufs" },
  { name: "All Pillows, Throws & Poufs" },
  { name: "Organization" },
  { name: "All Home Organization" },
  { name: "Room Accents" },
  { name: "Accessories & Gifts" },
  { name: "Mirrors" },
  { name: "All Mirrors" },
  { name: "Art" },
  { name: "All Art" },
  { name: "Art By Color" },
  { name: "Art By Subject" },
  { name: "Wall Organization" },
  { name: "Frames & Wall Decor" },
  { name: "Dinnerware" },
  { name: "Dinnerware Collections" },
  { name: "All Dinnerware" },
  { name: "Serveware" },
  { name: "Flatware" },
  { name: "Bar & Glassware" },
  { name: "All Barware & Glassware" },
  { name: "Table Linens" },
  { name: "All Table Linens" },
  { name: "Kitchen" },
  { name: "Brands" }
];

const descriptionSeedData = [
    {name: "glass"},
    {name: "stem"},
    {name: "bath"},
    {name: "garden"},
    {name: "dining"},
    {name: "bar"},
    {name: "counter"},
    {name: "kitchen"},
    {name: "desk"},
    {name: "office"},
    {name: "baby"},
    {name: "kids"},
    {name: "accent"},
    {name: "urban"},
    {name: "side"},
    {name: "outdoor"},
    {name: "patio"},
    {name: "indoor"},
    {name: "patterned"},
    {name: "solid"},
    {name: "moroccan"},
    {name: "persian"},
    {name: "natural"},
    {name: "entryway"},
    {name: "hallway"},
    {name: "window"},
    {name: "decorative"},
    {name: "linen"},
    {name: "organic cotton"},
    {name: "white"},
    {name: "neutral"},
    {name: "gray"},
    {name: "blue"},
    {name: "purple"},
    {name: "pink"},
    {name: "floor"},
    {name: "table"},
    {name: "ceiling"},
    {name: "closet"},
    {name: "wall"},
    {name: "abstract"},
    {name: "modern"},
    {name: "leather"},
    {name: "wood"},
    {name: "marble"},
    {name: "rattan"},
    {name: "silk"},
    {name: "mid-century"},
    {name: "bamboo"},
    {name: "wicker"},
    {name: "plastic"},
    {name: "metal"}
]

var searchObjects = 
[
{
name: 'sofas',
categories:['Living Room','Sofa & Sectional Collections','Outdoor Furniture','Clearance'],
descriptions: ['garden','baby','kids','accent','urban','outdoor','patio','indoor','patterned','solid','moroccan','persian','natural','white','neutral','gray','blue','purple','pink','abstract','modern','leather','wood','rattan','silk','mid-century','bamboo','wicker','small space','vintage']
},
{
name: 'sectionals',
categories:['Living Room','Sofa & Sectional Collections','Outdoor Furniture','Clearance'],
descriptions: [ 'garden','baby','kids','accent','urban','side','outdoor','patio','indoor','patterned','solid','moroccan','persian','natural','white','neutral','gray','blue','purple','pink','abstract','modern','leather','wood','rattan','silk','mid-century','bamboo','wicker','small space','vintage']
},
{
name: 'loveseats',
categories:['Living Room','Collections','Outdoor Furniture','Clearance'],
descriptions: ['garden','baby','kids','accent','urban','outdoor','patio','indoor','patterned','solid','moroccan','persian','natural','white','neutral','gray','blue','purple','pink','modern','leather','rattan','silk','mid-century','bamboo','wicker','small space','vintage']
},
{
name: 'furniture',
categories: ['Living Room','Sofa & Sectional Collections','Dining Room & Kitchen','Kitchen furniture','Bedroom','Home Office','More Rooms','Outdoor Furniture','Kitchen','Brands','Clearance'],
descriptions: ['garden','dining','bar','kitchen','office','baby','kids','accent','urban','outdoor','patio','indoor','entryway','hallway','modern','leather','rattan','mid-century','bamboo','wicker','plastic','small space','vintage']
},
{
name: 'chairs',
categories: ['Living Room','Dining Room & Kitchen','Home Office','More Rooms','Outdoor Furniture'],
descriptions: ['garden','dining','bar','counter','kitchen','desk','office','baby','kids','accent','urban','side','outdoor','patio','indoor','neutral','gray','blue','purple','pink','abstract','modern','rattan','mid-century','bamboo','wicker','plastic','vintage']
},
{
name: 'coffee tables',
categories: ['Living Room','More Rooms','Outdoor Furniture','Clearance'],
descriptions:  ['glass','garden','urban','side','outdoor','patio','indoor','abstract','modern','rattan','mid-century','bamboo','wicker','plastic','metal','small space','vintage']
},
{
name: 'side tables',
categories: ['Living Room','More Rooms','Outdoor Furniture','Clearance'],
descriptions:  ['glass','garden','urban','side','outdoor','patio','indoor','abstract','modern','rattan','mid-century','bamboo','wicker','plastic','metal','small space','vintage']
},
{
name: 'tables',
categories: ['Living Room','Dining Room & Kitchen','Kitchen Furniture','Home Office','Outdoor Furniture','Clearance'],
descriptions:  ['glass','garden','dining room','bar','counter','kitchen','office','accent','urban','side','outdoor','patio','indoor','rattan','silk','mid-century','bamboo','wicker','plastic','small space','vintage','coffee','side','console']
},
{
name: 'bar stools',
categories:['Living Room','Dining room & Kitchen','Kitchen Furniture','Outdoor Furniture','Bar & Glassware'],
descriptions:  ['urban','outdoor','patio','indoor','abstract','modern','leather','wood','rattan','mid-century','bamboo','wicker','plastic','metal','vintage']
},
{
name: 'bar carts',
categories:['Living Room','Dining room & Kitchen','Kitchen Furniture','Outdoor Furniture','Bar & Glassware'],
descriptions: ['glass','urban','outdoor','patio','indoor','abstract','modern','leather','wood','rattan','mid-century','bamboo','wicker','plastic','metal','vintage']
},
{
name: 'wall art',
categories: ['Living Room','Dining Room & Kitchen','Bedroom','Home Office','More Rooms','Outdoor Pillows & Decor','Planters & Garden','Room Accents','Accessories & Gifts','All Art','Art by Color','Art by Subject','Clearance'],
descriptions: ['glass','office','decorative','abstract','modern','mid-century','vintage']
},
{
name: 'rugs',
categories: ['Living Room','Bedroom','Outdoor','Bath Linens','Bath Linen Collections','Clearance'],
descriptions: ['kitchen','kids','accent','urban','outdoor','patio','indoor','patterned','solid','moroccan','persian','natural','entryway','hallway','organic cotton','white','neutral','gray','blue','purple','pink','floor','abstract','modern','mid-century','small space','vintage'] 
},
{
name: 'lighting',
categories: ['Living Room','Dining Room & Kitchen','Bedroom','Home Office','Bathroom Hardware & Lighting','All Lighting','Lighting Collections','Clearance'],
descriptions: ['bath','garden','accent','urban','outdoor','patio','indoor','decorative','modern','mid-century','vintage']
},
{
name: 'lamps',
categories: ['Living Room','Dining Room & Kitchen','Bedroom','Home Office','Bathroom Hardware & Lighting','All Lighting','Lighting Collections','Clearance'],
descriptions: ['garden','accent','urban','outdoor','patio','indoor','decorative','modern','mid-century','vintage','floor']
},
{
name: 'pillows',
categories: ['Living Room','Bedroom','Outdoor Pillows & Decor','All Bedding','Bedding Essentials','All Bedding Essentials','Baby & Kids Bedding','Pillows & Throws & Poufs','All Pillows, Throws & Poufs','Room Accents','Clearance'],
descriptions: ['baby','kids','accent','urban','side','outdoor','patio','indoor','patterned','solid','moroccan','decorative','linen','organic cotton','abstract','modern','silk','mid-century','vintage']
}

]

const seedCategoryFunction = () => {
    models.Category.create(categorySeedData)
    .then( () => {
        console.log('Database seeded!');
        mongoose.connection.close();
    })
    .catch( err => console.error(err));
}

const seedDescFunction = () => {
    models.Description.create(descriptionSeedData)
    .then( () => {
        console.log('Database seeded!');
        mongoose.connection.close();
    })
    .catch( err => console.error(err));
}

const seedSearchObjFunction = () => {
    models.SearchObj.create(searchObjects)
    .then( () => {
        console.log('Database seeded!');
        mongoose.connection.close();
    })
    .catch( err => console.error(err));
}



seedCategoryFunction();
seedDescFunction();
seedSearchObjFunction()