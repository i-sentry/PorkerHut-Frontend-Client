import { Link } from 'react-router-dom'
import { RxSlash  } from "react-icons/rx";
type itemsType = {
  name: string | undefined;
  link: string;
};
type BreadCrumbType = {
  items: Array<itemsType>;
};
const BreadCrumb = ({ items }: BreadCrumbType) => {
  return (
    <div className="flex py-1 flex-1 items-center text-sm text-secondary gap-x-2 flex-wrap rounded-none text-gray-400 relative">
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
                <button className="capitalize rounded-none text-white font-light py-2">
                  {item.name}
                </button>
              </Link>
              <RxSlash />
            </div>
          </div>
        ) : (
          <button
            key={index}
            className="text-primary  py-2 rounded-md capitalize text-base xxs:text-[] font-light "
          >
            {item.name}
          </button>
        )
      )}
    </div>
  );
};
export default BreadCrumb;