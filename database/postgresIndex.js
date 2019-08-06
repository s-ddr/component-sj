const Sequelize = require('sequelize');

const sequelize = new Sequelize('sdc', '', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});


const Category = sequelize.define('category', {
  name: Sequelize.STRING
}, { timestamps: false });

const Description = sequelize.define('description', {
  name: Sequelize.STRING
}, { timestamps: false });
        
const Product = sequelize.define('product', {
  name: Sequelize.STRING,
  category1: Sequelize.INTEGER,
  category2: Sequelize.INTEGER,
  category3: Sequelize.INTEGER,
  description1: Sequelize.INTEGER,
  description2: Sequelize.INTEGER,
  description3: Sequelize.INTEGER,
  description4: Sequelize.INTEGER,
  description5: Sequelize.INTEGER,
}, { timestamps: false });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync().then(() => console.log('database synced!'))

module.exports = {
  Category, 
  Description, 
  Product
};