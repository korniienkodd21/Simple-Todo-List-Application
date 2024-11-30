import { useState, useCallback } from "react";

import TaskForms from "./components/task/TaskForms";
import TaskModals from "./components/task/TaskModals";

import TaskLayout from "./layouts/TaskLayout";

import useTaskManager from "./hooks/useTaskManager";

const App = () => {
   const {
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
   } = useTaskManager();

   const [searchTitle, setSearchTitle] = useState("");
   const handleChangeSearchTitle = useCallback((event) => setSearchTitle(event.target.value), []);

   return (
      <>
         <TaskModals
            isClickedDeleteButton={buttonsClickStates.isClickedDeleteButton}
            onDeleteTask={() => handleDeleteTask(selectedTask.taskID)}
            onCloseDeletingTaskModal={handleCloseDeletingTaskModal}
         />
         <TaskLayout
            tasks={taskList}
            countOfTasks={countOfTasks}
            searchbarValue={searchTitle}
            onSearchbarChange={handleChangeSearchTitle}
            onOpenAddTaskForm={handleOpenAddTaskForm}
            onOpenChangeTaskForm={handleOpenChangeTaskForm}
            onDeleteTask={handleDeleteTask}
            onToggleFavoriteTask={handleToggleFavoriteTask}
            onToggleImportantTask={handleToggleImportantTask}
            onToggleCompletedTask={handleToggleCompletedTask}
            onOpenDeletingTaskModal={handleOpenDeletingTaskModal}
            onGetCountOfTasks={handleGetCountOfTasks}
         />
         <TaskForms
            selectedTask={selectedTask}
            isClickedCreateButton={buttonsClickStates.isClickedCreateButton}
            isClickedChangeButton={buttonsClickStates.isClickedChangeButton}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
            onCloseChangeTaskForm={handleCloseChangeTaskForm}
            onCloseAddTaskForm={handleCloseAddTaskForm}
            onSaveChangedTask={handleSaveChangedTask}
         />
      </>
   );
};

export default App;
