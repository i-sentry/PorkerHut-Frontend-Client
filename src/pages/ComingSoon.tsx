import BreadCrumb from "../components/utility/BreadCrumbs";
import ComingSoonImg from "../assets/coming-soon.svg";
import NavBar from "../components/nav-component/NavBar";
import Footer from "../components/footer-component/Footer";
import { useParams } from "react-router-dom";
import { AdminSideBarLink } from "../utils/Navigation";

const ComingSoon = () => {
  const { id } = useParams();

  const [routePage] = AdminSideBarLink.filter(
    (link: any) => link.id === Number(id),
  );
  const url = routePage.url.split("/").filter((link: any) => link.length >= 3);
  const crumbs = url.map((item: any) => {
    return {
      name: `${item.slice(0, 1).toUpperCase() + item.slice(1)}`,
      link: `/${item.toLowerCase()}`,
    };
  });
  console.log(id, typeof id, "id id");

  const pendingPages = (page: string) => {
    switch (page.toLowerCase()) {
      case "vet partner":
        return "Veterinary Services";

      case "logistic service":
        return "Logistic Service";
      default:
        return "page";
    }
  };

  const crumbsList = (name: any) => {
    switch (name) {
      case "vet partner":
        return {
          name: "Veterinary Services",
          link: "/admin/vets",
        };

      case "logistic service":
        return {
          name: "Logistic Service",
          link: "/admin/logistics",
        };
      default:
        return "page";
    }
  };

  console.log(routePage, url, "routePage");
  return (
    <>
      <NavBar border={`border-b`} />
      <div className="px-4 pt-[70px] pb-16">
        <BreadCrumb
          linkColor="text-gray-700"
          items={[
            {
              name: "Home",
              link: `/${url.at(0)}`,
            },
            ...crumbs,

            // {
            //   name: "Blogs",
            //   link: "/blog",
            // },
          ]}
        />

        <div className="flex flex-col items-center">
          <img
            src={ComingSoonImg}
            alt="Coming Soon"
            className="mb-7 w-[250px]"
          />
          <div className="flex w-full flex-col items-center space-y-4">
            <div className="space-y-2 text-center">
              <p className="font-medium text-[#197B30]">
                We're working hard to bring you something awesome. Stay tuned!
              </p>
              <p className="font-medium text-[#FE6600]">
                **Notify me when PorkerHut {pendingPages(routePage?.name)} is
                available**
              </p>
            </div>

            <div className="flex w-full flex-col items-center lg:w-1/2">
              <form id="campaign" className="w-full">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Please enter your email address"
                  className="form-input mb-5 inline-block w-full flex-grow rounded-md border placeholder:text-sm placeholder:text-[#A2A2A2] focus:border-green-700 focus:outline-0 focus:ring-green-700"
                />
                <div className="flex items-center justify-center gap-2">
                  <button className="inline-block -translate-x-2 rounded-sm px-6 py-2 text-sm font-medium text-green-700 ring-1 ring-[#197B30]">
                    Back
                  </button>
                  <button className="inline-block -translate-x-2 rounded-sm bg-[#197B30] px-6 py-2 text-sm font-medium text-white ring-1 ring-[#197B30]">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ComingSoon;
