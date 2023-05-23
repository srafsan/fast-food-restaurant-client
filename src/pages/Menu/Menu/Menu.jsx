import { Helmet } from "react-helmet-async";
import Cover from "../../../components/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"} />
      <PopularMenu />
    </div>
  );
};

export default Menu;
