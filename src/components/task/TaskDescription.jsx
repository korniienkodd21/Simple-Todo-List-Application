import { memo } from "react";
import Text from "../../ui/Text";

const TaskDescription = memo(({ description }) => {
   return <Text className="inline-block pb-5 break-words" text={description} />;
});

export default TaskDescription;
