// import Footer from "../components/footer-component/Footer";
// import NavBar from "../components/nav-component/NavBar";
// import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";
// @ts-ignore
import StarGif from "../assets/ratingsuccess.gif";
import { Link } from "react-router-dom";
import { BsX } from "react-icons/bs";

type RatingSuccessProps = {
  modal: boolean;
  setModal: any;
};

const RatingSuccess: React.FC<RatingSuccessProps> = ({ modal, setModal }) => {
  return (
    <>
      <section
        className={`w-full bg-black bg-opacity-50 h-screen fixed top-0 left-0 backdrop-blur-xl flex justify-center items-center duration-500 px-4 mx-auto pt-20 py-16 md:pt-48 cursor-pointer ${
          modal ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* <div className="flex mb-2">
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
        </div> */}
        <div className="w-full relative bg-white py-16 flex justify-center items-center rounded-xl lg:w-[700px]">
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
          <button
            className="flex gap-1 text-lg items-center absolute top-4 right-4 cursor-pointer"
            onClick={() => setModal(false)}
          >
            <BsX size={24} /> close
          </button>
        </div>
      </section>
    </>
  );
};

export default RatingSuccess;
