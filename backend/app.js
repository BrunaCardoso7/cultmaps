const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// DB connection
const conn = require("./db/conn");
conn();

// routers

const routes = require('./routes/router');

app.use('/api', routes)


app.listen(3000, function(){
    console.log("servidor aberto na porta 3000!!");
});
