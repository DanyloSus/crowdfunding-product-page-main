const Top = () => {
  const handleOpen = () => {
    const modal = document.getElementById("modal");
    modal?.classList.toggle("-z-20");
    modal?.classList.toggle("opacity-0");
  };

  return (
    <section className="pt-0 text-center">
      <img
        src="./logo-mastercraft.svg"
        alt="logo mastercraft"
        className="relative mx-auto -top-[28px]"
      />
      <h1 className="font-bold text-3xl mb-3">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="flex justify-between items-center mt-10">
        <button
          className="bg-moderate-cyan py-4 px-10 rounded-full text-white font-[500] hover:bg-dark-cyan transition-colors"
          onClick={handleOpen}
        >
          Back this project
        </button>{" "}
        <button className="flex items-center pr-6 rounded-full text-dark-gray bg-[#f4f4f4] hover:opacity-70 transition-opacity">
          <img
            src="./icon-bookmark.svg"
            alt="icon bookmark"
            className="relative -left-4"
          />
          Bookmark
        </button>
      </div>
    </section>
  );
};

export default Top;
