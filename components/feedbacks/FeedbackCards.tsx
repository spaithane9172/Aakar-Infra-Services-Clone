import { reviewsType } from "@/data/feedbacks.data";
import { FaStar } from "react-icons/fa6";

const FeedbackCards = ({ review }: { review: reviewsType }) => {
  return (
    <div className="bg-white shadow hover:shadow-xl h-55 px-6 py-3 rounded-xl">
      <div className="flex border-b-2 border-gray-200 pb-3">
        <div className="border-2 border-blue-900 rounded-full  shadow-lg p-2 mr-3">
          <div className="w-13 h-13 bg-cyan-200 font-bold flex justify-center items-center  rounded-full text-2xl">
            {review.name.charAt(0)}
          </div>
        </div>
        <div>
          <h1 className="font-semibold">{review.name}</h1>
          <h2 className="text-sm">{review.role}</h2>
          <div className="flex justify-center items-center w-fit bg-sky-100 text-blue-700 px-3 py-1 rounded-lg text-sm ">
            <FaStar className="mr-1" />
            {review.rating}
          </div>
        </div>
      </div>
      <div className="pt-3">
        <p>
          <i>"{review.message}"</i>
        </p>
      </div>
    </div>
  );
};

export default FeedbackCards;
