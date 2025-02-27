import React from "react";

export const Day = () => {
  return (
    <div className=" bg-white w-[414px] h-[828px] rounded-[48px] flex flex-col ">
      <div className="flex items-center justify-between px-[40px] py-[56px] pb-[30px]">
        <div className=" flex flex-col ">
          <div className="px-[5px] text-[18px] font-[500] text-black">Date</div>
          <div className="text-[48px] font-[800] text-black">City</div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M18.4768 25.5772L23.1596 17.2151C26.2226 11.7453 22.2691 5 16 5C9.73095 5 5.77737 11.7453 8.84045 17.2151L13.5232 25.5772C14.6072 27.5128 17.3928 27.5128 18.4768 25.5772Z"
              stroke="#4B5563"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="16"
              cy="13"
              r="2"
              stroke="#4B5563"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          className=" flex justify-center items-center size-[250px]"
          src="icon.jpg"
        ></img>
      </div>
      <div className="flex flex-col px-[40px]">
        <div
          className="text-[144px] font-[800] bg-gradient-to-b  from-[#111827] to-[#6B7280] bg-clip-text text-transparent"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          26°
        </div>
        <div className="text-[#FF8E27] font-[800] text-[24px]">Bright</div>
      </div>
      <div className="flex justify-between px-[40px] py-[50px] ">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M5.92428 12.541L13.9243 4.8743C15.0847 3.76225 16.9153 3.76225 18.0757 4.8743L26.0757 12.541C26.6662 13.1068 27 13.8892 27 14.7069V25C27 26.6569 25.6569 28 24 28H22H19H16H13H10H8C6.34315 28 5 26.6569 5 25V14.7069C5 13.8892 5.33385 13.1068 5.92428 12.541Z"
              stroke="url(#paint0_linear_1_129)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_129"
                x1="16"
                y1="1.5"
                x2="16"
                y2="29"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#111827" />
                <stop offset="1" stopColor="#6B7280" />
              </linearGradient>
            </defs>
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
          >
            <path
              d="M18.8101 25.5772L23.4929 17.2151C26.556 11.7453 22.6024 5 16.3333 5C10.0643 5 6.1107 11.7453 9.17378 17.2151L13.8566 25.5772C14.9405 27.5128 17.7262 27.5128 18.8101 25.5772Z"
              stroke="#D1D5DB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="16.3333"
              cy="13"
              r="2"
              stroke="#D1D5DB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
          >
            <path
              d="M15.916 7.36858C16.1058 7.58431 16.3793 7.70794 16.6666 7.70795C16.954 7.70796 17.2275 7.58435 17.4173 7.36864C19.8166 4.64263 23.9519 4.1919 26.8935 6.42021C29.9751 8.75461 30.5808 13.1452 28.2465 16.2268L22.1863 24.2268C20.8559 25.9831 18.7762 27.0105 16.5728 26.9999C14.3695 26.9893 12.2998 25.942 10.9863 24.173L5.04637 16.173C2.74172 13.069 3.38967 8.68448 6.49361 6.37982C9.43815 4.19353 13.5362 4.66439 15.916 7.36858Z"
              stroke="#D1D5DB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>{" "}
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M3 24.9809C3 20.6434 7.15158 17.5119 11.3222 18.7035L14.787 19.6934C15.5798 19.92 16.4202 19.92 17.213 19.6934L20.6778 18.7035C24.8484 17.5119 29 20.6434 29 24.9809C29 27.2006 27.2006 29 24.9809 29H7.01908C4.7994 29 3 27.2006 3 24.9809Z"
              stroke="#D1D5DB"
              strokeidth="2"
            />
            <circle cx="16" cy="9" r="6" stroke="#D1D5DB" strokeWidth="2" />
            <path
              d="M15 9C15 9.55228 15.4477 10 16 10C16.5523 10 17 9.55228 17 9C17 8.44772 17.4477 8 18 8C18.5523 8 19 8.44772 19 9C19 10.6569 17.6569 12 16 12C14.3431 12 13 10.6569 13 9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9Z"
              fill="#D1D5DB"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
