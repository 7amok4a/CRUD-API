const express = require('express') ; 
const mongoose = require('mongoose') ;
const Product = require('./models/product.model.js') ; 
const productRoute = require("./routes/product.route.js");
const app = express() ; 


//midleware 
app.use(express.json()) ; 
app.use(express.urlencoded({extended : false})) ; 

//routes 
app.use("/api/products" , productRoute) ; 


app.get('/' , (req , res) => {
    res.send("Hello for our API") ; 
}) ; 


mongoose.connect("mongodb+srv://30306021700254:kMoEfPv7slcfmhAo@back-end.hgmv3.mongodb.net/crud-api?retryWrites=true&w=majority&appName=Back-End")
.then(() => {
    console.log("Connect to Data Base ?!") ; 
    app.listen(3000 , () => {
        console.log("7amok4a Make Nice Server") ; 
    }); 
})
.catch(()=> {
    console.log("Failed to Connect") 
}
); 