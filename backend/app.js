const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());


const bodyParser = require('body-parser');

app.use(bodyParser.json());



// DB connection
const conn = require("./db/conn");
conn();

// routers
app.use('/uploads', express.static(path.join(__dirname, 'api/services/uploads')));

const routes = require('./routes/router');

app.use('/api', routes)


app.listen(3000, function(){
    console.log("servidor aberto na porta 3000!!");
});
