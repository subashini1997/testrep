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

const mobile = [{
  img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ7bPfQoErT2AXLujP-AvnXxJwE7q32Mm_pyTFrW5FhHrcNDD-uPSiI0Kxc33HPUWjhpQ5edANh2M66uW1oJH5dRi0VIohb6Sk9gxaTG8z5kaBkmcIrBBjXrA&usqp=CAE",
  title:"APPLE IPHONE !# PRO MAX GOLD",
  rating:"4.6⭐",
  price:"84,900",
  finalprice:"80,000",
},
{
  img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQQzn_Gn2fikJSOYmVELXCbavbNkqdXwBSnncDOrISmmi7KYZCsEohPA5_wXxn8CVSYe8UPiHVoE3h5Ehw4E51ij72y0mJnCfJWE7JZ0pLvcg6CIrmqKMpzxrrI&usqp=CAE",
  title:"APPLEBIPHONE 13MINI PINK",
  rating:"4.8⭐",
  price:"69,900",
  finalprice:"65,000",
},
{
  img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTjzCWItGiCqTpLTGUhl71bnZ5ZbWfe1WpDUN3Kkcorc7lX6PWhI_oo1q7eQ_l1Wae-QcQtDjcK3ENiO6WWnvBGinwroguOS9nlN5-kKgMX0PTmvYWG9vZmPQ&usqp=CAE",
  title:"APPLE IPHONE SE 2022 RED",
  rating:"5⭐",
  price:"43,900",
  finalprice:"40,900",
},
{
  img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQtbVYVDZpTnzwPYZIPe0d_uLcaMjKSIo9GwQP33qTzcakJf-Q4oztA4F3Kb0VyCaLYT3RkWp3NqoV4TKUtOzDmG4hJ02zgGcwXY0_dG0EtZkGeaJxbUE2fww&usqp=CAE",
  title:"APPLE 11 PRO MAX",
  rating:"4.5⭐",
  price:"13,999",
  finalprice:"10,999",
},
{
  img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRezaVleXeH7UnIjKwQzRh7vqoceNYUDa7t2TnF8K-5cNaQFRCjsKFFdTFDfIGKO1FIhc7SFLXTI69n7wN0XSOXTTfaEDW0DrzMteieGC-Y4-dBSX-5YGT3LSE&usqp=CAE",
  title:"APPLE IPHONE 12 BLACK",
  rating:"4⭐",
  price:"14,999",
  finalprice:"12,999",
},
{
  img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRTJHk2Y6ErAp6aFevVAy68eaBIEDLZ2pMAJnO09UEYrmTkCVq81wWdVIYC6IlzYHQP9QqPczVp9ovI-FOWR0rLLRM7mlZoMOPWnCWJoVe3j7GOcZ9xI1PqMw&usqp=CAE",
  title:"IPHONE 13",
  rating:"4.6⭐",
  price:"74,990",
  finalprice:"70,990",
},
{
  img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTouvL5tVT0VEpEAOEAB15NUgu3_cyVcT2JQ3GcdQFXchbYQxEFzx4PH5N51A1CMnbSdeDfQHMt1hB5Ycx-mHFM47VaOPhfE9IfkkuBb9azxrgqjgF9JGrEgg&usqp=CAE",
  title:"APPLE IPHONE XR BLUE",
  rating:"4.6⭐",
  price:"26,500",
  finalprice:"24,500",
},
{
  img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRjQrBZ0tnCa7WKdeUj-kZ0cqRE7T7tKtMKksNOzJmG-oMC54e0EJMh8YFJkwiMhxwd0ANSTdMKWDMgNsBBPyRfv5Xrqi2OevK_PjxHy73B8HH66hn1tN64&usqp=CAE",
  title:"APPLE IPHONE 13 PRO MAX GREEN",
  rating:"5⭐",
  price:"1,79,900",
  finalprice:"1,70,900",
},
{
  img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRDBPcfssrG2xHHYr_H1MOHxwMXhT661zwqg76daVFahtrrHiVnwwVWOd6_ecG8pr8ejLjmEojDMtWI13n7MPWsWZHufGx7bA&usqp=CAE",
  title:"APPLE IPHONE 7 PLUS BLACK",
  rating:"4.6⭐",
  price:"17,900",
  finalprice:"15,900",
},
{
  img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSJ4tJgcQaHWrm4Ku7cN3ixGe8TeHoc_EWYQdsx3YFyFfg-c5wd2w7iPtRhCnbcZs0nxQIP1RgVa3bSVvb3yG-tl5YJLuwqfQ&usqp=CAE",
  title:"APPLE IPHONE 11PRO SILVER",
  rating:"4.5⭐",
  price:"63,900",
  finalprice:"60,900",
},]
// app.get("/mobiles",  function (request, response) {
//   response.send(mobiles);
// });

