const mongoose = require('mongoose');
const dbConfig = require('../config/dbConfig');

const setupDb = async () => {
  try {
    await mongoose.connect(dbConfig.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed', error);
  }
};

module.exports = setupDb;