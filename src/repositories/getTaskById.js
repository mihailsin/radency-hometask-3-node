const getAllTasks = require("./getAllTasks");
const getTaskById = async (id) => {
  const data = await getAllTasks();
  const task = data.find((task) => task.id === id);
  if (!task) return null;
  return task;
};

module.exports = getTaskById;
