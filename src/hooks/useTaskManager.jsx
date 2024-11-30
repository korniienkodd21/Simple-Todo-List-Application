import { useEffect, useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

import { saveTasksToLocalStorage, loadTasksFromLocalStorage } from "../storage/taskLocalStorage";

const useTaskManager = (initialTasks = []) => {
   const [taskList, setTaskList] = useState(() => {
      const storedTasks = loadTasksFromLocalStorage();
      return storedTasks.length ? storedTasks : initialTasks;
   });

   const [selectedTask, setSelectedTask] = useState({});
   const [countOfTasks, setCountOfTasks] = useState(0);

   const [buttonsClickStates, setButtonsClickStates] = useState({
      isClickedCreateButton: false,
      isClickedChangeButton: false,
      isClickedDeleteButton: false,
   });

   useEffect(() => {
      saveTasksToLocalStorage(taskList);
   }, [taskList]);

   const handleAddTask = useCallback((taskData) => {
      setTaskList((prevState) => [...prevState, { ...taskData, taskID: uuidv4() }]);
   }, []);

   const handleDeleteTask = useCallback((taskID) => {
      setTaskList((prevState) => prevState.filter((task) => task.taskID !== taskID));
   }, []);

   const handleSaveChangedTask = useCallback((updatedTask) => {
      setButtonsClickStates((prevState) => {
         return { ...prevState, isClickedChangeButton: false };
      });

      setTaskList((prevState) =>
         prevState.map((task) => (task.taskID === updatedTask.taskID ? updatedTask : task))
      );
   });

   const handleToggleFavoriteTask = useCallback((taskID) => {
      setTaskList((prevState) =>
         prevState.map((task) =>
            task.taskID === taskID ? { ...task, taskIsFavorite: !task.taskIsFavorite } : task
         )
      );
   }, []);

   const handleToggleImportantTask = useCallback((taskID) => {
      setTaskList((prevState) =>
         prevState.map((task) =>
            task.taskID === taskID ? { ...task, taskIsImportant: !task.taskIsImportant } : task
         )
      );
   }, []);

   const handleToggleCompletedTask = useCallback((taskID) => {
      setTaskList((prevState) =>
         prevState.map((task) =>
            task.taskID === taskID ? { ...task, taskIsCompleted: !task.taskIsCompleted } : task
         )
      );
   }, []);

   const handleOpenChangeTaskForm = useCallback(
      (taskID) => {
         setButtonsClickStates((prevState) => {
            return { ...prevState, isClickedChangeButton: true };
         });

         const currentTask = taskList.find((task) => task.taskID === taskID);

         if (currentTask !== -1) setSelectedTask(currentTask);
      },
      [taskList]
   );

   const handleOpenDeletingTaskModal = useCallback(
      (taskID) => {
         setButtonsClickStates((prevState) => {
            return { ...prevState, isClickedDeleteButton: true };
         });

         const currentTask = taskList.find((task) => task.taskID === taskID);

         if (currentTask !== -1) {
            setSelectedTask(currentTask);
         }
      },
      [taskList]
   );

   const handleGetCountOfTasks = useCallback((countOfTasks) => setCountOfTasks(countOfTasks), []);

   const handleOpenAddTaskForm = useCallback(
      () =>
         setButtonsClickStates((prevState) => {
            return { ...prevState, isClickedCreateButton: true };
         }),
      []
   );

   const handleCloseAddTaskForm = useCallback(
      () =>
         setButtonsClickStates((prevState) => {
            return { ...prevState, isClickedCreateButton: false };
         }),
      []
   );

   const handleCloseChangeTaskForm = useCallback(
      () =>
         setButtonsClickStates((prevState) => {
            return { ...prevState, isClickedChangeButton: false };
         }),
      []
   );

   const handleCloseDeletingTaskModal = useCallback(
      () =>
         setButtonsClickStates((prevState) => {
            return { ...prevState, isClickedDeleteButton: false };
         }),
      []
   );

   return {
      taskList,
      countOfTasks,
      selectedTask,
      buttonsClickStates,
      handleAddTask,
      handleDeleteTask,
      handleSaveChangedTask,
      handleOpenChangeTaskForm,
      handleOpenAddTaskForm,
      handleCloseAddTaskForm,
      handleCloseChangeTaskForm,
      handleToggleFavoriteTask,
      handleToggleImportantTask,
      handleToggleCompletedTask,
      handleOpenDeletingTaskModal,
      handleCloseDeletingTaskModal,
      handleGetCountOfTasks,
   };
};

export default useTaskManager;
