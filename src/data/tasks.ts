import { ITask } from "../interfaces/interfaces";

const tasks: ITask[] = [
	{
		id: "1",
		name: "Shopping list",
		created: "20.01.2022",
		category: "Task",
		content: "Potatoes,Tomatoes",
		archived: false,
		active: true,
		dates: "",
	},
	{
		id: "2",
		name: "New Feature",
		created: "13.01.2022",
		category: "Idea",
		content: "Implement archiving notes feature",
		archived: true,
		active: false,
		dates: "",
	},
	{
		id: "3",
		name: "Travelling",
		created: "20.01.2022",
		category: "Random Thought",
		content: "Should do something cool during vacation",
		archived: false,
		active: true,
		dates: "",
	},
	{
		id: "4",
		name: "1st Hometask",
		created: "20.01.2022",
		category: "Task",
		content: "Finish all 3 hometasks",
		archived: false,
		active: true,
		dates: "",
	},
];
module.exports = tasks;
