const express = require('express');
const ejs = require('ejs');
const index = require('./routes/index');

const app = express();

app.use(express.static(__dirname+'/public'));
app.set('views', __dirname + '/views');
app.set('view engine','ejs');

app.use("/", index);

app.listen(1980, () => {
    console.log("the server is running ...");
})