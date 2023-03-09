export default function StepperControl({
  handleClick,
  currentStep,
  steps,
}: any) {
  return (
    <div className="flex justify-center gap-8">
      <button
        onClick={() => handleClick()}
        className={`cursor-pointer rounded border border-[#AED1B9] bg-[#F4F4F4] py-2 px-6  text-sm text-[#AED1B7] transition duration-200 ease-in-out  ${
          currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
        }`}
      >
        Back
      </button>

      <button
        onClick={() => handleClick("next")}
        className="cursor-pointer rounded bg-[#197B30] py-2 px-6  text-sm text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
      >
        {currentStep === steps.length - 1 ? "Confirm" : "Continue"}
      </button>
    </div>
  );
}
