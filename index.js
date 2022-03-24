// const { response } = require('express');
// const express = require('express')
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

console.log(process.env.MONGO_URL);

const app = express();

app.use(cors());

app.use(express.json());

const animals =[
  {
    name : "GIRAFFE",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Hrr2YCUOCUujMsegv8SvhWlnkHzWp170Dw&usqp=CAU",
  },
  {
    name : "TIGER",
    img : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/frida-bredesen-315405-unsplash.jpeg?mtTpFMbHj52LLZ1fGqPJ_HNq4KsZmiae&size=770:433 ",
  },
  {
    name : "LION",
    img : "https://animalrescueprofessionals.org/wp-content/uploads/2019/11/lion-africa-feature.jpg",
  },
  {
    name : "CHIMPANZEE",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHgvreaaKBk18CM63igAjAsiCqOEqqYlTEQ&usqp=CAU",
  },
  {

    name : "CAMEL",
    img : "https://qph.fs.quoracdn.net/main-qimg-5d9e623b167c6401fc6cecefb57f23c4-c",
  },
  {
    name : "ELEPHANT",
    img : "https://www.treehugger.com/thmb/AO24YzFwfYmwXW8wzS2MkE_nY4M=/1732x1299/smart/filters:no_upscale()/GettyImages-1128748845-1fbe765d21f54eafb0deae5aed9447bb.jpg",
  },
  {
    name : "BEAR",
    img : "https://image.shutterstock.com/image-photo/protective-female-brown-bear-ursus-260nw-1725069664.jpg",
  },
  {
    name : "HIPPO",
    img : "https://cincinnatizoo.org/system/assets/uploads/2020/11/50230281791_e4faa5288a_b.jpg",
  },
  {
    name : "RHINO",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmZWmitSw-uCDDeGRoGYtjFoqB8gLBOKShw&usqp=CAU",
  },
  {
    name : "KANGAROO",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20o1kXdzySA5dUkSVNA1Y2sElAGF86A3U-jU5WOq2kIhplFQvTv8eBGdT3IRBBSdWum4&usqp=CAU",
  },
];



app.get("/animals", async function (request, response) {
   const animals = await client
     .db("b30wd")
     .collection("animals")
     .find({})
    .toArray();
  
  response.send(animals);
});

app.post("/animals", async function (request, response) {
  //    db.movies.insertMany(data)
  const data = request.body;
  console.log(data);
  const result = await client.db("b30wd").collection("animals").insertMany(data);
  response.send(result);
});


// const PORT = 4000;

// const mobiles = [
//   {
//     model: "OnePlus 9 5G",
//     img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
//     company: "Oneplus",
//   },
//   {
//     model: "Iphone 13 mini",
//     img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
//     company: "Apple",
//   },
//   {
//     model: "Samsung s21 ultra",
//     img: "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
//     company: "Samsung",
//   },
//   {
//     model: "xiomi mi 11",
//     img: "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
//     company: "xiomi",
//   },
// ];

app.get("/mobiles", async function (request, response) {
  // db.movies.find({})
  // const movies = await getAllMovies();
  const mobiles = await client
    .db("b30wd")
    .collection("mobiles")
    .find({})
    .toArray();
  
  response.send(mobiles);
});

app.post("/mobiles", async function (request, response) {
  //    db.movies.insertMany(data)
  const data = request.body;
  console.log(data);
  const result = await client.db("b30wd").collection("mobiles").insertMany(data);
  response.send(result);
});
const PORT = process.env.PORT;

const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connected ✌️😊");
  return client;
}
const client = await createConnection();



app.get("/", function (request, response) {
  response.send("Hello World");
});

app.get("/movies", async function (request, response) {
  const movies = await client
    .db("b30wd")
    .collection("movies")
    .find({})
    .toArray();
  response.send(movies);
});

app.get("/movies/:id", async function (request, response) {
  console.log(request.params);
  // filter | find
  const { id } = request.params;
  const movie = await client
    .db("b30wd")
    .collection("movies")
    .findOne({ id: id });
  // const movie = movies.find((mv) => mv.id === id);
  movie
    ? response.send(movie)
    : response.status(404).send({ message: "No such movie found 😅" });
});

app.post("/movies", async function (request, response) {
  //    db.movies.insertMany(data)
  const data = request.body;
  console.log(data);
  const result = await client.db("b30wd").collection("movies").insertMany(data);
  response.send(result);
});

app.delete("/movies/:id", async function (request, response) {
  console.log(request.params);
  // filter | find
  const { id } = request.params;
  const result = await client
    .db("b30wd")
    .collection("movies")
    .deleteOne({ id: id });
  response.send(result);
});

app.put("/movies/:id", async function (request, response) {
  console.log(request.params);
  // db.movies.updateOne({id: "102"}, {$set: upadateData})
  const { id } = request.params;
  const updateData = request.body;
  const result = await client
    .db("b30wd")
    .collection("movies")
    .updateOne({ id: id }, { $set: updateData });
  response.send(result);
});

app.listen(PORT, () => console.log(`server start in ${PORT}`));
