const updateProducts = require("../helpers/updateTasks");
const getAllTasks = require("./getAllTasks");

const updateById = async (id, data) => {
  const tasks = await getAllTasks();
  const idx = tasks.findIndex((task) => task.id === id);
  if (idx === -1) return null;
  tasks[idx] = { id, ...data };
  await updateProducts(tasks);
  return tasks[idx];
};

module.exports = updateById;
