const Input = ({
   className = "",
   register,
   registerName,
   validation = {},
   type = "text",
   placeholder = "",
   onChange = null,
   value = undefined,
}) => {
   const toggleClassesDependingType =
      type === "text" && !className
         ? "h-[50px] w-full rounded-[10px] px-6 border border-gray"
         : className;

   return (
      <input
         {...register(registerName, validation)}
         className={`${toggleClassesDependingType} phone-small:text-small-14 md:text-base`}
         placeholder={placeholder}
         type={type}
         onChange={onChange}
         value={value}
      />
   );
};

export default Input;
