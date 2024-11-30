import { motion } from "framer-motion";

import Button from "../../../ui/Button";
import Box from "../../../ui/Box";

import { motionFormActions } from "../../../config/animations/motionFormActions";

const AddTaskActions = ({ formIsValid, onClearAllFields }) => {
   const isFormValid = formIsValid ? "bg-golden" : "border border-gray";

   return (
      <Box className="flex justify-around phone-small:flex-col phone-small:gap-y-3 sm:flex-row">
         <motion.div {...motionFormActions}>
            <Button
               className="font-medium text-medium-18 rounded-[10px] text-center border border-gray phone-small:h-[50px] phone-small:w-full sm:h-[60px] sm:w-[210px]"
               text="Clear all fields"
               onClick={onClearAllFields}
            />
         </motion.div>
         <motion.div {...motionFormActions}>
            <Button
               className={`font-medium text-medium-18 rounded-[10px] text-center ${isFormValid} phone-small:h-[50px] phone-small:w-full sm:h-[60px] sm:w-[210px]`}
               type="submit"
               text="Add a new task"
               disabled={!formIsValid}
            />
         </motion.div>
      </Box>
   );
};

export default AddTaskActions;
