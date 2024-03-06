import BreadCrumb from "../components/utility/BreadCrumbs";
import ComingSoonImg from "../assets/coming-soon.svg";
import NavBar from "../components/nav-component/NavBar";
import Footer from "../components/footer-component/Footer";

const ComingSoon = () => {
  return (
    <>
      <NavBar border={`border-b`} />
      <div className="pt-20 pb-16">
        <BreadCrumb
          items={[
            {
              name: "Home",
              link: "/",
            },
            {
              name: "Blogs",
              link: "/blog",
            },
          ]}
        />

        <div className="flex flex-col items-center">
          <img
            src={ComingSoonImg}
            alt="Coming Soon"
            className="mb-7 w-[400px]"
          />
          <div className="w-full space-y-4">
            <p className="font-medium text-[#197B30]">
              We are coming soon with something awesome for all Porker Hut User
            </p>
            <form id="campaign" className="w-full">
              <div className="flex w-full items-center rounded-md border border-[#D9D9D9] focus-within:border-2 focus-within:border-green-700">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Please enter your email address"
                  className="form-input flex-grow border-none placeholder:text-sm placeholder:text-[#A2A2A2] focus:border-0 focus:outline-0 focus:ring-0"
                />
                <button className="rounded-sm bg-[#197B30] px-8 py-3 font-medium text-white">
                  Submit
                </button>
              </div>
            </form>
            <p className="font-medium text-[#FE6600]">
              **Notify me when page is launched**
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ComingSoon;
