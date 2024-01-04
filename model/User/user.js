import mongoose from "mongoose";
import validator from "validator";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";

// Define user schema
const userSchema = new mongoose.Schema({
  end_year: String,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number,
  swot: String, 
  city: String,
});


// export user model
export default mongoose.model("Data_Summary", userSchema);
