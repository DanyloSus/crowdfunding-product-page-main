const Header = () => {
  return (
    <header className="flex items-center justify-between py-12 px-[164px] bg-gradient-to-b from-[hsla(0,0%,0%,0.3)] to-transparent">
      <img src="./logo.svg" alt="logo" />
      <nav className="flex text-white gap-8">
        <a href="#">About</a>
        <a href="#">Discover</a>
        <a href="#">Get Started</a>
      </nav>
    </header>
  );
};

export default Header;
