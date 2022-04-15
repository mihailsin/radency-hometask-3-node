interface ITask {
  id: string;
  name: string;
  created?: string;
  category: string;
  content: string;
  archived: boolean;
  active: boolean;
  dates: string;
}

export { ITask };
