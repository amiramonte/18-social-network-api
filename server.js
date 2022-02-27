const express = require('express');
const db = require('./config/connection');
const controllers = require('./controllers');

const PORT = 3001;
const app = express();

app.use(controllers);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for running on port ${PORT}!`);
  });
});
