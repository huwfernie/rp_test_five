//Requires
const express = require('express');
const app = express();
const path = require('path');

//Static Routes
app.use('/', express.static(path.join(__dirname, '/public')));

//Main App Route
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  }
);

//Run Server
const port = 4000;
app.listen(port, () => {
  console.log(`Listening intently on port ${port}`);
  console.log('Try :: open http://192.168.1.169:4000/');
});
