import { useMemo } from "react";

import TaskAction from "./TaskAction";

import { getTaskActionsListConfig } from "../../config/lists/taskActionsListConfig";

const TasksActions = ({
   isFavorite,
   isImportant,
   isCompleted,
   onOpenDeletingTaskModal,
   onOpenChangeTaskForm,
   onToggleFavoriteTask,
   onToggleImportantTask,
   onToggleCompletedTask,
}) => {
   const taskActions = useMemo(
      () =>
         getTaskActionsListConfig({
            isFavorite,
            isImportant,
            isCompleted,
            onOpenDeletingTaskModal,
            onOpenChangeTaskForm,
            onToggleFavoriteTask,
            onToggleImportantTask,
            onToggleCompletedTask,
         }),
      [
         isFavorite,
         isImportant,
         isCompleted,
         onOpenDeletingTaskModal,
         onOpenChangeTaskForm,
         onToggleFavoriteTask,
         onToggleImportantTask,
         onToggleCompletedTask,
      ]
   );

   return (
      <ul className="bg-white shadow-main rounded-[10px] w-[130px] px-[7px] py-[14px] flex flex-wrap-reverse gap-2 justify-center">
         {taskActions.map((taskAction) => {
            return (
               <li key={taskAction.imgSrc}>
                  <TaskAction
                     className="w-[46px] h-[46px] flex items-center justify-center shadow-main rounded-full"
                     imgSrc={taskAction.imgSrc}
                     onClick={taskAction.onClick}
                  />
               </li>
            );
         })}
      </ul>
   );
};

export default TasksActions;
