import { useEffect } from "react";

const Thanks = () => {
  const handleClose = () => {
    const thanks = document.getElementById("thanks");
    thanks?.classList.toggle("-z-20");
    thanks?.classList.toggle("opacity-0");
  };

  let documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  useEffect(() => {
    const divHeight = document.body.scrollHeight + "px";
    const div = document.getElementById("shadow");
    if (div) {
      div.className = "bg-[hsla(0,0%,0%,0.3)] w-screen absolute z-10";
      div.style.height = divHeight;
    }
  }, []);

  return (
    <div className="-z-20 opacity-0 transition-opacity" id="thanks">
      <div
        className={
          "bg-[hsla(0,0%,0%,0.3)] w-screen absolute z-10" +
          ` ${documentHeight}px`
        }
        style={{ height: documentHeight + "px" }}
        id="shadow"
      ></div>
      <div className="absolute w-screen h-full pt-[184px] z-10">
        <section className="text max-w-[540px] mx-auto flex flex-col items-center text-center gap-5">
          <img src="./icon-check.svg" alt="icon check" />
          <h1 className="font-bold text-2xl">Thanks for your support!</h1>
          <p>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
          <button
            className="bg-moderate-cyan py-3 px-10 rounded-full text-white font-[500] hover:bg-dark-cyan transition-colors"
            onClick={handleClose}
          >
            Got it!
          </button>
        </section>
      </div>
    </div>
  );
};

export default Thanks;