app.get("/mobile", async function (request, response) {
  const mobiles = await client
    .db("b30wd")
    .collection("mobile")
    .find({})
   .toArray();
 
 response.send(mobile);
});

app.post("/mobile", async function (request, response) {
  //    db.movies.insertMany(data)
  const data = request.body;
  console.log(data);
  const result = await client.db("b30wd").collection("mobile").insertMany(data);
  response.send(result);
});

const elecs=[
  {
  img:"https://rukminim2.flixcart.com/image/612/612/knunf680/air-cooler/a/f/o/rambo-grey-ac-303-maharaja-whiteline-original-imag2f8ythp9xkkn.jpeg?q=70",
  title:"AIR COOLER",
  rating:"4⭐",
  price:"8,899",
  finalprice:"5,999",
},
{
  img:"https://rukminim2.flixcart.com/image/612/612/ktaeqvk0/water-purifier/q/o/f/advanced-max-pureit-original-imag6z9zzfn2ejms.jpeg?q=70",
  title:"PUREIT BY HUL",
  rating:"4.4⭐",
  price:"9,799",
  finalprice:"6,799",
},
{
  img:"https://rukminim2.flixcart.com/image/612/612/kfbfr0w0/refrigerator-new/v/u/y/563gsmqs-na-marq-by-flipkart-original-imafvtfahqa9hzgg.jpeg?q=70",
  title:"REFRIGERATOR",
  rating:"4.5⭐",
  price:"51,990",
  finalprice:"49,999",
},
{
  img:"https://rukminim2.flixcart.com/image/612/612/k3670cw0/room-heater/h/y/d/sqh800-sansui-original-imafmcxdhsbmr2ga.jpeg?q=70",
  title:"ROOM HEATER",
  rating:"4⭐",
  price:"5,599",
  finalprice:"3,999",
},
{
  img:"https://rukminim2.flixcart.com/image/612/612/kkprmvk0/water-purifier/b/v/2/ro-uv-uf-tds-audi-grand-plus-original-imagyy5c4shfw9nj.jpeg?q=70",
  title:"WATER PURIFIER",
  rating:"3.7⭐",
  price:"4,899",
  finalprice:"3,999",
},
{
  img:"https://rukminim2.flixcart.com/image/612/612/ji20r680/vacuum-cleaner/8/t/f/philips-powerpro-compact-fc9352-01-bagless-original-imaf5xqwak9evffz.jpeg?q=70",
  title:"VACUUM CLEANER",
  rating:"4.4⭐",
  price:"8,399",
  finalprice:"6,999",
},
] 
// app.get("/elecs",  function (request, response) {
//   response.send(elecs);
// });

app.get("/elecs", async function (request, response) {
  const elecs = await client
    .db("b30wd")
    .collection("elecs")
    .find({})
   .toArray();
 
 response.send(elecs);
});
app.post("/elecs", async function (request, response) {
  //    db.movies.insertMany(data)
  const data = request.body;
  console.log(data);
  const result = await client.db("b30wd").collection("elecs").insertMany(data);
  response.send(result);
});

