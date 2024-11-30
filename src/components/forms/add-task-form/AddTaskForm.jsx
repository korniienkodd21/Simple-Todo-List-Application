import { useForm } from "react-hook-form";

import Heading from "../../../ui/Heading";

import AddTaskActions from "./AddTaskActions";
import FormInputField from "../FormInputField";
import CloseFormButton from "../CloseFormButton";

import { addTaskFormInputsConfig } from "../../../config/lists/addTaskFormInputsConfig";

const AddTaskForm = ({ onCloseAddTaskForm, onAddTask }) => {
   const {
      register,
      reset,
      handleSubmit,
      formState: { errors, isValid },
   } = useForm({
      mode: "onBlur",
      defaultValues: {
         taskTitle: "",
         taskDescription: "",
         taskDate: "",
         taskBackground: "",
         taskIsFavorite: false,
         taskIsImportant: false,
         taskIsCompleted: false,
      },
   });

   const handleClearAllFields = () => reset();

   const handleFormSubmit = (data) => {
      onAddTask(data);
      onCloseAddTaskForm(false);
   };

   return (
      <form
         className="rounded-[10px] bg-almost-white border border-gray p-6 relative phone-small:w-full"
         onSubmit={handleSubmit(handleFormSubmit)}
         autoComplete="off"
      >
         <Heading
            className="font-medium mb-4 phone-small:text-medium-24 md:text-large-28"
            level={2}
            text="Create a new task:"
         />
         <CloseFormButton onClick={onCloseAddTaskForm} />
         <ul className="flex flex-col gap-y-4 mb-6 phone-small:text-small-14 phone-small:gap-y-3 md:text-base">
            {addTaskFormInputsConfig.map((item) => {
               return (
                  <li key={item.id}>
                     <FormInputField
                        labelText={item.labelText}
                        id={item.id}
                        inputClassName={item.inputClassName}
                        wrapperClasses={item.wrapperClasses}
                        type={item.type}
                        register={register}
                        validation={item.validation}
                        placeholder={item.placeholder}
                        inputErrorMessage={errors[item.id]?.message}
                     />
                  </li>
               );
            })}
         </ul>
         <AddTaskActions formIsValid={isValid} onClearAllFields={handleClearAllFields} />
      </form>
   );
};

export default AddTaskForm;
