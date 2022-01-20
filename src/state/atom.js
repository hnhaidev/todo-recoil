import { atom } from "recoil";

const todoListAtom = atom({
  key: "todoList",
  default: [
    { todo: "Task 1", isDone: false },
    { todo: "Task 2", isDone: true },
  ],
});

const filterAtom = atom({
  key: "filter",
  default: "all",
});

export { todoListAtom, filterAtom };
