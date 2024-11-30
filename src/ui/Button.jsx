const Button = ({
   type = "button",
   className,
   text = "",
   onClick = null,
   disabled = false,
   children,
}) => {
   return (
      <button type={type} className={className} onClick={onClick} disabled={disabled}>
         {text ? text : children}
      </button>
   );
};

export default Button;
