import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item text-white pt-6 my-20">
      <SectionTitle heading={"FEATURED ITEMS"} subHeading={"Check it out"} />
      <div className="md:flex justify-center items-center pt-12 pb-20 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>May 23, 2023</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            soluta quam quae atque illum ea iusto consequuntur provident porro
            tempore rem, enim pariatur blanditiis quod, repellat dignissimos eos
            dolores libero quisquam magnam suscipit! Unde, reiciendis
            repudiandae a sapiente labore ea doloremque ipsam maiores voluptate
            officia tempore, similique vitae deserunt culpa?
          </p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
