const getAllTasks = require("./getAllTasks");
const { nanoid } = require("nanoid");
const updateProducts = require("../helpers/updateTasks");
const addTask = async (data) => {
  const tasks = await getAllTasks();
  const taskToAdd = { id: nanoid(5), ...data };
  tasks.push(taskToAdd);
  console.log(tasks);
  updateProducts(tasks);
  return taskToAdd;
};

module.exports = addTask;
