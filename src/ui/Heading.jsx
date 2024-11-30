const Heading = ({ className, level, text = "", children }) => {
   const HeadingTag = `h${level}`;
   return <HeadingTag className={className}>{text ? text : children}</HeadingTag>;
};

export default Heading;
