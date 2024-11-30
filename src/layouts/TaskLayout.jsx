import { useCallback, useMemo, useState } from "react";
import SimpleBar from "simplebar-react";

import Searchbar from "../ui/Searchbar";
import Box from "../ui/Box";
import Heading from "../ui/Heading";

import TasksList from "../components/task/TasksList";
import SortByState from "../components/sort/SortByState";
import TasksCount from "../components/task/TasksCount";
import ShowCompletedTasks from "../components/buttons/ShowCompletedTasks";

import "simplebar-react/dist/simplebar.min.css";

const TaskLayout = ({
   tasks,
   countOfTasks,
   searchbarValue,
   onSearchbarChange,
   onOpenAddTaskForm,
   onOpenChangeTaskForm,
   onToggleFavoriteTask,
   onToggleImportantTask,
   onToggleCompletedTask,
   onOpenDeletingTaskModal,
   onGetCountOfTasks,
}) => {
   const [selectedSortCriterion, setSelectedSortCritetion] = useState({});
   const [showCompletedTasks, setShowCompletedTasks] = useState(false);

   const handleGetSelectedSortCriterion = useCallback(
      (selectedSortCriterionData) => setSelectedSortCritetion(selectedSortCriterionData),
      []
   );

   const handleToggleCompletedTasks = useCallback(
      () => setShowCompletedTasks((prevState) => !prevState),
      []
   );

   const taskHeaderTitle = useMemo(() => {
      if (showCompletedTasks) return "Completed Tasks";
      if (selectedSortCriterion.criterionText && selectedSortCriterion.criterionText !== "None")
         return `${selectedSortCriterion.criterionText} Tasks`;

      return "All Tasks";
   }, [showCompletedTasks, selectedSortCriterion]);

   return (
      <Box className="w-full">
         <Box className="flex items-center mb-8">
            <Searchbar
               className="relative px-14 border border-gray rounded-[10px] lg:w-[700px] phone-small:w-full phone-small:h-[40px] phone-medium:h-[50px]"
               onChange={onSearchbarChange}
               value={searchbarValue}
            />
         </Box>
         <Box className="flex items-center mb-2 sm:flex-col sm:gap-y-10 lg:flex-row phone-small:flex-col phone-small:items-start">
            <Box className="flex mr-4 items-center lg:order-none phone-small:order-1 lg:w-[340px]">
               <Heading
                  className="font-medium pr-8 phone-small:text-large-28 phone-medium:text-large-32"
                  level={1}
                  text={taskHeaderTitle}
               />
               <TasksCount countOfTasks={countOfTasks} />
            </Box>
            <Box className="flex ml-[126px] sm:gap-x-6 sm:flex-row md:gap-x-10 phone-small:ml-0 phone-small:flex-col phone-small:gap-y-4 phone-small:mb-6 md:mb-0">
               <SortByState onGetSelectedSortCriterion={handleGetSelectedSortCriterion} />
               <ShowCompletedTasks
                  btnClasses="px-5 border border-gray rounded-[10px] hover:bg-light-gray phone-small:h-[40px] phone-small:text-small-14 phone-medium:h-[50px] phone-medium:text-base"
                  onClick={handleToggleCompletedTasks}
                  isShowCompletedTasks={showCompletedTasks}
               />
            </Box>
         </Box>
         <SimpleBar style={{ maxHeight: 575 }}>
            <TasksList
               tasks={tasks}
               searchTitle={searchbarValue}
               selectedSortCriterion={selectedSortCriterion}
               showCompletedTasks={showCompletedTasks}
               onOpenAddTaskForm={onOpenAddTaskForm}
               onOpenChangeTaskForm={onOpenChangeTaskForm}
               onToggleFavoriteTask={onToggleFavoriteTask}
               onToggleImportantTask={onToggleImportantTask}
               onToggleCompletedTask={onToggleCompletedTask}
               onOpenDeletingTaskModal={onOpenDeletingTaskModal}
               onGetCountOfTasks={onGetCountOfTasks}
            />
         </SimpleBar>
      </Box>
   );
};

export default TaskLayout;
