/* eslint-disable @typescript-eslint/no-var-requires */

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const notesRouter = require("./src/routes/api/notes");

app.use(cors());
app.use(express.json());
app.use("/api/notes", notesRouter);

app.listen(PORT, () => console.log(`listening ${PORT}`));
