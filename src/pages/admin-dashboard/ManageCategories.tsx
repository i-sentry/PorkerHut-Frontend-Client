import { useEffect, useMemo, useState } from "react";
import { BiTrashAlt } from "react-icons/bi";
import { BsPlus, BsX } from "react-icons/bs";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  useCreateCategories,
  useCreateSubcategory,
  useGetAllCategories,
  useGetOneCategory,
  useUpdateSingleCategory,
  useUpdateSingleSubcategory,
} from "../../services/hooks/Vendor/category";
import CustomCatModal from "../../components/admin-dashboard-components/CustomCatModal";
import { useCategoryModal } from "../../store/overlay";
import { ToastContainer, toast } from "react-toastify";
import { IoMdAdd } from "react-icons/io";
import { CgSpinner } from "react-icons/cg";

const ManageCategories = ({}: {}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(false);
  const [subcategory, setSubcategory] = useState<any>();
  const [confirm, setConfirm] = useState(false);
  const [cateId, setCateId] = useState("");
  const createCategory = useCreateCategories();
  const createSubCategory = useCreateSubcategory();
  const updateSub = useUpdateSingleSubcategory(cateId);
  const showModal = useCategoryModal((state) => state.showModal);
  const setShowModal = useCategoryModal((state) => state.setShowModal);
  const { data, isLoading, refetch } = useGetAllCategories();
  const selectedCategory = data?.data;
  const category = useMemo(() => {
    if (!isLoading && selectedCategory) {
      const [data] = selectedCategory?.filter((cat: any) => cat?._id === id);
      setCateId(data?._id);
      return data;
    } else {
      return {};
    }
  }, [id]);

  console.log("ididididididi", category);

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

  const subInfo = queryParams.get("sub");
  // console.log(subInfo, "categoryInfo");
  const removeQueryParams = () => {
    const { pathname } = location;
    const newPathname = pathname.split("?")[0]; // Remove query parameters from the pathname
    const newUrl = window.location.origin + newPathname; // Construct the new URL
    window.history.replaceState({}, "", newUrl); // Replace the URL without query parameters
  };
  useEffect(() => {
    if (id !== "new" && !isLoading) {
      setCategoryName(category?.name);
      setSubcategory({ name: subInfo });
      removeQueryParams();
    } else {
      setCategoryName(categoryName);
      setSubcategory(subcategory);
    }
  }, [id]);

  // const handleCancelBlueDiv = (id: number) => {
  //   const updatedQuestion = questions.filter((question) => question.id !== id);
  //   setQuestions(updatedQuestion);
  // };

  const handleCreateCategory = (e: any) => {
    e.preventDefault();
    setLoading(true);
    // console.log(canSubmit);
    if (image) {
      const data = new FormData();
      data.append("name", categoryName);
      data.append("featuredImage", image);
      // subcategory.forEach((value: any, index: any) => {
      //   data.append(`subcategories[${index}]`, value);
      // });

      createCategory
        .mutateAsync(data)
        .then((res: any) => {
          console.log(res, "cat cretae");
          toast.success("category created successufully");
          setCateId((prev: any) => res._id);
          console.log(cateId, "cateIDDDDD");
          createSubCategory
            .mutateAsync({ ...subcategory, category: res?._id })
            .then((res: any) => {
              console.log(res, "upafte sub cta");
              toast.success(`${res?.name} subcategories updated!`);
              navigate(`/admin/manage+category`);
              setLoading(false);
            })
            .catch((err: any) => {
              console.log(err, "upafte err sub cta");
              toast.error(`Subcategories not updated, try again!`);
              setLoading(false);
            });
        })
        .catch((err: any) => {
          console.log(err, "catErr");
          toast.error("Error occurred, try again!!!");
          setLoading(false);
        });
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

  const handleUpdateSubcategory = (e: any) => {
    e.preventDefault();
    setLoading(true);
    createSubCategory
      .mutateAsync({
        category: cateId,
        ...subcategory,
      })
      .then((res: any) => {
        console.log(res, "upafte sub cta");
        toast.success(`${res.name} subcategories updated!`);
        navigate(`/admin/manage+category`);
        setLoading(false);
      })
      .catch((err: any) => {
        console.log(err, "upafte err sub cta");
        toast.error(`Subcategories not updated, try again!`);
        setLoading(false);
      });
  };

  const updateCateName = () => {};

  const handleFileChange = (e: any) => {
    const file = e.target.files && e.target.files[0];
    // const name = e.target.name;
    // setImage1
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(file);
    }
  };

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
    if (id !== 1) {
      const updatedQuestion = questions.filter(
        (question: any) => question.id !== id,
      );
      console.log(id, "id", updatedQuestion);

      setQuestions(updatedQuestion);
    }
  };

  const handleSubCat = (e: any) => {
    e.preventDefault();
    setCategoryName(categoryName);
    setShowModal(true);
    // setConfirm(true);
    // setSelectedCategoryId(index);
  };

  const canSubmit = image && categoryName ? true : false;
  return (
    <>
      <div className="py-6 pl-8 pr-5 pb-10">
        <ToastContainer />
        <div className="flex items-center justify-between">
          <div className="">
            <h1 className="text-2xl font-bold text-[#333333]">
              Manage Categories
            </h1>
            <span className="mt-3 text-[16px] font-normal leading-[19px] text-[#A2A2A2]">
              Create categories for sold items.
            </span>
          </div>
          <button
            onClick={() => navigate("/admin/manage+category")}
            className={`flex cursor-pointer items-center gap-3 rounded-md border border-[#BB0101] bg-[#fff] px-3 py-2.5 text-[#BB0101] shadow-md`}
          >
            <span className="px-10">Cancel</span>
          </button>
        </div>
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
                    disabled={id !== "new"}
                    placeholder="Enter category name"
                    className={`form-input mt-1 h-[50px] w-full rounded border border-[#D9D9D9] placeholder:text-sm placeholder:text-[#A2A2A2] focus:border-green-700 focus:ring-green-700 ${id !== "new" ? "bg-neutral-200 bg-opacity-70 text-neutral-500" : "bg-white bg-opacity-100 text-black"}`}
                  />
                </label>
                <div className="mt-2 flex flex-wrap items-center justify-start gap-3">
                  {subcategory?.name && (
                    <div className="ml-3 inline-flex items-center">
                      <span className="mr-1 inline-block h-3 w-3 rounded-full border border-[#333]"></span>
                      <span className="text-sm capitalize">
                        {subcategory.name}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <label htmlFor="" className="block">
                <span className="text-sm text-[#333] after:text-red-600 after:content-['*']">
                  Upload an image that represent the category
                </span>
                <div
                  className={`relative mt-1 flex h-[50px] items-center justify-start overflow-hidden rounded border border-[#D9D9D9] py-2 px-3 ${id !== "new" ? "bg-neutral-200 bg-opacity-70 text-neutral-500" : "bg-white bg-opacity-100 text-black"}`}
                >
                  {image && (
                    <span className="inline-flex cursor-pointer items-center gap-2 rounded bg-green-700 p-1.5 px-3 text-white">
                      {image?.name}
                      <span
                        className="text-white"
                        onClick={() => setImage(null)}
                      >
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
                  disabled={id !== "new"}
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

                {id !== "new" ? (
                  <button
                    onClick={handleUpdateSubcategory}
                    className={`inline-flex h-[48px] items-center gap-2 rounded bg-green-700 px-7 py-2.5 text-white ring-1 ring-green-700 ${true ? "opacity-100" : "opacity-50"}`}
                  >
                    Update Subcategory
                  </button>
                ) : (
                  <button
                    disabled={!canSubmit || loading}
                    onClick={(e: any) => handleCreateCategory(e)}
                    type="submit"
                    className={`inline-flex h-[48px] items-center gap-2 rounded bg-green-700 px-7 py-2.5 text-white ring-1 ring-green-700 ${canSubmit ? "opacity-100" : "opacity-50"}`}
                  >
                    {loading ? <CgSpinner className="animate-spin" /> : ""}{" "}
                    Create
                  </button>
                )}
              </div>
            </form>
          </div>
          <div className="bg-[#F4F4F4] p-4">
            <div>
              <div>
                <h3 className="mb-1 text-xl font-medium text-[#333]">
                  Product Information
                </h3>
                <p className="text-[#A2A2A2]">
                  Key questions pertaining to the category should be asked.
                  Maximum of 4.
                </p>
              </div>
              <button className="rounded-md bg-green-700 px-4 py-2 text-white">
                Save Question
              </button>
            </div>
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
                      onChange={(e: any) =>
                        handleQuestionChange(e, question.id)
                      }
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
      </div>

      {showModal && (
        <CustomCatModal
          catName={categoryName}
          setConfirm={setConfirm}
          setSubcate={setSubcategory}
        />
      )}

      {confirm && (
        <ConfirmModal setConfirm={setConfirm} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default ManageCategories;

function ToggleSwitch({ question, setQuestions }: any) {
  const [toggle, setToggle] = useState(question?.required);
  const toggleVisibility = () => {
    // setToggle((prev: any) => !prev);
    setQuestions((prev: any) => {
      return prev.map((ques: any) => {
        if (ques.id === question.id) {
          setToggle(!question.required);
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

function ConfirmModal({
  setConfirm,
  setShowModal,
}: {
  setConfirm: any;
  setShowModal: any;
}) {
  const handleConfirm = () => {
    setShowModal(true);
  };
  return (
    <div className="fixed top-0 left-0 z-[80] flex h-full w-full items-center justify-center  bg-[#060606b6] backdrop-blur-sm">
      <div className="flex h-[200px] w-[400px] flex-col items-center justify-center rounded-3xl bg-white p-6">
        <p>Are you sure you want to add to subcategory</p>
        <div className="mt-6 flex justify-end gap-2">
          <button className="border border-green-700 bg-green-700 px-5 py-2 text-white">
            Yes
          </button>
          <button
            onClick={() => setConfirm(false)}
            className="border border-red-700 px-5 py-2 text-red-700"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
