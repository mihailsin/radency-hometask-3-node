let tasks = require("../data/tasks");
const { nanoid } = require("nanoid");

const addNoteController = (req, res) => {
  const newTask = { id: nanoid(10), ...req.body };
  tasks.push(newTask);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result: newTask,
    },
  });
};

const getNoteController = (req, res) => {
  res.json({
    status: "success",
    code: 200,
    data: {
      result: tasks,
    },
  });
};

const getNoteByIdController = (req, res) => {
  const { id } = req.params;
  const task = tasks.find((item) => item.id === id);
  if (!task) {
    res.status(404).json({
      status: "error",
      code: "404",
      message: `note with id = ${id} not found`,
    });
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result: task,
    },
  });
};

const deleteNoteController = (req, res) => {
  const { id } = req.params;
  const removedTask = tasks.find((item) => item.id === id);
  tasks = tasks.filter((item) => item.id !== id);
  if (!removedTask) {
    res.status(404).json({
      status: "error",
      code: "404",
      message: `note with id = ${id} not found`,
    });
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result: removedTask,
    },
  });
};

const patchNoteController = (req, res) => {
  const { id } = req.params;

  const idx = tasks.findIndex((item) => item.id === id);
  tasks[idx] = { ...tasks[idx], ...req.body };
  if (!idx) {
    res.status(404).json({
      status: "error",
      code: "404",
      message: `note with id = ${id} not found`,
    });
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result: tasks[idx],
    },
  });
};

module.exports = {
  addNoteController,
  getNoteController,
  getNoteByIdController,
  deleteNoteController,
  patchNoteController,
};