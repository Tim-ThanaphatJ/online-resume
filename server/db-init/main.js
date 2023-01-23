require('dotenv').config();
const fs = require('fs');
const path = require('path');
const util = require('util');
const mongoose = require('mongoose');
const askQuestion = require('./utils');
const Skill = require('../src/models/skills.model');

// promise wrapper
const readDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);

const DB_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/?retryWrites=true&w=majority`;

const main = async () => {
  try {
    const files = await readDir(path.join('db-init', 'data'));

    const file = await askQuestion(`${files.join('\n')}\n\nWhich one do you want to upload?  ->  `);

    const response = await readFile(path.join('db-init', 'data', file), 'utf-8');
    const data = JSON.parse(response);

    const isPreview = await askQuestion(`Do you want to preview the ${file} (y/yes)  ->  `);
    if (isPreview === 'y' || isPreview === 'yes') console.log(data);


    // Connect to MongoDB Atlas
    console.log('Connecting to MongoDB Atlas...');
    await mongoose.connect(DB_URI, { dbName: process.env.DB_COLLECTION });

    const collectionName = file.split('.')[0];
    const isDelete = await askQuestion(`Do you want to delete the ${collectionName} on MongoDB Atlas (y/yes)  ->  `);
    const isUpload = await askQuestion(`Do you want to upload the ${collectionName} to MongoDB Atlas (y/yes)  ->  `);

    switch (collectionName) {
      case 'skills':
        // Delete all of the existing items on MongoDB Atlas
        if (isDelete === 'y' || isDelete === 'yes') {
          console.log('\nDeleting all of the existing file...');
          await Skill.deleteMany();
        }

        // Upload data to MongoDB Atlas
        if (isUpload === 'y' || isUpload === 'yes') {
          console.log('Uploading all of the new file...');
          await Skill.create(data);
        }

        break;
      default:
        break;
    }

    console.log('Success uploading!!!');

    process.exit(0);
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

main();
