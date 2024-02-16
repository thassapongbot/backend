const express = require("express");
let app = express();
let allroutes = require('./routes/allroutes')
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

let corspolicy = {
    "origin": process.env.FrontendURI
}
app.use(cors(corspolicy));
app.use(express.json());
app.use((req,res,next) => {
    console.log('req received at '+ (new Date()));
    //res.send("Welcome to backend");
    next();
});

let db = async () => {
    try{
        console.log(process.env.DBURI);
        await mongoose.connect(process.env.DBURI);
        console.log('Connected to DB');
    }
    catch(err) {
        console.log(' error connecting');
        //res.status(500).send(err);
    }
}
db();
app.use('/', allroutes);
// app.get('/', (req,res) => {
//     res.send("Welcome to backend");
// })
app.listen(4000, ()=>{ console.log('Server listening at port 4000');})