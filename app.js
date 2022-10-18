const express = require("express");
//express app
const bodyParser  =require("body-parser");

const app = express();

const port = 3000;
const mongoose = require('mongoose'); //to connect to mongodb

//connect to mongodb and listen to requests
mongoose.connect('mongodb://localhost:27017/reportCard', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));
//register view engine
app.set('view engine', 'ejs');
//middleware and static files
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.urlencoded());

//express layouts
var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

//teacher and student routes
const teachRoutes = require("./routes/teacherRoutes")

app.use("/teacher",teachRoutes);

//routes
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, function() { 
  console.log('ReportCard server has started'); 
});