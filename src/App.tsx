import { useEffect } from "react";
import About from "./Elements/About";
import BG from "./Elements/BG";
import BackThisProject from "./Elements/BackThisProject";
import Header from "./Elements/Header";
import MobileMenu from "./Elements/MobileMenu";
import Progress from "./Elements/Progress";
import Thanks from "./Elements/Thanks";
import Top from "./Elements/Top";

const App = () => {
  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);

    reveal();
  }, []);

  return (
    <main className="mb-[124px] md:mb-[76px]">
      <BG />
      <BackThisProject />
      <Thanks />
      <MobileMenu />
      <Header />
      <div className="max-w-[728px] relative top-[188px] md:top-[160px] mx-auto flex flex-col gap-6 md:px-6">
        <Top />
        <Progress />
        <About />
      </div>
    </main>
  );
};

export default App;
