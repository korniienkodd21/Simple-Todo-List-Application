import { motion } from "framer-motion";

import Button from "../../ui/Button";
import Image from "../../ui/Image";

import { motionFormActions } from "../../config/animations/motionFormActions";

import closeFormIcon from "./../../assets/icons/close-icon.svg";

const CloseFormButton = ({ onClick }) => {
   return (
      <Button
         className="flex items-center justify-center absolute right-4 top-3 h-[32px] phone-small:w-[28px] phone-small:h-[28px] md:w-[32px] md:h-[32px]"
         onClick={onClick}
      >
         <motion.div {...motionFormActions}>
            <Image src={closeFormIcon} alt="Close Form" />
         </motion.div>
      </Button>
   );
};

export default CloseFormButton;
