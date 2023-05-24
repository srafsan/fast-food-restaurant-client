import { Helmet } from "react-helmet-async";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import Cover from "../../../components/Cover/Cover";

import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"} />
      {/* main cover */}
      <SectionTitle subHeading={"Don't Miss"} heading={"TODAYS OFFER"} />
      {/* offered menu items */}
      <MenuCategory items={offered} />
      {/* dessert menu items */}
      <MenuCategory items={desserts} title={"Dessert"} img={dessertImg} />
      {/* Pizza menu items */}
      <MenuCategory items={pizza} title={"Pizza"} img={pizzaImg} />
      {/* salad menu items */}
      <MenuCategory items={salad} title={"salad"} img={saladImg} />
      {/* soup menu items */}
      <MenuCategory items={soup} title={"soup"} img={soupImg} />
    </div>
  );
};

export default Menu;
