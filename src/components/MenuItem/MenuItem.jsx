const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="flex items-center space-x-2">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[104px]"
        src={image}
        alt=""
      />
      <div className="w-2/3">
        <h3 className="uppercase">{name}----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">$ {price}</p>
    </div>
  );
};

export default MenuItem;
