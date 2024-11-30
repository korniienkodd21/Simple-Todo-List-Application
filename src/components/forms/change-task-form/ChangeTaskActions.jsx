import { motion } from "framer-motion";

import Button from "../../../ui/Button";

import { motionFormActions } from "../../../config/animations/motionFormActions";

const ChangeTaskActions = ({ formIsValid }) => {
   const isFormValid = formIsValid ? "bg-golden" : "border border-gray";

   return (
      <motion.div {...motionFormActions}>
         <Button
            className={`font-medium w-full text-medium-18 rounded-[10px] text-center ${isFormValid} phone-small:h-[50px] sm:h-[60px]`}
            type="submit"
            text="Save changes"
            disabled={!formIsValid}
         />
      </motion.div>
   );
};

export default ChangeTaskActions;
