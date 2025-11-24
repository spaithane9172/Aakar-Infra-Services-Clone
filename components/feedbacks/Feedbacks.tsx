"use client";
import { feedbacks } from "@/data/feedbacks.data";
import FeedbackCards from "./FeedbackCards";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

const Feedbacks = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.screen.width < 680) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="bg-sky-200 py-20">
      <div className="px-4 md:px-40">
        <h1 className="font-bold text-3xl md:text-4xl text-center mb-10">
          {feedbacks.title}
        </h1>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={isMobile ? 1 : 3}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          loop={true}
          speed={700}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full py-6"
        >
          {feedbacks.reviews.map((review) => (
            <SwiperSlide key={review.name}>
              <FeedbackCards review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedbacks;
