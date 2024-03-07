import ComingSoon from "../../components/ComingSoon";

const LogisticService = () => {
  return (
    <div className="relative py-10 px-4">
      <div>
        <h2 className="text-2xl font-semibold text-[#333333]">
          Logistic Partners
        </h2>
        <p className="text-[#A2A2A2]">
          Here you can check all available details of each logistic Partner.
        </p>
      </div>
      <div className="absolute top-0 left-0 w-full bg-white">
        <ComingSoon pendingPage={"Logistic Service"} />
      </div>
    </div>
  );
};

export default LogisticService;
