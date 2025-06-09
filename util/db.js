const Sequelize = require('sequelize');

// Get values from environment variables
const DB_NAME = process.env.DB_NAME || 'cmms';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || 'mysql';
const DB_HOST = process.env.DB_HOST || 'localhost';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('✅ Connection has been established successfully.');
  })
  .catch(err => {
    console.error('❌ Unable to connect to the database:', err);
  });

module.exports = sequelize;
 