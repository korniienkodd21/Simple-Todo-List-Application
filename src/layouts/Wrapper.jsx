import Box from "../ui/Box";

const Wrapper = ({ children }) => {
   return <Box className="container max-w-[1390px] mx-auto">{children}</Box>;
};

export default Wrapper;
