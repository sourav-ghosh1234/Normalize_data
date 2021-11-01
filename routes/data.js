const express = require("express");
const router = express.Router();
const Data=require("../models/Data")

//problem 1
router.post('/postdata',async(req,res)=>{
    
    for(var i=0;i<99;i++){
        var data=new Data();
        data.id=req.body.id[i]
        data.title=req.body.title[i]
        data.energy=req.body.energy[i]
        data.key=req.body.key[i]
        data.loudness=req.body.loudness[i]
        data.mode=req.body.mode[i]
        data.acousticness=req.body.acousticness[i]
        data.instrumentalness=req.body.instrumentalness[i]
        data.liveness=req.body.liveness[i]
        data.danceability=req.body.danceability[i]
        data.duration_ms=req.body.duration_ms[i]
        data.time_signature=req.body.time_signature[i]
        data.num_bars=req.body.num_bars[i]
        data.num_segments=req.body.num_segments[i]
        data.num_sections=req.body.num_sections[i]
        data.class=req.body.class[i]
        await data.save()



    }

    var result=await Data.find();
    return res.send(result)

})

//get data with pagination
router.get('/getdata',async(req,res)=>{
    var perPage = 10
  , page = req.query.page?req.query.page:1
    var result=await Data.find().limit(perPage)
    .skip(perPage * page)
    return res.send(result)
})

//problem 2
//api
router.post('/getdatabytitle',async(req,res)=>{
    var result=await Data.find({title:req.body.title})
    return res.send(result)
})

module.exports = router;

//problem 3
router.post('/ratedata',async(req,res)=>{
    if(req.body.rating>5 || req.body.rating<0){
        return res.send({
            status:false,
            message:"Please provide rating between 0-5"
        })
    }
    var result=await Data.findOneAndUpdate({id:req.body.id},{$push:{star_rating:req.body.rating}},{new:true})
    return res.send(result)
})
