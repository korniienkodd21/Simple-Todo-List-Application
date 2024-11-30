import { useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Task from "./Task";
import CreateTaskButton from "../buttons/CreateTaskButton";

import { motionTaskConfig } from "../../config/animations/motionTaskConfig";

const filterTasks = (tasks, searchTitle, includeCompleted) => {
   return tasks.filter((task) => {
      const matchesTitle = task.taskTitle.toLowerCase().includes(searchTitle.toLowerCase());
      const matchesComplete = includeCompleted ? task.taskIsCompleted : !task.taskIsCompleted;

      return (!searchTitle || matchesTitle) && matchesComplete;
   });
};

const sortTasks = (tasks, selectedSortCriterion) => {
   switch (selectedSortCriterion.criterionText) {
      case "Favorite":
         return tasks.filter((task) => task.taskIsFavorite);
      case "Important":
         return tasks.filter((task) => task.taskIsImportant);
      default:
         return tasks;
   }
};

const TasksList = ({
   tasks,
   searchTitle,
   selectedSortCriterion,
   showCompletedTasks,
   onOpenAddTaskForm,
   onOpenChangeTaskForm,
   onToggleFavoriteTask,
   onToggleImportantTask,
   onToggleCompletedTask,
   onOpenDeletingTaskModal,
   onGetCountOfTasks,
}) => {
   const filteredTasks = useMemo(
      () => filterTasks(tasks, searchTitle, showCompletedTasks),
      [tasks, searchTitle, showCompletedTasks]
   );

   const sortedTasks = useMemo(
      () => sortTasks(filteredTasks, selectedSortCriterion),
      [filteredTasks, selectedSortCriterion]
   );

   const tasksList = (
      <AnimatePresence initial={false}>
         {sortedTasks.map((task) => (
            <motion.li key={task.taskID} {...motionTaskConfig}>
               <Task
                  id={task.taskID}
                  title={task.taskTitle}
                  description={task.taskDescription}
                  date={task.taskDate}
                  background={task.taskBackground}
                  isFavorite={task.taskIsFavorite}
                  isImportant={task.taskIsImportant}
                  isCompleted={task.taskIsCompleted}
                  onOpenChangeTaskForm={onOpenChangeTaskForm}
                  onToggleFavoriteTask={onToggleFavoriteTask}
                  onToggleImportantTask={onToggleImportantTask}
                  onToggleCompletedTask={onToggleCompletedTask}
                  onOpenDeletingTaskModal={() => onOpenDeletingTaskModal(task.taskID)}
               />
            </motion.li>
         ))}
      </AnimatePresence>
   );

   useEffect(() => {
      onGetCountOfTasks(sortedTasks.length);
   }, [onGetCountOfTasks, sortedTasks]);

   return (
      <ul className="w-full flex gap-y-10 flex-wrap pt-[34px] sm:gap-x-5 phone-small:flex-col phone-small:items-center phone-medium:items-center sm:flex-row lg:justify-normal lg:gap-x-5">
         {tasksList}
         {!showCompletedTasks && (
            <li className="order-1">
               <CreateTaskButton onOpenAddTaskForm={onOpenAddTaskForm} />
            </li>
         )}
      </ul>
   );
};

export default TasksList;
