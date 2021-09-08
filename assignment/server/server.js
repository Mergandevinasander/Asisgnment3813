var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const PORT = 3000;

require('./routes/api.js') (app);
app.use(express.static(path.join(__dirname, '../dist/assignment')));

app.listen(PORT, () =>{
    console.log('Server started on port: '+ PORT);
});