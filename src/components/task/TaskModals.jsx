import { motion, AnimatePresence } from "framer-motion";

import Backdrop from "../../ui/Backdrop";
import Box from "../../ui/Box";

import DeletingTaskModal from "../modal/DeletingTaskModal";

import { motionDeletingTaskModal } from "../../config/animations/motionDeletingTaskModal";

const TaskModals = ({ isClickedDeleteButton, onDeleteTask, onCloseDeletingTaskModal }) => {
   return (
      <>
         <AnimatePresence initial={false}>
            {isClickedDeleteButton && (
               <>
                  <Backdrop />
                  <Box className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-[60]">
                     <motion.div {...motionDeletingTaskModal}>
                        <DeletingTaskModal
                           onDeleteTask={onDeleteTask}
                           onCloseDeletingTaskModal={onCloseDeletingTaskModal}
                        />
                     </motion.div>
                  </Box>
               </>
            )}
         </AnimatePresence>
      </>
   );
};

export default TaskModals;
