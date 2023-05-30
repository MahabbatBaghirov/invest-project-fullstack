const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());


const CardSchema = new mongoose.Schema({
    name:String,
    about:String,
    price:Number,
    imageURL:String
})

const CardItem = new mongoose.model("Ccaardd",CardSchema);


app.get('/api', (req,res)=>{
    res.send("Welcome API")
})

app.get('/api/cards', async(req,res)=>{
    const {name} = req.query;
    const card = await CardItem.find();
    if(!name) {
        res.status(200).send(card)
    } else {
        let searchedCard = card.filter((x)=>
            x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
        )
        res.status(200).send(searchedCard);
    }
})

app.get('/api/cards/:id', async(req,res)=>{
    const id = req.params.id;
    const card = await CardItem.findById(id);
    res.status(200).send(card)
})

app.delete('/api/cards/:id', async(req,res)=>{
    const id = req.params.id;
    const deletedCard = await CardItem.findByIdAndDelete(id);
    res.status(203).send({
        message: `${deletedCard.name} deleted successfully!`
    })
})

app.post('/api/cards', async(req,res)=>{
    const {name,about,price,imageURL} = req.body;
    const newCard = new CardItem({
        name:name,
        about:about,
        price:price,
        imageURL:imageURL
    })
    await newCard.save();
    res.status(201).send({
        message: `${newCard.name} posted successfully!`,
        payload: newCard
    })
})

app.put('/api/cards/:id', async(req,res)=>{
    const id = req.params.id;
    const {name,about,price,imageURL} = req.body;
    const updatingCard = {name:name,about:about,price:price,imageURL:imageURL};
    await CardItem.findByIdAndUpdate(id,updatingCard)
    res.status(200).send(`${updatingCard.name} updated successfully!`)
})


PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`App running on PORT: ${PORT}`);
})

DB_PASSWORD = process.env.DB_PASSWORD
DB_CONNECTION = process.env.DB_CONNECTION

mongoose.connect(DB_CONNECTION.replace("<password>",DB_PASSWORD)).then(res => {
    console.log("MONGO DB CONNECTED!");
})
