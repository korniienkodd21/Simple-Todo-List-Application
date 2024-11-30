import Box from "./../../ui/Box";

const TasksCount = ({ countOfTasks = 0 }) => {
   return (
      <Box className="w-10 h-10 rounded-full flex items-center justify-center border border-gray phone-small:text-small-14 phone-small:w-9 phone-small:h-9">
         {countOfTasks}
      </Box>
   );
};

export default TasksCount;
