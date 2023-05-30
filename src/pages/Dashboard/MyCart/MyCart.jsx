import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div>
        <h3 className="text-3xl">Total Items: {cart.length}</h3>
        <h3 className="text-2xl">Total Items: $ {total}</h3>
        <button className="btn btn-warning btn-sm">PAY</button>
      </div>
    </div>
  );
};

export default MyCart;
