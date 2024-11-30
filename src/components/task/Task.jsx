import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Box from "../../ui/Box";

import TasksActions from "./TasksActions";
import TaskDate from "./TaskDate";
import TaskHeader from "./TaskHeader";
import TaskDescription from "./TaskDescription";
import TaskStates from "./TaskStates";
import TaskActionButton from "./TaskActionButton";

import { motionTaskActionsMenuButtonConfig } from "../../config/animations/motionTaskActionsMenuButtonConfig";
import { motionTasksActionsConfig } from "../../config/animations/motionTasksActionsConfig";

import taskMenuActionsButtonIcon from "./../../assets/icons/task-menu-actions-button-icon.svg";

const Task = ({
   id,
   title,
   description,
   date,
   background,
   isFavorite,
   isImportant,
   isCompleted,
   onOpenChangeTaskForm,
   onToggleFavoriteTask,
   onToggleImportantTask,
   onToggleCompletedTask,
   onOpenDeletingTaskModal,
}) => {
   const [isHovered, setIsHovered] = useState(false);
   const [isVisibleTasksActions, setIsVisibleTasksActions] = useState(false);

   const taskStatesList = useMemo(
      () => [isFavorite, isImportant, isCompleted],
      [isFavorite, isImportant, isCompleted]
   );

   const handleOnMouseEnter = useCallback(() => setIsHovered(true), []);

   const handleOnMouseLeave = useCallback(() => {
      setIsHovered(false);
      setIsVisibleTasksActions(false);
   }, []);

   const handleToggleVisibilityTasksActions = useCallback(
      () => setIsVisibleTasksActions((prevState) => !prevState),
      []
   );

   return (
      <Box
         className="group rounded-[10px] px-5 py-6 min-h-[330px] duration-[250ms] flex flex-col relative hover:translate-y-[-10px] hover:duration-[250ms] phone-small:w-[280px] phone-small:min-h-[300px] md:w-[310px] md:min-h-[330px]"
         onMouseEnter={handleOnMouseEnter}
         onMouseLeave={handleOnMouseLeave}
         style={{ backgroundColor: background ? background : "#FFC973" }}
      >
         <TaskStates
            taskStatesList={taskStatesList}
            taskBackground={background ? background : "#FFC973"}
         />
         <TaskHeader title={title} />
         <TaskDescription description={description} />
         <TaskDate date={date} />
         <AnimatePresence initial={false}>
            {isHovered && (
               <motion.div
                  {...motionTaskActionsMenuButtonConfig}
                  className="absolute bottom-5 right-5"
               >
                  <TaskActionButton
                     btnClasses="w-[60px] h-[60px] bg-white flex items-center justify-center rounded-full shadow-main"
                     onClick={handleToggleVisibilityTasksActions}
                     imgSrc={taskMenuActionsButtonIcon}
                  />
               </motion.div>
            )}
         </AnimatePresence>
         <AnimatePresence initial={false}>
            {isVisibleTasksActions && (
               <motion.div
                  {...motionTasksActionsConfig}
                  className="absolute right-[20px] bottom-[88px]"
               >
                  <TasksActions
                     isFavorite={isFavorite}
                     isImportant={isImportant}
                     isCompleted={isCompleted}
                     onOpenDeletingTaskModal={onOpenDeletingTaskModal}
                     onOpenChangeTaskForm={() => onOpenChangeTaskForm(id)}
                     onToggleFavoriteTask={() => onToggleFavoriteTask(id)}
                     onToggleImportantTask={() => onToggleImportantTask(id)}
                     onToggleCompletedTask={() => onToggleCompletedTask(id)}
                  />
               </motion.div>
            )}
         </AnimatePresence>
      </Box>
   );
};

export default Task;
