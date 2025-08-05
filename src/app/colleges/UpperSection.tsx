/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import { useMediaPredicate } from "react-media-hook";

interface uppersection {
  college: any;
}

const UpperSection = ({ college }: uppersection) => {
  const isMediumUp = useMediaPredicate("(min-width: 768px)");
  return (
    <>
      <div className="flex flex-row md:flex-row gap-1">
        <div className="w-[40%]  md:w-[65%]  space-y-1">
          <div
            className="text-sm flex justify-start text-truncate truncate whitespace-nowrap p-0.5 text-white rounded-md"
            style={{
              backgroundColor:
                college?.university?.university_dynamic_tag_color || "#0056D2",
              maxWidth: college?.university?.custom_tags?.includes("<?xml")
                ? isMediumUp
                  ? "50%"
                  : "100%"
                : isMediumUp
                ? "60%"
                : "100%",
            }}
          >
            <span
              className="text-[12px] truncate whitespace-nowrap overflow-hidden text-ellipsis px-1 py-0.3"
              dangerouslySetInnerHTML={{
                __html: college?.university?.custom_tags || "College Vidya",
              }}
            ></span>
          </div>
        </div>
        <div className="w-[60%] md:w-[35%] flex items-center justify-end mt-[-8px]">
          <Image
            src={college?.university?.logo}
            alt={`${college.name} logo`}
            width={130}
            height={65}
            className="object-contain"
          />
        </div>
      </div>
      <p className="text-[15px] font-bold pl-1 mt-0">
        {college?.university?.name}
      </p>
    </>
  );
};

export default UpperSection;
