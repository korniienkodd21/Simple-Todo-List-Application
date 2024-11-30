import { memo } from "react";
import Heading from "../../ui/Heading";

const TaskHeader = memo(({ title }) => {
   return <Heading className="font-bold text-medium-24 mb-2 break-words" level={3} text={title} />;
});

export default TaskHeader;
