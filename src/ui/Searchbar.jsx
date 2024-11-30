import Box from "./Box";

import searchbarIcon from "./../assets/icons/searchbar-icon.svg";

const Searchbar = ({ className, onChange, value }) => {
   return (
      <Box className={className}>
         <img
            className="absolute left-4 top-[50%] transform translate-y-[-50%]"
            src={searchbarIcon}
         />
         <input
            className="h-full phone-small:placeholder:text-small-14 phone-small:text-small-14 phone-medium:text-base phone-medium:placeholder:text-base"
            type="text"
            placeholder="Search by title..."
            onChange={onChange}
            value={value}
         />
      </Box>
   );
};

export default Searchbar;
