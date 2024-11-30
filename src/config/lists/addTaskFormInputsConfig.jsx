export const addTaskFormInputsConfig = [
   {
      id: "taskTitle",
      labelText: "",
      inputClassName: "",
      type: "text",
      placeholder: "Enter a title for a new task",
      validation: { required: "This field is required" },
   },
   {
      id: "taskDescription",
      labelText: "",
      inputClassName: "",
      type: "textarea",
      placeholder: "Description...",
      validation: { required: "This field is required" },
   },
   {
      id: "taskDate",
      labelText: "Due date",
      inputClassName: "border border-gray px-3 h-9 rounded-[5px] ml-4 mr-2",
      wrapperClasses: "flex items-center",
      type: "date",
      placeholder: "",
      validation: { required: "This field is required" },
   },
   {
      id: "taskBackground",
      labelText: "Background",
      inputClassName: "h-9 bg-transparent ml-4",
      wrapperClasses: "flex items-center",
      type: "color",
      placeholder: "",
   },
];
