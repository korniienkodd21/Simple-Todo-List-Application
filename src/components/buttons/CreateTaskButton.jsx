import Button from "../../ui/Button";
import Image from "../../ui/Image";

import createTaskIcon from "./../../assets/icons/create-task-icon.svg";

const CreateTaskButton = ({ onOpenAddTaskForm }) => {
   return (
      <Button
         className="flex items-center justify-center bg-light-gray rounded-[10px] duration-[250ms] hover:translate-y-[-10px] hover:duration-[250ms] phone-small:w-[280px] phone-small:h-[300px] md:w-[310px] md:h-[330px]"
         onClick={onOpenAddTaskForm}
      >
         <Image className="w-[90px] h-[90px]" src={createTaskIcon} alt="Create a new task" />
      </Button>
   );
};

export default CreateTaskButton;
