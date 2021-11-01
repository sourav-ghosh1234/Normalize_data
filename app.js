const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");






//db connection
mongoose
  .connect("mongodb+srv://sourav:1234@cluster0.47ob7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(data=>{
      console.log("DB Connected")
  })
  .catch((err) => {
    console.log("Error in connecting!", err);
  });

const app = express();
const port =  process.env.PORT || 3000;

//Middlewares
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/data",require("./routes/data"))
//Start Express Server
app.listen(port, () => {
  console.log(`Server running on Port - ${port}`);
  
});
