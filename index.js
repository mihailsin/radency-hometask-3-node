const express = require("express");
const app = express();
const cors = require("cors");

const productsRouter = require("./src/routes/api/notes");

app.use(cors());
app.use(express.json());
app.use("/api/notes", productsRouter);

app.listen(3000, () => console.log("listening 3000"));
