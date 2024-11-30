import taskFavoriteFalseIcon from "./../../assets/icons/favorite-task-false-icon.svg";
import taskImportantFalseIcon from "./../../assets/icons/important-task-false-icon.svg";
import taskCompleteFalseIcon from "./../../assets/icons/complete-task-action-icon.svg";

import taskFavoriteTrueIcon from "./../../assets/icons/favorite-task-true-icon.svg";
import taskCompletedTrueIcon from "./../../assets/icons/completed-task-true-icon.svg";
import taskImportantTrueIcon from "./../../assets/icons/important-task-true-icon.svg";

import taskDeleteIcon from "./../../assets/icons/delete-task-icon.svg";
import taskChangeIcon from "./../../assets/icons/change-task-icon.svg";

export const getTaskActionsListConfig = ({
   isFavorite,
   isImportant,
   isCompleted,
   onToggleFavoriteTask,
   onToggleImportantTask,
   onToggleCompletedTask,
   onOpenDeletingTaskModal,
   onOpenChangeTaskForm,
}) => [
   {
      imgSrc: !isFavorite ? taskFavoriteFalseIcon : taskFavoriteTrueIcon,
      onClick: onToggleFavoriteTask,
   },
   {
      imgSrc: !isCompleted ? taskCompleteFalseIcon : taskCompletedTrueIcon,
      onClick: onToggleCompletedTask,
   },
   {
      imgSrc: !isImportant ? taskImportantFalseIcon : taskImportantTrueIcon,
      onClick: onToggleImportantTask,
   },
   { imgSrc: taskDeleteIcon, onClick: onOpenDeletingTaskModal },
   { imgSrc: taskChangeIcon, onClick: onOpenChangeTaskForm },
];
