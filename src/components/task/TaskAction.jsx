import Button from "../../ui/Button";
import Image from "./../../ui/Image";

const TaskAction = ({ className, imgSrc, onClick }) => {
   return (
      <Button className={className} onClick={onClick}>
         <Image className="w-[26px] h-[26px]" src={imgSrc} alt="Task Action" />
      </Button>
   );
};

export default TaskAction;
