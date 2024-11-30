import { memo } from "react";
import Box from "./../../ui/Box";

import { taskStatesConfig } from "../../config/lists/taskStatesConfig";

const TaskStates = memo(({ taskStatesList = [], taskBackground }) => {
   const visibleStates = taskStatesConfig.filter(({ id }) => taskStatesList[id]);

   if (visibleStates.length === 0) return;

   return (
      <>
         <ul
            className="absolute right-0 top-[-24px] rounded-[10px] flex items-center gap-x-2 px-5 py-[6px]"
            style={{ backgroundColor: taskBackground }}
         >
            {visibleStates.map((state, index) => {
               return (
                  <li key={index}>
                     <Box className="rounded-full bg-black flex justify-center items-center w-[32px] h-[32px]">
                        <img className="w-full" src={state.imgSrc} alt={state.alt} />
                     </Box>
                  </li>
               );
            })}
         </ul>
      </>
   );
});

export default TaskStates;
