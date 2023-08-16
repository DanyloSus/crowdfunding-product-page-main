const MobileMenu = () => {
  const handleClose = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu?.classList.toggle("z-20");
    mobileMenu?.classList.toggle("opacity-0");
    mobileMenu?.classList.toggle("-z-20");
  };

  return (
    <div
      className="absolute px-6 h-screen bg-gradient-to-b from-[hsla(0,0%,0%,0.3)] to-transparent right-0 w-screen pt-[88px] opacity-0 -z-20 transition-all"
      id="mobileMenu"
    >
      <section onClick={handleClose}>
        <div className="">About</div>
        <div>Discover</div>
        <div>Get Started</div>
      </section>
    </div>
  );
};

export default MobileMenu;
