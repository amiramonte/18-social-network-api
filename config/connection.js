const { connect, connection } = require('mongoose');


connect('mongodb://localhost:27017/mysocialDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
