var mongoose = require("mongoose")
require("dotenv").config();
require("./db")
mongoose.connect(process.env.url, { useNewUrlParser: true, useUnifiedTopology:  true }) 
 .then(() => console.log('MongoDB connected')) 
 .catch(err => console.log(err)); 
