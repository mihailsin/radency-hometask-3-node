// const {
//   getAllTasks,
//   getTaskById,
//   addTask,
//   updateById,
//   removeTask,
// } = require("./src/repositories");
// const newTask = {
//   name: "find a job in IT",
//   created: new Date().toLocaleDateString(),
//   category: "Idea",
//   content: "get an offer until 01.06.2022",
//   archived: false,
//   active: true,
//   dates: "",
// };
// const invokeAction = async ({ action, id, data }) => {
//   switch (action) {
//     case "getAllTasks":
//       const tasks = await getAllTasks();
//       console.log(tasks);
//       break;

//     case "getTaskById":
//       const task = await getTaskById(id);
//       if (!task) {
//         throw new Error(`task with id=${id} not found`);
//       }
//       console.log(task);
//       break;

//     case "addTask":
//       const newTask = await addTask(data);
//       console.log(newTask);
//       break;

//     case "updateById":
//       const updatedTask = await updateById(id, data);
//       if (!updatedTask) {
//         throw new Error(`task with id=${id} not found`);
//       }
//       console.log(updatedTask);
//       break;

//     case "removeTask":
//       const updatedTasks = await removeTask(id);
//       if (!updatedTasks) {
//         throw new Error(`task with id=${id} not found`);
//       }
//       console.log(updatedTasks);
//       break;

//     default:
//       return;
//   }
// };

// console.log(process.argv);

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
