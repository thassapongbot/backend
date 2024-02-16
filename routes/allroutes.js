let express = require('express');
let allRoutes = express.Router();
const {Houses,Users,Enquiries}  = require("../models/allschema");
const multer = require('multer');
let upload = multer();

allRoutes.get('/', (req,res) => {
    console.log('Reaced root');
    res.send("Welcome to backend");
});


allRoutes.get('/houses', async (req,res) => {
    console.log('Reaced house');
    try{
        let houses = await Houses.find({});
        console.log(houses);
        res.send(houses);
    }
    catch(err){
        res.status(500).send(" error while fetching houses");
    }

});

allRoutes.post('/signup',upload.none(), async (req,res) => {
    console.log(req.body);
    try{
        //let users = await Users.insertOne({ name: req.body.name, email: req.body.email, phone: req.body.phone, password: req.body.password});
        let newuser = new Users(req.body);
        let result = await newuser.save();
        console.log(result);
        res.send({success: true});
    }
    catch(err){
        res.status(500).send(" error while adding user");
        console.log(err);
    }

});

allRoutes.post('/login',upload.none(), async (req,res) => {
    console.log(req.body);
    try{
        //let users = await Users.insertOne({ name: req.body.name, email: req.body.email, phone: req.body.phone, password: req.body.password});
        let result = await Users.find({email: req.body.email,password: req.body.password});
        console.log(result);
        res.send(result);
    }
    catch(err){
        res.status(500).send(" error while adding user");
        console.log(err);
    }

});

allRoutes.post('/addenquiry',upload.none(), async (req,res) => {
    console.log(req.body);
    try{
        //let users = await Users.insertOne({ name: req.body.name, email: req.body.email, phone: req.body.phone, password: req.body.password});
        let newEnquiry = new Enquiries(req.body);
        let result = await newEnquiry.save();
        console.log(result);
        res.send(result);
    }
    catch(err){
        res.status(500).send(" error while adding enquiry");
        console.log(err);
    }

});

allRoutes.get('/enquiries', async (req,res) => {
    //console.log(req.body);
    try{
        //let users = await Users.insertOne({ name: req.body.name, email: req.body.email, phone: req.body.phone, password: req.body.password});
        let result = await Enquiries.find({});
        console.log(result);
        res.send(result);
    }
    catch(err){
        res.status(500).send(" error while getting enquiry");
        console.log(err);
    }

});

module.exports = allRoutes;
