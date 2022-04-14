import React from "react";

const SlideShow = ({ children }) => {
  return (
    <div
      className={`relative w-full h-[500px] overflow-x-scroll md:overflow-hidden`}
    >
      <div className={`${children.length > 3 ? "animate" : ""} absolute flex `}>
        <div className="flex gap-x-4 ">{children}</div>
      </div>
    </div>
  );
};

export default SlideShow;
