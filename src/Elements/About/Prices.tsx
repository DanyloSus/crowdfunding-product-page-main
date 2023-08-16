interface PricesProps {
  name: string;
  price: number;
  p: string;
  left: number;
}

const Prices = ({ name, price, p, left }: PricesProps) => {
  return (
    <div
      className="p-8 rounded-lg border border-dark-gray flex flex-col gap-6"
      style={left ? {} : { opacity: 0.3 }}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">{name}</h2>{" "}
        <p className="text-moderate-cyan font-bold">Pledge ${price} or more</p>
      </div>
      <p>{p}</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <h1 className="font-bold text-4xl">{left}</h1>
          <p>left</p>
        </div>{" "}
        <button
          className="bg-moderate-cyan py-3 px-10 rounded-full text-white font-[500] hover:bg-dark-cyan transition-colors"
          style={left ? {} : { background: "hsl(0, 0%, 48%)" }}
        >
          {left ? "Select Reward" : "Out of stock"}
        </button>
      </div>
    </div>
  );
};

export default Prices;
