import { Link } from "react-router-dom";
// import { FaHeartCircleXmark } from "react-icons/fa6";
import { IoHeartDislikeOutline } from "react-icons/io5";

function NoFavorite() {
  return (
    <>
      <div className="text-center mt-12 flex flex-col justify-center items-center">
        <span className="inline-flex justify-center w-32 h-32 rounded-full items-center bg-neutral-600 bg-opacity-20 border-neutral-500 border">
          <span className="w-20 h-20 bg-neutral-600 rounded-full justify-center items-center inline-flex">
            <IoHeartDislikeOutline size={32} color="#fff" />
          </span>
        </span>
        <h3 className="text-neutral-800 font-bold mt-4 mb-2 text-2xl">
          No Favorite Added yet
        </h3>
        <p>Go to product page to add your favorite products</p>
        <Link
          to="/products"
          className="bg-green-600 rounded px-4 py-3 font-medium text-white mt-8"
        >
          View all Products
        </Link>
      </div>
    </>
  );
}

export default NoFavorite;
