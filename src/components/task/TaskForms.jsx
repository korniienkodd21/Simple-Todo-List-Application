import { motion, AnimatePresence } from "framer-motion";

import Box from "../../ui/Box";
import Backdrop from "../../ui/Backdrop";

import AddTaskForm from "../forms/add-task-form/AddTaskForm";
import ChangeTaskForm from "../forms/change-task-form/ChangeTaskForm";

import { motionAddTaskForm } from "../../config/animations/motionAddTaskForm";
import { motionChangeTaskForm } from "../../config/animations/motionChangeTaskForm";

const TaskForms = ({
   selectedTask,
   isClickedCreateButton,
   isClickedChangeButton,
   onCloseAddTaskForm,
   onAddTask,
   onCloseChangeTaskForm,
   onSaveChangedTask,
}) => {
   return (
      <>
         <AnimatePresence initial={false}>
            {isClickedCreateButton && (
               <>
                  <Backdrop />
                  <motion.div
                     {...motionAddTaskForm}
                     className="absolute top-5 right-[50px] z-[60] phone-small:right-[20px] phone-small:w-[90vw] sm:w-[550px]"
                  >
                     <AddTaskForm onCloseAddTaskForm={onCloseAddTaskForm} onAddTask={onAddTask} />
                  </motion.div>
               </>
            )}
         </AnimatePresence>
         <AnimatePresence initial={false}>
            {isClickedChangeButton && (
               <>
                  <Backdrop />
                  <motion.div
                     {...motionChangeTaskForm}
                     className="absolute top-5 right-[50px] z-[60] phone-small:right-[20px] phone-small:w-[90vw] sm:w-[550px]"
                  >
                     <ChangeTaskForm
                        selectedTask={selectedTask}
                        onCloseChangeTaskForm={onCloseChangeTaskForm}
                        onSaveChangedTask={onSaveChangedTask}
                     />
                  </motion.div>
               </>
            )}
         </AnimatePresence>
      </>
   );
};
export default TaskForms;
