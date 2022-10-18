//importing mongoose
const mongoose = require("mongoose")
// schema represents the structure of a particular document
// Each schema maps to a MongoDB collection
const { Schema } = mongoose;

//Student schema
const studentSchema = new Schema({
  roll: {
    type : Number,
    unique : true
  } ,
  name: String,     
 
  
  score11:Number,
  score12:Number,
  score13:Number,
  score21:Number,
  score22:Number,
  score23:Number
	
});

//exporting the model
// A model defines a programming interface for interacting with the database (read, insert, update, etc).
module.exports = mongoose.model("Student", studentSchema)