const Header = () => {
  const handleOpen = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu?.classList.toggle("z-20");
    mobileMenu?.classList.toggle("opacity-0");
    mobileMenu?.classList.toggle("-z-20");
  };

  return (
    <header className="flex items-center justify-between py-12 px-[164px] bg-gradient-to-b from-[hsla(0,0%,0%,0.3)] to-transparent md:px-6 md:py-8 z-30 relative">
      <img src="./logo.svg" alt="logo" />
      <nav className="flex text-white gap-8 md:hidden">
        <a href="#">About</a>
        <a href="#">Discover</a>
        <a href="#">Get Started</a>
      </nav>
      <img
        src="./icon-hamburger.svg"
        alt="icon hamburger"
        onClick={handleOpen}
        className="md:block hidden"
      />
    </header>
  );
};

export default Header;
