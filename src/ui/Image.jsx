const Image = ({ src, className = "", alt = "" }) => {
   return <img className={className} src={src} alt={alt} />;
};

export default Image;
