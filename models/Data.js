const mongoose = require("mongoose");

//GST model

const dataSchema = mongoose.Schema({
     id:String,
     title:String,
     danceability:Number,
     energy:Number,
     mode:Number,
     loudness:String,

     acousticness:Number,
     instrumentalness:Number,
     liveness:Number,
     time_signature:String,
     tempo:Number,
     duration_ms:Number,
     num_bars:String,
     nums_section:Number,
     num_segments:Number,
     class:String,
     star_rating:[]
    



});

module.exports = new mongoose.model("Data", dataSchema);