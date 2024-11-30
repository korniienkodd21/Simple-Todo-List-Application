export const saveTasksToLocalStorage = (tasks) => {
   localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const loadTasksFromLocalStorage = () => {
   const storedTasks = localStorage.getItem("tasks");
   return storedTasks ? JSON.parse(storedTasks) : [];
};
