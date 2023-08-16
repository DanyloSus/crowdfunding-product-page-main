const Progress = () => {
  return (
    <section className="reveal">
      <div
        className="flex justify-between text-left gap-12 md:flex-col md:text-center md:gap-5 "
        id="progress"
      >
        <div>
          <h2 className="">$89,914</h2>
          <p>of $100,000 backed</p>
        </div>
        <div>
          <h2>5,007</h2>
          <p>total backers</p>
        </div>
        <div className="border-r-0">
          <h2>56</h2>
          <p>days left</p>
        </div>
      </div>
      <div className="h-3 w-full bg-[#f4f4f4] rounded-full overflow-hidden mt-10">
        <div className="h-full w-[89.914%] bg-moderate-cyan rounded-r-full"></div>
      </div>
    </section>
  );
};

export default Progress;
