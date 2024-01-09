import Footer from "../components/footer-component/Footer";
import NavBar from "../components/nav-component/NavBar";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";
// @ts-ignore
import StarGif from "../assets/ratingsuccess.gif";
import { Link } from "react-router-dom";

const RatingSuccess = () => {
  return (
    <>
      <NavBar />
      <section className="w-full bg-neutral-100 flex-col justify-[start_!important]  px-4 mx-auto pt-20 py-16">
        <div className="flex mb-2">
          <ProductsBreadCrumbs
            items={[
              {
                name: "Home",
                link: "/",
              },
              {
                name: "My Order",
                link: "/my-cart",
              },
              {
                name: "My Order Details",
                link: "/my__orders/:id",
              },
              {
                name: "Rate Product",
                link: "/rate_review",
              },
            ]}
          />
        </div>
        <div className="w-full bg-white py-28 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center p-8">
            <img
              src={StarGif}
              className="w-[300px]"
              alt="Star rating animation"
            />
            <h1 className="text-black text-2xl font-medium mb-8">
              Your Feedback was successfully submitted!
            </h1>
            <Link
              to="/products"
              className="px-[58px] py-3 bg-green-700 rounded text-white text-sm font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RatingSuccess;
