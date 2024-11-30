import favoriteTasksTrueIcon from "./../../assets/icons/favorite-task-true-icon.svg";
import importantTasksTrueIcon from "./../../assets/icons/important-task-true-icon.svg";

export const sortCriterionsListConfig = [
   {
      criterionID: 1,
      criterionClasses: "w-full text-center gap-x-3 h-[50px] px-5 hover:bg-light-gray",
      criterionText: "None",
   },
   {
      criterionID: 2,
      criterionImgSrc: favoriteTasksTrueIcon,
      criterionClasses:
         "w-full flex items-center gap-x-3 h-[50px] px-5 border-gray hover:bg-light-gray",
      criterionText: "Favorite",
   },
   {
      criterionID: 3,
      criterionImgSrc: importantTasksTrueIcon,
      criterionClasses:
         "w-full flex items-center gap-x-3 h-[50px] px-5 border-gray hover:bg-light-gray",
      criterionText: "Important",
   },
];
