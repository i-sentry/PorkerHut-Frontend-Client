import { useEffect, useState } from "react";
import { BiTrashAlt } from "react-icons/bi";
import { BsPlus, BsX } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useCreateCategories,
  useUpdateSingleCategory,
  useUpdateSingleSubcategory,
} from "../../services/hooks/Vendor/category";
import CustomCatModal from "../../components/admin-dashboard-components/CustomCatModal";
import { useCategoryModal } from "../../store/overlay";
import { toast } from "react-toastify";

const ManageCategories = ({
  setCateInfo,
  catInfo,
  refetch,
}: {
  setCateInfo: any;
  catInfo: boolean;
  refetch: any;
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [categoryName, setCategoryName] = useState("");
  const [subcategory, setSubcategory] = useState<any[]>([]);
  const [cateId, setCateId] = useState("");
  const createCategory = useCreateCategories();
  const updateSub = useUpdateSingleSubcategory(cateId);
  const showModal = useCategoryModal((state) => state.showModal);
  const setShowModal = useCategoryModal((state) => state.setShowModal);

  useEffect(() => setShowModal(false), []);

  const [questions, setQuestions] = useState<any[]>([
    { id: 1, question: "", required: true },
  ]);
  const [image, setImage] = useState<any>(null);
  const handleAddQuestion = () => {
    setQuestions((prev: any) => {
      return [
        ...prev,
        { id: crypto.randomUUID(), question: "", required: true },
      ];
    });
  };
  const cateInfo = queryParams.get("cateInfo");
  const categoryInfo = queryParams.get("cat");
  const subInfo = queryParams.get("sub");
  console.log(categoryInfo, subInfo, "categoryInfo");

  useEffect(() => {
    if (cateInfo && categoryInfo) {
      setCategoryName(categoryInfo);
      setSubcategory((prev: any) => {
        return [...prev, { name: subInfo }];
      });
    } else {
      setCategoryName(categoryName);
      setSubcategory(subcategory);
    }
  }, []);

  // const handleCancelBlueDiv = (id: number) => {
  //   const updatedQuestion = questions.filter((question) => question.id !== id);
  //   setQuestions(updatedQuestion);
  // };

  const handleCreateCategory = (e: any) => {
    e.preventDefault();

    console.log(canSubmit);
    if (image) {
      const data = new FormData();
      data.append("name", categoryName);
      data.append("featuredImage", image);
      subcategory.forEach((value: any, index: any) => {
        data.append(`subcategories[${index}]`, value);
      });

      createCategory
        .mutateAsync(data)
        .then((res: any) => {
          console.log(res, "cat cretae");
          setCateInfo((prev: any) => !prev);
          navigate(
            `/admin/manage+category?cateInfo=${encodeURIComponent(catInfo)}}`,
          );
          refetch();
          toast.success("category created successufully");
        })
        .catch((err: any) => {
          console.log(err, "catErr");
          toast.error("Error occurred, try again!!!");
        });

      console.log(
        {
          name: categoryName,
          featuredImage: image,
          subcategory: [...subcategory],
        },
        "aubmissin",
      );
    }

    // const data = {
    //   name: categoryName,
    //   description: "",
    //   subcategories: [
    //     {
    //       name: "",
    //     },
    //   ],
    //   categoryQuestions: [
    //     {
    //       category: categoryName,
    //       question: "Main Colour",
    //       required: true,
    //       questionHint:
    //         "Main colour of the product, can be also a certain shade of a colour. Example: Black, Brown, White, Pink.",
    //       __v: 0,
    //     },
    //   ],
    // };
  };

  const updateCateName = () => {};

  const handleFileChange = (e: any) => {
    const file = e.target.files && e.target.files[0];
    // const name = e.target.name;
    // setImage1
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(file);
      // console.log(url, "url");
    }
    // console.log(file, e.target.name);
  };
  console.log("file uploaded", image);

  const handleQuestionChange = (e: any, id: number) => {
    const { value } = e.target;
    setQuestions((prevQuestions) => {
      return prevQuestions.map((q) => {
        if (q.id === id) {
          return { ...q, question: value };
        }
        return q;
      });
    });
  };

  const deleteQuestion = (id: any) => {
    const updatedQuestion = questions.filter(
      (question: any) => question.id !== id,
    );
    console.log(id, "id", updatedQuestion);

    setQuestions(updatedQuestion);
  };

  console.log(showModal, "showModal");

  const handleSubCat = (e: any) => {
    e.preventDefault();
    console.log(categoryName, "cat index");
    console.log(showModal, "showModal");
    setShowModal(true);
    setCategoryName(categoryName);
    // setSelectedCategoryId(index);
  };

  const canSubmit = image && categoryName ? true : false;
  return (
    <>
      <div className="mt-10 mb-3 rounded-sm bg-[#F4F4F4] p-4 shadow-sm">
        <h1 className="text-[24px] font-medium leading-[28px] text-[#333333]">
          Category Information
        </h1>
        <p className="mt-2 text-[16px] font-normal leading-[19px] text-[#A2A2A2]">
          The form is required for product detailing and sellers are required
          fill the product form for approval.
        </p>
      </div>
      <section className="grid items-start gap-4 xl:grid-cols-2">
        <div className="bg-[#F4F4F4] p-4">
          <h3 className="mb-2 text-xl font-medium text-[#333]">Category</h3>
          <form className="space-y-3">
            <div>
              <label htmlFor="categoryName" className="block">
                <span className="text-sm text-[#333] after:text-red-600 after:content-['*']">
                  Category Name
                </span>
                <input
                  type="text"
                  name="categoryName"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  id="categoryName"
                  placeholder="Enter category name"
                  className="form-input mt-1 h-[50px] w-full rounded border border-[#D9D9D9] placeholder:text-sm placeholder:text-[#A2A2A2] focus:border-green-700 focus:ring-green-700"
                />
              </label>
              <div className="mt-2 flex items-center justify-start gap-3">
                {subcategory?.length > 0 &&
                  subcategory.map((sub: any, index: number) => {
                    return (
                      <div key={index} className="inline-flex items-center">
                        {/* <input
                          type="radio"
                          name={`${sub.name}-${index}`}
                          id={sub.name}
                          className="form-radio h-3 w-3 border border-[#333] bg-transparent checked:bg-transparent checked:accent-transparent hover:bg-transparent focus:border-0 focus:bg-transparent focus:ring-0 checked:focus:bg-transparent"
                          readOnly
                        />{" "} */}
                        <span className="mr-1 inline-block h-3 w-3 rounded-full border border-[#333]"></span>
                        <span className="text-sm capitalize">{sub.name}</span>
                      </div>
                    );
                  })}
              </div>
            </div>

            <label htmlFor="" className="block">
              <span className="text-sm text-[#333] after:text-red-600 after:content-['*']">
                Upload an image that represent the category
              </span>
              <div className="relative mt-1 flex h-[50px] items-center justify-start overflow-hidden rounded border border-[#D9D9D9] bg-white py-2 px-3">
                {image && (
                  <span className="inline-flex cursor-pointer items-center gap-2 rounded bg-green-700 p-1.5 px-3 text-white">
                    {image?.name}
                    <span className="text-white" onClick={() => setImage(null)}>
                      <BsX size={20} />
                    </span>
                  </span>
                )}
                <label
                  htmlFor="categoryImg"
                  className="absolute top-0 right-0 inline-flex h-full cursor-pointer items-center justify-center bg-[#D9D9D9] px-6"
                >
                  Select file
                </label>
              </div>
              <input
                type="file"
                name="categoryImg"
                onChange={(e: any) => handleFileChange(e)}
                id="categoryImg"
                className="mt-1 hidden w-full rounded border border-[#D9D9D9] placeholder:text-[#A2A2A2] focus:border-green-700 focus:ring-green-700"
              />
              <p className="mt-2 text-[#A2A2A2]">
                Image needs to be at least 800 x 800 pixel with a maximum of
                3000 x 3000 pixel.
              </p>
            </label>

            <div className="mt-10 flex items-center justify-end gap-3">
              <button
                disabled={categoryName?.length < 1}
                onClick={(e) => handleSubCat(e)}
                className={`inline-flex h-[48px] items-center justify-center gap-2 rounded bg-transparent px-7 py-2.5 font-medium text-green-700 ring-1 ring-green-700 ${categoryName?.length < 1 ? "cursor-not-allowed opacity-50" : "cursor-pointer opacity-100"}`}
              >
                <BsPlus size={28} /> <span>Add Subcategory</span>
              </button>
              <button
                disabled={!canSubmit}
                onClick={(e: any) => handleCreateCategory(e)}
                type="submit"
                className={`h-[48px] rounded bg-green-700 px-7 py-2.5 text-white ring-1 ring-green-700 ${canSubmit ? "opacity-100" : "opacity-50"} `}
              >
                Create
              </button>
            </div>
          </form>
        </div>
        <div className="bg-[#F4F4F4] p-4">
          <h3 className="mb-1 text-xl font-medium text-[#333]">
            Product Information
          </h3>
          <p className="text-[#A2A2A2]">
            Key questions pertaining to the category should be asked. Maximum of
            4.
          </p>
          <div className="space-y-8">
            {questions.map((question: any, i: any) => (
              <div key={i}>
                <div className="flex items-center gap-2">
                  <input
                    aria-label={`question${i}`}
                    type="text"
                    name={`question${i}`}
                    id={`question${i}`}
                    value={question?.question}
                    onChange={(e: any) => handleQuestionChange(e, question.id)}
                    className="form-input mt-1 h-[50px] w-full rounded border border-[#D9D9D9] placeholder:text-sm placeholder:text-[#A2A2A2] focus:border-green-700 focus:ring-green-700"
                  />
                  <div className="inline-flex flex-col items-center">
                    <span className="text-sm text-[#333]">Required</span>
                    <ToggleSwitch
                      question={question}
                      setQuestions={setQuestions}
                    />
                  </div>
                </div>
                <div className="mt-4 border-b border-dashed border-[#A2A2A2] pb-2 text-sm font-light tracking-wide text-[#A2A2A2]">
                  Question guide for easy response?
                </div>
                <div
                  className={`mt-7 flex items-center justify-end gap-4 opacity-100 `}
                >
                  <button
                    onClick={() => deleteQuestion(question.id)}
                    disabled={questions?.length === 1}
                    className="text-[#333]"
                  >
                    <BiTrashAlt size={24} />
                  </button>
                  <button
                    onClick={handleAddQuestion}
                    disabled={questions?.length === 4}
                    className={`inline-flex h-[48px] items-center justify-center gap-2 rounded bg-transparent px-5 py-2.5 font-medium text-green-700 ring-1 ring-green-700 ${questions?.length === 4 ? "opacity-50" : "opacity-100"}`}
                  >
                    <BsPlus size={28} />
                    <span>Add Question</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showModal && (
        <CustomCatModal
          // category={category}
          // setCateInfo={setCateInfo}
          // cateInfo={cateInfo}
          catName={categoryName}
          setSubcate={setSubcategory}
        />
      )}
    </>
  );
};

export default ManageCategories;

function ToggleSwitch({ question, setQuestions }: any) {
  const [toggle, setToggle] = useState(question?.required);
  const toggleVisibility = () => {
    setToggle((prev: any) => !prev);
    setQuestions((prev: any) => {
      return prev.map((ques: any) => {
        if (ques.id === question.id) {
          return { ...ques, required: !question.required };
        } else {
          return ques;
        }
      });
    });
  };

  return (
    <div
      className={`relative w-[80px] scale-[.9] rounded p-1 ${toggle ? "bg-[#22c55e]" : "bg-[#F91919]"}`}
      onClick={toggleVisibility}
    >
      <div
        className={`absolute top-1/2 h-[1.5rem] w-[32px] -translate-y-1/2 rounded-sm bg-white duration-300 ${toggle ? "left-[42px] w-[32px]" : "left-1"}`}
      ></div>
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex w-10 justify-center font-medium uppercase text-white">
          on
        </span>
        <span className="inline-flex w-10 justify-center font-medium uppercase text-white">
          off
        </span>
      </div>
    </div>
  );
}
