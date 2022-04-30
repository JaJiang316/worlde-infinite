// const { MongoClient, ServerApiVersion } = require('mongodb');
// const mongoose = require("mongoose");
// const MongoStore = require("connect-mongo");
// const express = require("express");
// const app = express();
// const session = require("express-session");
// const MongoStore = require("connect-mongo");
// const cookieParser = require("cookie-parser");
// const dotenv = require("dotenv");
// dotenv.config();

// const PORT = process.env.PORT || 3000;
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.json());

// let db;
// const uri = process.env.URL;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   if(!err){
//     const collection = client.db("wordle");
//   } else{
//     console.log("Error in connection to DB" + err);
//   }
//   // perform actions on the collection object
//   client.close();
// });

// mongoose.connect(
//   uri,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err) => {
//     if (!err) {
//       console.log("MongoDB Connection Succeeded.");
//     } else {
//       console.log("Error in DB connection : " + err);
//     }
//   }
// );

// app.use(
//   session({
//     secret: "totally a secret",
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: oneDay },
//     store: MongoStore.create({ mongoUrl: uri }),
//   })
// );