const snaps=[
  {
 img:"https://n4.sdlcdn.com/imgs/j/t/0/large/ANALOGUE-ANLG-428-BLUE-BLU-SDL661108400-1-11d0c.webp",
 title:"ANALOGUE ANLG-428",
 rating:"4⭐",
 price:"349",
 finalprice:"300",
},
{
 img:"https://n4.sdlcdn.com/imgs/j/q/3/230X258_sharpened/David-Miller-DMRCM330-Stainless-Steel-SDL009505930-1-ffa09.webp",
 title:"DAVID MILER",
 rating:"4⭐",
 price:"339",
 finalprice:"299",
},
{
 img:"https://n4.sdlcdn.com/imgs/j/u/i/230X258_sharpened/Redux-RWS0200S-Brown-Dial-Leather-SDL670957005-1-65383.webp",
 title:"REDUX RWS0200S",
 rating:"4.6⭐",
 price:"304",
 finalprice:"280",
},
{
 img:"https://n2.sdlcdn.com/imgs/j/v/m/230X258_sharpened/Redux-MW-404-Golden-Dial-SDL013895527-1-2ed4a.webp",
 title:"REDUX MW-404",
 rating:"3⭐",
 price:"372",
 finalprice:"350",
},
{
 img:"https://n2.sdlcdn.com/imgs/j/n/8/230X258_sharpened/Padmaja-arrow-watch-Silicon-Analog-SDL588874743-1-5fd46.webp",
 title:"PADMAJA ARROW WATCH",
 rating:"4.6⭐",
 price:"249",
 finalprice:"220",
},
{
 img:"https://n1.sdlcdn.com/imgs/j/w/p/large/HMXT-HMXT-1-Stainless-Steel-SDL161039405-1-4984c.jpeg",
 title:"HMXT-1 STAINLESS STEEL",
 rating:"4.8⭐",
 price:"379",
 finalprice:"350",
},
]
// app.get("/snaps",  function (request, response) {
//   response.send(snaps);
// });
app.get("/snaps", async function (request, response) {
  const snaps = await client
    .db("b30wd")
    .collection("snaps")
    .find({}) 
   .toArray();
 
 response.send(snaps);
});
app.post("/snaps", async function (request, response) {
  //    db.movies.insertMany(data)
  const data = request.body;
  console.log(data);
  const result = await client.db("b30wd").collection("snaps").insertMany(data);
  response.send(result);
});

// const animals =[
//   {
//     name : "GIRAFFE",
//     img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Hrr2YCUOCUujMsegv8SvhWlnkHzWp170Dw&usqp=CAU",
//   },
//   {
//     name : "TIGER",
//     img : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/frida-bredesen-315405-unsplash.jpeg?mtTpFMbHj52LLZ1fGqPJ_HNq4KsZmiae&size=770:433 ",
//   },
//   {
//     name : "LION",
//     img : "https://animalrescueprofessionals.org/wp-content/uploads/2019/11/lion-africa-feature.jpg",
//   },
//   {
//     name : "CHIMPANZEE",
//     img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHgvreaaKBk18CM63igAjAsiCqOEqqYlTEQ&usqp=CAU",
//   },
//   {

//     name : "CAMEL",
//     img : "https://qph.fs.quoracdn.net/main-qimg-5d9e623b167c6401fc6cecefb57f23c4-c",
//   },
//   {
//     name : "ELEPHANT",
//     img : "https://www.treehugger.com/thmb/AO24YzFwfYmwXW8wzS2MkE_nY4M=/1732x1299/smart/filters:no_upscale()/GettyImages-1128748845-1fbe765d21f54eafb0deae5aed9447bb.jpg",
//   },
//   {
//     name : "BEAR",
//     img : "https://image.shutterstock.com/image-photo/protective-female-brown-bear-ursus-260nw-1725069664.jpg",
//   },
//   {
//     name : "HIPPO",
//     img : "https://cincinnatizoo.org/system/assets/uploads/2020/11/50230281791_e4faa5288a_b.jpg",
//   },
//   {
//     name : "RHINO",
//     img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmZWmitSw-uCDDeGRoGYtjFoqB8gLBOKShw&usqp=CAU",
//   },
//   {
//     name : "KANGAROO",
//     img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20o1kXdzySA5dUkSVNA1Y2sElAGF86A3U-jU5WOq2kIhplFQvTv8eBGdT3IRBBSdWum4&usqp=CAU",
//   },
// ];

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
