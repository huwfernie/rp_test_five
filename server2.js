//Requires
const express = require('express');
const app = express();
const path = require('path');

//Static Routes
app.use('/public', express.static(path.join(__dirname, 'public')));

//Main App Route
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

//Run Server
const port = 4000;
app.listen(port, () => console.log(`Listening intently on port ${port}`));