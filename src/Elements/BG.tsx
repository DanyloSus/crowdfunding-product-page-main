const BG = () => {
  return (
    <div className="absolute -z-10 h-[400px] md:h-[300px]">
      <img
        src="./image-hero-desktop.jpg"
        alt="image hero desktop"
        className="w-screen h-full object-cover md:hidden"
      />
      <img
        src="./image-hero-mobile.jpg"
        alt="image hero mobile"
        className="w-screen h-full object-cover md:block hidden"
      />
    </div>
  );
};

export default BG;
