const Textarea = ({ register, registerName, validation, placeholder }) => {
   return (
      <textarea
         {...register(registerName, validation)}
         className="resize-none h-[230px] w-full border border-gray rounded-[10px] py-5 px-6 phone-small:text-small-14 md:text-base"
         placeholder={placeholder}
      />
   );
};

export default Textarea;
