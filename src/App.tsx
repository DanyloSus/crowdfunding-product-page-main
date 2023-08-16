import About from "./Elements/About";
import BG from "./Elements/BG";
import BackThisProject from "./Elements/BackThisProject";
import Header from "./Elements/Header";
import MobileMenu from "./Elements/MobileMenu";
import Progress from "./Elements/Progress";
import Thanks from "./Elements/Thanks";
import Top from "./Elements/Top";

const App = () => {
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
