import { motion } from "framer-motion";

import Box from "../../ui/Box";
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";
import Button from "../../ui/Button";
import Image from "../../ui/Image";

import deletingTaskIcon from "./../../assets/icons/delete-task-icon.svg";

import { motionDeletingTaskModalActions } from "../../config/animations/motionDeletingTaskModalActions";

const DeletingTaskModal = ({ onDeleteTask, onCloseDeletingTaskModal }) => {
   const handleCloseDeletingTaskModalAfterDeletedTask = () => {
      onDeleteTask();
      onCloseDeletingTaskModal(false);
   };

   return (
      <Box className="rounded-[5px] bg-white px-4 py-5 text-center shadow-main phone-small:w-[90vw] phone-medium:w-[380px]">
         <Box className="w-[60px] h-[60px] bg-red-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Image className="w-[30px] h-[30px]" src={deletingTaskIcon} alt="Deleting Task Icon" />
         </Box>
         <Heading className="text-medium-24 font-medium pb-3" level={2} text="Delete Task" />
         <Text
            className="text-medium-18 inline-block px-10"
            text="You are going to delete this task. Are you sure?"
         />
         <Box className="flex gap-x-3 items-center justify-around pt-6 font-medium phone-small:flex-col phone-small:gap-y-3 phone-medium:flex-row">
            <motion.div {...motionDeletingTaskModalActions}>
               <Button
                  className="w-[140px] h-[50px] bg-[#eeeeee] rounded-[5px]"
                  text="No, Keep It"
                  onClick={onCloseDeletingTaskModal}
               />
            </motion.div>
            <motion.div {...motionDeletingTaskModalActions}>
               <Button
                  className="w-[140px] h-[50px] rounded-[5px] bg-red-600 text-white"
                  text="Yes, Delete"
                  onClick={handleCloseDeletingTaskModalAfterDeletedTask}
               />
            </motion.div>
         </Box>
      </Box>
   );
};

export default DeletingTaskModal;
