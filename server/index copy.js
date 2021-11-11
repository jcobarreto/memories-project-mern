import express from "express";
//import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

//app.use(bodyParser.json({ limit: "30mb", extend: true }));
//app.use(bodyParser.urlencoded({ limit: "30mb", extend: true }));
app.use(express.json({ limit: "30mb", extend: true }));
app.use(express.urlencoded({ limit: "30mb", extend: true }));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://julio:Teste123@cluster0.nzojq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

//mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//  .catch((error) => console.log(`${error} did not connect`));

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

//mongoose.set("useFindAndModify", false);