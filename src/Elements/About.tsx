import Prices from "./About/Prices";

const About = () => {
  return (
    <section>
      <h2 className="text-xl font-bold mb-9">About this project</h2>
      <p className="mb-9 md:text-sm">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="mb-9 md:text-sm">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <div className="flex flex-col gap-6">
        <Prices
          name="Bamboo Stand"
          price={25}
          p="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
          left={101}
        />
        <Prices
          name="Black Edition Stand "
          price={75}
          p="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          left={64}
        />
        <Prices
          name="Mahogany Special Edition"
          price={200}
          p="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          left={0}
        />
      </div>
    </section>
  );
};

export default About;
