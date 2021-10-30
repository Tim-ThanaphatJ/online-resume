// loads environment variables
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

module.exports = {
  port: process.env.PORT,
  atlas_uri: process.env.ATLAS_URI,
};
