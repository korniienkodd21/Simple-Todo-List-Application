import Button from "../../ui/Button";
import Image from "../../ui/Image";

const TaskActionButton = ({ btnClasses, onClick, imgSrc }) => {
   return (
      <Button className={btnClasses} onClick={onClick}>
         <Image className="w-[33px] h-[33px]" src={imgSrc} alt="Task Actions Button" />
      </Button>
   );
};

export default TaskActionButton;
