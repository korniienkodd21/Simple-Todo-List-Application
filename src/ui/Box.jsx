const Box = ({ className, style = {}, onMouseEnter = null, onMouseLeave = null, children }) => {
   return (
      <div
         className={className}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
         style={style}
      >
         {children}
      </div>
   );
};

export default Box;
