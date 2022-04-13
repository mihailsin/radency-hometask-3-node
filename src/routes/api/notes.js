const express = require("express");
const router = express.Router();
const tasks = require("../../data/tasks");
const { nanoid } = require("nanoid");

router.get("/", (req, res) => {
  res.json({
    status: "success",
    code: 200,
    data: {
      result: tasks,
    },
  });
});

router.get("/:id", (req, res) => {
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
});

router.post("/", (req, res) => {
  const newTask = { id: nanoid(10), ...req.body };
  tasks.push(newTask);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result: newTask,
    },
  });
});

module.exports = router;
