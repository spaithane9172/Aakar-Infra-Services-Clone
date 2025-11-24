import { whyAakar } from "@/data/whyAakar.data";
import WhyAakarCards from "./WhyAakarCards";

const WhyAakar = () => {
  return (
    <div id="whyAakar" className="px-4 md:px-40 pt-10 pb-20">
      <h1 className="font-bold text-3xl md:text-4xl text-center mb-3 md:mb-6">
        {whyAakar.title}
      </h1>
      <div className="w-full flex justify-center items-center mb-15">
        <p className="text-center text-gray-500 md:w-3/4">{whyAakar.para}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {whyAakar.features.map((data) => (
          <WhyAakarCards data={data} key={data.title} />
        ))}
      </div>
    </div>
  );
};

export default WhyAakar;
