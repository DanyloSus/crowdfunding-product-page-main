import { useEffect } from "react";
import Pledge from "./BackThisProject/Pledge";

const BackThisProject = () => {
  const handleClose = () => {
    const modal = document.getElementById("modal");
    modal?.classList.toggle("-z-20");
    modal?.classList.toggle("opacity-0");
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
    <div className="-z-20 opacity-0 transition-opacity" id="modal">
      <div
        className={
          "bg-[hsla(0,0%,0%,0.3)] w-screen absolute z-10 cursor-pointer" +
          ` ${documentHeight}px`
        }
        style={{ height: documentHeight + "px" }}
        id="shadow"
      ></div>
      <div className="absolute w-screen h-full pt-[184px] z-10 md:px-6 md:pt-[120px]">
        <section className="text max-w-[730px] mx-auto">
          <img
            src="./icon-close-modal.svg"
            alt="icon close modal"
            className="ml-auto cursor-pointer"
            onClick={handleClose}
          />
          <h1 className="text-xl font-bold">Back this project</h1>
          <p className="my-6 md:text-sm">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <div className="flex flex-col gap-6">
            <Pledge
              name="Pledge with no reward"
              p="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
              sus={1}
              left={null}
            />
            <Pledge
              name="Bamboo Stand"
              p="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
              sus={2}
              pledge={25}
              left={101}
            />
            <Pledge
              name="Black Edition Stand"
              p="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list."
              sus={3}
              pledge={75}
              left={64}
            />
            <Pledge
              name="Mahogany Special Edition"
              p="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
              sus={4}
              pledge={200}
              left={0}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default BackThisProject;
