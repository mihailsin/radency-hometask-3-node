const updateProducts = require("../helpers/updateTasks");
const getAllTasks = require("./getAllTasks");

const removeTask = async (id) => {
  const tasks = await getAllTasks();
  const idx = tasks.findIndex((task) => task.id === id);
  if (idx === -1) return null;
  const updatedTasks = tasks.filter((_, i) => i !== idx);
  await updateProducts(updatedTasks);
  return tasks[idx];
};

module.exports = removeTask;
