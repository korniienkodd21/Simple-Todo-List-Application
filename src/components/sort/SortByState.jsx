import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Box from "../../ui/Box";
import Button from "../../ui/Button";
import Text from "../../ui/Text";
import Image from "../../ui/Image";

import sortChevronDown from "./../../assets/icons/chevron-down.svg";
import sortChevronUp from "./../../assets/icons/chevron-up.svg";

import { sortCriterionsListConfig } from "../../config/lists/sortCriterionsListConfig";
import { motionSortCriterionsList } from "../../config/animations/motionSortCriterionsList";

const SortByState = memo(({ onGetSelectedSortCriterion }) => {
   const [isVisibleSelectsList, setIsVisibleSelectsList] = useState(false);
   const [selectedSortCriterion, setSelectedSortCritetion] = useState({});

   const handleGetSelectedSortCriterion = (criterionID) => {
      const foundSelectedCriterion = sortCriterionsListConfig.find(
         (item) => item.criterionID === criterionID
      );

      if (foundSelectedCriterion !== -1) {
         setSelectedSortCritetion(foundSelectedCriterion);
         setIsVisibleSelectsList(false);
         onGetSelectedSortCriterion(foundSelectedCriterion);
      }
   };

   const handleToggleVisibilitySelectsList = () =>
      setIsVisibleSelectsList((prevState) => !prevState);

   return (
      <Box className="relative">
         <Button
            className="min-w-[200px] max-w-max px-5 border border-gray rounded-[10px] flex items-center hover:bg-light-gray phone-small:h-[40px] phone-small:text-small-14 phone-medium:h-[50px] phone-medium:text-base"
            onClick={handleToggleVisibilitySelectsList}
         >
            Sort By State:
            <Text className="pl-3" text={selectedSortCriterion.criterionText || "None"} />
            <Image
               className="ml-3 w-[30px] h-[30px]"
               src={isVisibleSelectsList ? sortChevronDown : sortChevronUp}
               alt="Chevron"
            />
         </Button>
         <AnimatePresence initial={false}>
            {isVisibleSelectsList && (
               <motion.ul
                  {...motionSortCriterionsList}
                  className="absolute z-50 w-full border border-gray rounded-[5px] bg-white mt-3 overflow-hidden min-h-0"
               >
                  {sortCriterionsListConfig.map((criterion) => {
                     return (
                        <li key={criterion.criterionID}>
                           <Button
                              className={criterion.criterionClasses}
                              onClick={() => handleGetSelectedSortCriterion(criterion.criterionID)}
                           >
                              {criterion.criterionImgSrc ? (
                                 <Image src={criterion.criterionImgSrc} alt="Criterion Icon" />
                              ) : (
                                 true
                              )}
                              <Text
                                 text={
                                    criterion.criterionText === "None"
                                       ? "===== None ====="
                                       : criterion.criterionText
                                 }
                              />
                           </Button>
                        </li>
                     );
                  })}
               </motion.ul>
            )}
         </AnimatePresence>
      </Box>
   );
});

export default SortByState;
