import { Link } from "react-router-dom";
import { RxSlash } from "react-icons/rx";
type itemsType = {
  name: string | undefined;
  link: string;
};
type BreadCrumbType = {
  items: Array<itemsType>;
};
const ProductBreadCrumb = ({ items }: BreadCrumbType) => {
  return (
    <div className="flex py-1 flex-1 items-center text-sm text-secondary gap-x-1 flex-wrap rounded-none text-white relative">
      {items.map((item, index) =>
        index !== items.length - 1 ? (
          <div
            key={index}
            className="flex items-center  gap-x-2 rounded-none text-black text-lg"
          >
            <div
              key={index}
              className="flex items-center gap-x-1 rounded-none text-black  text-base"
            >
              <Link to={item.link}>
                <button className="capitalize rounded-none hover:text-[#197b30] font-light py-2">
                  {item.name}
                </button>
              </Link>
              <RxSlash />
            </div>
          </div>
        ) : (
          <button
            key={index}
            className="text-primary hover:text-[#197b30] text-black py-2 rounded-md capitalize text-lg font-light "
          >
            {item.name}
          </button>
        )
      )}
    </div>
  );
};
export default ProductBreadCrumb;
