import { memo } from "react";

import Box from "../../ui/Box";
import Text from "../../ui/Text";
import Image from "./../../ui/Image";

import taskDateIcon from "./../../assets/icons/task-date-icon.svg";

const TaskDate = memo(({ date }) => {
   const formattedDateTaskDate = new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
   });

   return (
      <Box className="flex items-center gap-x-4 mt-auto">
         <Image className="w-[28px] h-[28px]" src={taskDateIcon} />
         <Text className="text-small-15 pt-1" text={formattedDateTaskDate} />
      </Box>
   );
});

export default TaskDate;
