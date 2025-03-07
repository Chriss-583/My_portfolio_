import express from "express"
import bodyParser from "body-parser";

const port=3000;
let comments=[];
const app=express();
app.use(express.static("public"));

app.get("/contact", (req,res)=>{
    res.render("contact.ejs");
   });


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res)=>{
    console.log("hello there");
    res.render("index.ejs");
}); 

app.get("/about", (req,res)=>{
    
    res.render("About.ejs");
}); 
app.get("/projects", (req,res)=>{
    
    res.render("projects.ejs");
}); 


app.listen(port,()=>{
    console.log(`server running at ${port}`);

})

