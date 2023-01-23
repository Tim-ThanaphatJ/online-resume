const getMongoURI = (dbConfig) => {
  const url = `mongodb+srv://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}/?retryWrites=true&w=majority`;

  return url;
};

module.exports = { getMongoURI };
