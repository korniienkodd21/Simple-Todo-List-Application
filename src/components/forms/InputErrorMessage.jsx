import Text from "../../ui/Text";
import Box from "../../ui/Box";

const InputErrorMessage = ({ message }) => {
   if (!message) return;

   return (
      <Box className="flex items-center mt-[2px] gap-2">
         <Box className="bg-invalid bg-no-repeat bg-cover w-[16px] h-[16px]" />
         <Text className="text-red-700 mt-1" text={message} />
      </Box>
   );
};

export default InputErrorMessage;
