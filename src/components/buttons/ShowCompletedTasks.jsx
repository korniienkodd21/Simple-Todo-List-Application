import { memo } from "react";
import Button from "../../ui/Button";

const ShowCompletedTasks = memo(({ btnClasses, onClick, isShowCompletedTasks }) => {
   return (
      <Button
         className={btnClasses}
         text={`
            Show Only Completed Tasks: ${" "}
            ${
               isShowCompletedTasks.toString().charAt(0).toUpperCase() +
               isShowCompletedTasks.toString().slice(1)
            } 
         `}
         onClick={onClick}
      />
   );
});

export default ShowCompletedTasks;
