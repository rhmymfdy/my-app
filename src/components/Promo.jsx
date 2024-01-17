import React, { useState } from "react";

const Promo = ({ kostUnggulan }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // console.log(kostUnggulan)
  const images = [
    "/kamar.JPG",
    "/kamar2.JPG",
    "/kamar.JPG",
    "/kamar2.JPG",
    "/kamar.JPG",
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? kostUnggulan.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === kostUnggulan.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-12/12 m-auto p-4 bg-slate-900 ">
      <div
        id="controls-carousel"
        className="relative w-full"
        data-carousel="static"
      >
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden md:h-screen" style={{ height: '600px' }}>
          {kostUnggulan.map((image, index) => (
            <div
              key={index}
              className={`${index === activeIndex ? "block" : "hidden"
                } duration-700 ease-in-out absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
              data-carousel-item={index === activeIndex ? "active" : ""}
            >
              <img style={{ height: '600px', width: '2500px' }}
                src={`http://127.0.0.1:1337${image.attributes.gambar.data.attributes.url}`} className="w-full" alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
        {/* Slider controls */}
        <button
          onClick={handlePrev}
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-blue-950 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-white-500 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          onClick={handleNext}
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-blue-950 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-white-500 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Promo;
