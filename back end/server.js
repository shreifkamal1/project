const express = require('express');
const mongoose = require('mongoose');
const asyncHandler =require("express-async-handler");
const bodypraser =require('body-parser');
let app = express();

// Connect server to the local MongoDB server
mongoose.connect("mongodb://0.0.0.0:27017/MoviUP", (err) => {
    if (!err) console.log('DB now is connected');
    else console.log('you have error');
});

// Schema
// Create schema_1 ==> Home schema
const homeSchema = new mongoose.Schema({
    categories: String,
    sign_in: String,
    sign_up: String,
});

// Convert schema_1 to model(class) <> collection
let homeModle = new mongoose.model('Home', homeSchema);

// Create schema_2 ==> categories schema
const categoriesSchema = new mongoose.Schema({
    section_name: String,
});

// Convert schema_2 to model(class) <> collection
let categoriesModle = new mongoose.model('categories', categoriesSchema);

// Create schema_3 ==> sign_in schema
const sign_inSchema = new mongoose.Schema({
    email_address: String,
    password: String,
});

// Convert schema_3 to model(class) <> collection
let sign_inModle = new mongoose.model('sign_in', sign_inSchema);

// Create schema_4 ==> sign_up schema
const sign_upSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email_address: String,
    password: String,
});

// Convert schema_4 to model(class) <> collection
let sign_upModle = new mongoose.model('sign_up', sign_upSchema);

// Create new documents for the category collection
let actionCategories = new categoriesModle({
    section_name: 'action'
}).save();

let science_fictionCategories = new categoriesModle({
    section_name: 'science_fiction'
}).save();

let animationCategories = new categoriesModle({
    section_name: 'animation'
}).save();

let dramaCategories = new categoriesModle({
    section_name: 'drama'
}).save();

let mysteryCategories = new categoriesModle({
    section_name: 'mystery'
}).save();

let horrorCategories = new categoriesModle({
    section_name: 'horror'
}).save();

// Get all categories
//app.get('/categories', async (req, res) => {
 //   try {
   //     let categories = await categoriesModle.find();
     //   res.status(200).json(categories);
    //} catch (error) {
      //  console.error(error);
        //res.status(500).send('Internal Server Error');
    //}
//});
app.get('/asyncHandler',async (req, res) => {
        let categories = await categoriesModle.find();
        res.status(200).json(categories);
    }
);
app.get('/body parser',async (req, res) => {
    let categories = await categoriesModle.find();
    res.status(200).json(section_name);
}
);


app.get('/', (req, res) => {
    res.send("Welcome");
});

app.listen(8080, function () {
    console.log('Server is now open');
});