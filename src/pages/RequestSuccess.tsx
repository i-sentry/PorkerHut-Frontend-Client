import { FaCheck } from "react-icons/fa";
import ProductBreadCrumb from "../components/story-components/ProductsBreadCrumbs";
import AppLayout from "../components/utility/AppLayout";
import { useNavigate } from "react-router-dom";

const RequestSuccess = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") as string);

  return (
    <AppLayout>
      <div className="bg-neutral-200 px-4 pb-11 pt-11">
        <ProductBreadCrumb
          items={[
            { name: "Home", link: "/" },
            { name: "Cart", link: "/my-cart" },
          ]}
        />
        <div className="mt-4 flex flex-col items-center justify-center bg-white px-5 py-10 sm:px-8 sm:py-20">
          <div className="mb-5 flex h-28 w-28 scale-90 items-center justify-center rounded-full border border-[#27E06B] bg-[#27E06B33] sm:scale-100">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#27E06B]">
              <FaCheck size={45} className="text-white" />
            </div>
          </div>
          <h3 className="mb-1 text-center text-2xl font-medium">
            Your request was successfully submitted!
          </h3>
          <p className="text-center">
            We sent an email to{" "}
            <span className="font-medium">{user?.email}</span> with your request
            details.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="mt-4 rounded-md bg-green-700 px-8 py-2.5 text-white"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </AppLayout>
  );
};

export default RequestSuccess;
