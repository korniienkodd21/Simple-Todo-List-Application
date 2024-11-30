import Box from "../../ui/Box";
import Textarea from "../../ui/Textarea";
import Text from "../../ui/Text";
import Input from "../../ui/Input";

import InputErrorMessage from "./InputErrorMessage";

const FormInputField = ({
   labelText = "",
   type,
   inputClassName,
   wrapperClasses,
   register,
   validation,
   placeholder,
   id,
   inputErrorMessage,
}) => {
   return (
      <Box className={type === "date" || type === "color" ? wrapperClasses : ""}>
         {labelText ? <Text text={labelText} /> : true}
         {type === "textarea" ? (
            <Textarea
               register={register}
               registerName={id}
               validation={validation}
               placeholder={placeholder}
            />
         ) : (
            <Input
               type={type}
               className={inputClassName}
               register={register}
               registerName={id}
               placeholder={placeholder}
               validation={validation}
            />
         )}
         <InputErrorMessage message={inputErrorMessage} />
      </Box>
   );
};

export default FormInputField;
