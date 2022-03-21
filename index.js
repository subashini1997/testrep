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

// const PORT = 4000;

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
