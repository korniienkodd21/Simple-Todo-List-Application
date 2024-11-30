import { useForm } from "react-hook-form";

import Heading from "../../../ui/Heading";

import ChangeTaskActions from "./ChangeTaskActions";
import FormInputField from "../FormInputField";

import { changeTaskFormInputsConfig } from "../../../config/lists/changeTaskFormInputsConfig";
import CloseFormButton from "../CloseFormButton";

const ChangeTaskForm = ({ selectedTask, onCloseChangeTaskForm, onSaveChangedTask }) => {
   const {
      register,
      handleSubmit,
      formState: { errors, isValid },
   } = useForm({
      mode: "onBlur",
      defaultValues: {
         taskID: selectedTask.taskID,
         taskTitle: selectedTask.taskTitle,
         taskDescription: selectedTask.taskDescription,
         taskDate: selectedTask.taskDate,
         taskBackground: selectedTask.taskBackground,
         taskIsFavorite: selectedTask.taskIsFavorite,
         taskIsImportant: selectedTask.taskIsImportant,
         taskIsCompleted: selectedTask.taskIsCompleted,
      },
   });

   const handleFormSubmit = (data) => {
      onSaveChangedTask(data);
   };

   return (
      <form
         className="rounded-[10px] bg-almost-white border border-gray p-6 relative phone-small:w-full"
         onSubmit={handleSubmit(handleFormSubmit)}
         autoComplete="off"
      >
         <Heading
            className="font-medium text-large-28 mb-4 phone-small:text-medium-24"
            level={2}
            text="Change a task:"
         />
         <CloseFormButton onClick={onCloseChangeTaskForm} />
         <ul className="flex flex-col gap-y-4 mb-6 phone-small:text-small-14 phone-small:gap-y-3">
            {changeTaskFormInputsConfig.map((item) => {
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
         <ChangeTaskActions formIsValid={isValid} />
      </form>
   );
};

export default ChangeTaskForm;
