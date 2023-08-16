import useRadioStore from "../../store";

interface PledgeProps {
  name: string;
  left?: number | null;
  pledge?: number;
  p: string;
  sus: number;
}

const Pledge = ({ name, left, pledge, p, sus }: PledgeProps) => {
  const { activeKey, changeActiveKey } = useRadioStore((s) => s);

  const handleThanks = () => {
    const modal = document.getElementById("modal");
    const thanks = document.getElementById("thanks");
    modal?.classList.toggle("-z-20");
    modal?.classList.toggle("opacity-0");
    thanks?.classList.toggle("-z-20");
    thanks?.classList.toggle("opacity-0");
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <div
      className="p-8 rounded-lg border border-dark-gray flex flex-col gap-6 cursor-pointer md:px-6 md:py-8"
      style={
        left !== undefined && (left !== 0 || left === null)
          ? sus === activeKey
            ? { borderColor: "hsl(176, 50%, 47%)" }
            : {}
          : left === 0
          ? { opacity: 0.3 }
          : {}
      }
      onClick={() => changeActiveKey(Number(sus))}
    >
      <div className="flex items-start gap-6 min-h-[80px] md:block">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-dark-gray rounded-full justify-center items-center px-1 md:flex hidden">
            {" "}
            <div
              className="w-3 h-3 bg-moderate-cyan rounded-full px-[6px]"
              style={
                left !== undefined &&
                (left !== 0 || left === null) &&
                sus === activeKey
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            ></div>
          </div>
          <div className="hidden items-center md:flex-col md:items-start md:flex">
            <h1
              className={`font-bold text-xl md:text-base ${
                left !== undefined &&
                (left !== 0 || left === null) &&
                "hover:text-moderate-cyan"
              }`}
            >
              {name}
            </h1>{" "}
            {pledge ? (
              <p className="text-moderate-cyan font-bold ml-4 md:m-0">
                Pledge ${pledge} or more
              </p>
            ) : (
              ""
            )}{" "}
          </div>
        </div>
        <div className="w-5 h-5 border-2 border-dark-gray rounded-full flex justify-center items-center px-1 md:hidden">
          {" "}
          <div
            className="w-3 h-3 bg-moderate-cyan rounded-full px-[6px]"
            style={left && sus === activeKey ? { opacity: 1 } : { opacity: 0 }}
          ></div>
        </div>
        <div>
          <div className="flex items-center md:flex-col md:items-start md:hidden">
            <h1
              className={`font-bold text-xl md:text-base ${
                left && "hover:text-moderate-cyan"
              }`}
            >
              {name}
            </h1>{" "}
            {pledge ? (
              <p className="text-moderate-cyan font-bold ml-4 md:m-0">
                Pledge ${pledge} or more
              </p>
            ) : (
              ""
            )}{" "}
            {left ? (
              <div className="flex items-center ml-auto">
                <h1 className="font-bold text-2xl mr-2">{left}</h1> <p>left</p>
              </div>
            ) : (
              ""
            )}
          </div>
          <p className="text-sm md:">{p}</p>
          <div className="hidden md:flex">
            {left && left > 0 ? (
              <div className="flex items-center">
                <h1 className="font-bold text-xl mr-2">{left}</h1> <p>left</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {left !== undefined &&
      (left !== 0 || left === null) &&
      sus === activeKey ? (
        <div className="border-t flex items-center justify-between pt-10 md:block md:text-center">
          <p className="md:mb-5">Enter your piedge</p>{" "}
          <div className="flex items-center relative gap-4">
            <p className="absolute left-[10px]">$</p>
            <input
              type="num"
              id="pledgeInp"
              min={pledge}
              value={pledge}
              className="border rounded-full w-[98px] h-[45px] text-center font-bold active:border-moderate-cyan hover:border-moderate-cyan transition-colors"
            />
            <button
              className="bg-moderate-cyan py-3 px-10 rounded-full text-white font-[500] hover:bg-dark-cyan transition-colors md:px-5"
              onClick={() => {
                const pledgeInp: HTMLInputElement | null =
                  document.getElementById("pledgeInp") as HTMLInputElement;

                if (pledgeInp) {
                  const pledgeInpV: string = pledgeInp.value;
                  if (pledge) {
                    if (pledge >= Number(pledgeInpV)) {
                      handleThanks();
                    } else {
                      pledgeInp.style.borderColor = "red";
                    }
                  } else {
                    if (0 < Number(pledgeInpV)) {
                      handleThanks();
                    } else {
                      pledgeInp.style.borderColor = "red";
                    }
                  }
                }
              }}
            >
              Continue
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pledge;
