const express = require("express");
const app = express();
const fs = require("fs/promises");
const moment = require("moment");
const cors = require("cors");
const productsRouter = require("./src/routes/api/notes");

app.use(cors());
app.use(express.json());
app.use("/api/notes", productsRouter);
app.use(async (req, res, next) => {
  const { method, url } = req;
  const date = moment().format("DD-MM-YYYY_hh:mm:ss");
  await fs.appendFile("server.log", `\n${method} ${url} ${date}`);
  next();
});

app.listen(3000, () => console.log("listening 3000"));
