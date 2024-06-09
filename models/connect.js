const mongoose =require("mongoose");
mongoose
.connect(process.env.mongoURl)
.then(()=>{
    console.log("data connected");
})
.catch((err)=>{
    console.log(err.message);
});