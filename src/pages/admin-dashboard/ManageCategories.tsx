import { useEffect, useState } from "react";
import { BiTrashAlt } from "react-icons/bi";
import { BsPlus, BsX } from "react-icons/bs";

const ManageCategories = ({ handleSubCat }: any) => {
  const [categoryName, setCategoryName] = useState("");
  const [questions, setQuestions] = useState<any[]>([
    { id: 1, question: "", required: false },
  ]);
  const [image, setImage] = useState<any>(null);
  const handleAddQuestion = () => {
    setQuestions((prev: any) => {
      return [
        ...prev,
        { id: crypto.randomUUID(), questions: "", required: true },
      ];
    });
  };

  // const handleCancelBlueDiv = (id: number) => {
  //   const updatedQuestion = questions.filter((question) => question.id !== id);
  //   setQuestions(updatedQuestion);
  // };

  const handleCreateCategory = (e: any) => {
    e.preventDefault();
  };

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
  // console.log("file uploaded", image);

  const handleQuestionChange = (e: any, i: number) => {
    const { name, value } = e.target;
    console.log(name, value, "mwsss", i);

    // setQuestions((prev: any) => {
    //   return [...prev, { id: prev?.length + 1, questions: "", required: true }];
    // });
  };

  const deleteQuestion = (index: any) => {
    const updatedQuestion = questions.filter(
      (question: any) => question.id !== index,
    );
    console.log(index, "index", updatedQuestion);

    setQuestions(updatedQuestion);
  };
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
          <form onSubmit={handleCreateCategory} className="space-y-3">
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
            <label htmlFor="" className="block">
              <span className="text-sm text-[#333] after:text-red-600 after:content-['*']">
                Upload an image that represent the category
              </span>
              <div className="relative mt-1 flex h-[50px] items-center justify-start overflow-hidden rounded border border-[#D9D9D9] bg-white py-2 px-3">
                {image && (
                  <span className="inline-flex items-center gap-2 rounded bg-green-700 p-1.5 px-3 text-white">
                    {image?.name}
                    <span className="text-white" onClick={() => setImage(null)}>
                      <BsX size={20} />
                    </span>
                  </span>
                )}
                <label
                  htmlFor="categoryImg"
                  className="absolute top-0 right-0 inline-flex h-full items-center justify-center bg-[#D9D9D9] px-6"
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
                onClick={handleSubCat("disi92")}
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded bg-transparent px-7 py-2.5 font-medium text-green-700 ring-1 ring-green-700"
              >
                <BsPlus size={28} /> <span>Add Subcategory</span>
              </button>
              <button className="h-[48px] rounded bg-green-700 px-7 py-2.5 text-white ring-1 ring-green-700">
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
                    onChange={(e: any) => handleQuestionChange(e, i)}
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
                    onClick={() => deleteQuestion(i)}
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

      {/* {showModal && (
        <CustomCatModal
          category={category}
          setCateInfo={setCateInfo}
          cateInfo={cateInfo}
        />
      )} */}
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
