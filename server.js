const express = require("express");
const app = express();
const PORT = 6700;
app.use(express.json());
const data = [];

//basic routing
app.get('/',(req,res)=>{
    res.json('home page');
});
//insert data
app.post('/add',(req,res)=> {
   const newuser = req.body;
   newuser.id = data.length +1;
    data.push(newuser);
    res.json("user added successfully");
});
//view all data
app.get('/users',(req,res)=>{
    res.json(data);
});
//search query string
app.get('/search',(req,res)=>{
    const name = req.query.name;
    const result = data.filter(user=>user.name.toLowerCase().includes(name.toLowerCase()));
    res.json(result);

});
//get single data
app.get('/user/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const user = data.find(x=>x.id=== id);
    user ? res.json(user) :res.status(404).json("user not found");
});

app.listen(PORT, ()=>{
    console.log("server is running port 6700");
});