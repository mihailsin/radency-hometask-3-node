/* eslint-disable @typescript-eslint/no-var-requires */

const express = require("express");
const app = express();
const cors = require("cors");

const notesRouter = require("./src/routes/api/notes");

app.use(cors());
app.use(express.json());
app.use("/api/notes", notesRouter);

app.listen(3000, () => console.log("listening 3000"));
