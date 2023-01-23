require('dotenv').config();
require('express-async-errors');

const express = require('express');
const mongoose = require('mongoose');

// Routers
const skillRouter = require('./src/routes/skills.route');

// Middlewares
const notFound = require('./src/middlewares/not-found.middleware');
const errorHandler = require('./src/middlewares/error-handler.middleware');

// Utils
const { getMongoURI } = require('./src/utils/database.utils');

// Config
const { portConfig, databaseConfig } = require('./config/config');

const app = express();

app.use(express.json());

app.use('/api/v1/skills', skillRouter);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
  const dbURI = getMongoURI(databaseConfig);
  await mongoose.connect(dbURI, { dbName: databaseConfig.database })
    .then(() => app.listen(portConfig, console.log(`Server is listening at portConfig ${portConfig}`)))
    .catch((error) => console.log(`unable to connect to MongoDB: ${error}`));
};

start();
