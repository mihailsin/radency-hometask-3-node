const fs = require("fs/promises");
const filePath = require("./filePath");
const getAllTasks = async () => {
  const data = await fs.readFile(filePath);
  const tasks = JSON.parse(data);
  return tasks;
};

module.exports = getAllTasks;
