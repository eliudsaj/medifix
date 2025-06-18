const Sequelize = require('sequelize');

const DB_NAME = process.env.DB_NAME || 'sql12785519';
const DB_USER = process.env.DB_USER || 'sql12785519';
const DB_PASSWORD = process.env.DB_PASSWORD || 'LXuJND7J3t';
const DB_HOST = process.env.DB_HOST || 'sql12.freesqldatabase.com';

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
