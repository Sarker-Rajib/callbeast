"use client";
import { useState } from "react";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div
          data-aos="fade-down"
          key={index}
          className="pb-3 overflow-hidden border-b"
        >
          <button
            onClick={() => handleToggle(index)}
            className="w-full text-left p-2 text-black text-lg md:text-xl font-semibold flex justify-between items-center"
          >
            {item.title}
            <span
              className={`transform ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            >
              <span className="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-[#EBEBEB] to-[#C4C4C4] border rounded-full text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-down"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </span>
          </button>
          <div
            className={`overflow-hidden max-h-0 ${
              activeIndex === index ? "max-h-[1000px] p-2 rounded-b-lg" : ""
            }`}
          >
            {activeIndex === index && <div>{item.content}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
