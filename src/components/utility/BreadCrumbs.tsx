import { Link } from "react-router-dom";
import { RxSlash } from "react-icons/rx";
type itemsType = {
  name: string | undefined;
  link: string;
};
type BreadCrumbType = {
  items: Array<itemsType>;
  className?: string;
  linkColor?: string;
};
const BreadCrumb = ({ items, className, linkColor }: BreadCrumbType) => {
  return (
    <div
      className={`text-secondary relative flex flex-1 flex-wrap items-center gap-x-2 rounded-none py-1 text-sm text-gray-400 ${className}`}
    >
      {items.map((item, index) =>
        index !== items.length - 1 ? (
          <div
            key={index}
            className="flex items-center  gap-x-2 rounded-none text-base"
          >
            <div
              key={index}
              className="flex items-center gap-x-2 rounded-none  text-base"
            >
              <Link to={item.link}>
                <button
                  className={`rounded-none py-2 font-light capitalize ${linkColor || "text-white"}`}
                >
                  {item.name}
                </button>
              </Link>
              <RxSlash />
            </div>
          </div>
        ) : (
          <button
            key={index}
            className="text-primary  rounded-md py-2 text-base font-light capitalize xxs:text-[] "
          >
            {item.name}
          </button>
        ),
      )}
    </div>
  );
};
export default BreadCrumb;
