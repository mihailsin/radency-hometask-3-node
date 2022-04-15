/* eslint-disable @typescript-eslint/no-var-requires */
let tasks = require("../data/tasks");
const { nanoid } = require("nanoid");
import { Request, Response } from "express";
import { ITask } from "../interfaces/interfaces";

const addNoteController = (req: Request, res: Response) => {
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

const getNoteController = (req: Request, res: Response) => {
	res.json({
		status: "success",
		code: 200,
		data: {
			result: tasks,
		},
	});
};

const getNotesStatsController = (req: Request, res: Response) => {
	const active: ITask[] = tasks.filter((task: ITask) => task.active);
	const archived: ITask[] = tasks.filter((task: ITask) => task.archived);

	res.json({
		status: "success",
		code: 200,
		data: {
			result: {
				tasks: tasks.length,
				active: active.length,
				archived: archived.length,
			},
		},
	});
};

const getNoteByIdController = (req: Request, res: Response) => {
	const { id } = req.params;
	const task = tasks.find((item: ITask) => item.id === id);
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

const deleteNoteController = (req: Request, res: Response) => {
	const { id } = req.params;
	const removedTask = tasks.find((item: ITask) => item.id === id);
	tasks = tasks.filter((item: ITask) => item.id !== id);
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

const patchNoteController = (req: Request, res: Response) => {
	const { id } = req.params;

	const idx = tasks.findIndex((item: ITask) => item.id === id);
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
	getNotesStatsController,
};
export {};
