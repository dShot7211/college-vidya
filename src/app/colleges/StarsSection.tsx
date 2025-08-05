/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ArrowRight } from "lucide-react";

interface starsSection {
  college: any;
}
const StarsSection = ({ college }: starsSection) => {
  return (
    <>
      <div className="w-full flex border mt-4">
        <div className="md:w-[50%] flex flex-col items-center justify-center w-full">
          <div className="flex items-center">
            <Icon
              icon="ic:baseline-star"
              style={{
                marginLeft: "3px",
                fontSize: "17px",
                color: "#FAAF00",
              }}
            />
            <p className="mx-[0.3rem] text-[13px] leading-[20px] font-medium">
              {college?.university?.cv_rating} / 5{" "}
            </p>
          </div>
          <p className="mx-[0.7rem] text-[11px] leading-[20px] font-medium text-[#0056D2]">
            {college?.university?.reviews?.length} Reviews
          </p>
        </div>
        <div className="md:w-[50%] w-full relative bg-white border-l border-r">
          <div className="flex justify-center items-center py-1 pb-0">
            <div className="w-[40px] h-[40px]">
              <CircularProgressbar
                value={36}
                text={`${36}%`}
                styles={buildStyles({
                  pathColor: "turquoise",
                  trailColor: "#eee",
                  textSize: "30px",
                })}
              />
            </div>
          </div>
          <div>
            <div className="badge">Student Choice</div>
          </div>
        </div>
        <div className="md:w-[50%] w-full relative bg-white mt-2">
          <div className="flex flex-col items-center justify-center space-y-0 py-0 rounded-xl bg-white max-w-md mx-auto">
            {/* Avatars */}
            <div className="flex -space-x-4">
              <Avatar className="w-9 h-9 border-2 border-white">
                <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar className="w-9 h-9 border-2 border-white">
                <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" />
                <AvatarFallback>CD</AvatarFallback>
              </Avatar>
              <Avatar className="w-9 h-9 border-2 border-white">
                <AvatarImage src="https://randomuser.me/api/portraits/women/65.jpg" />
                <AvatarFallback>EF</AvatarFallback>
              </Avatar>
            </div>

            {/* Text + icon */}
            <div className="flex items-center space-x-0 text-center mt-2">
              <p className="text-[10px] font-medium text-gray-800">
                Talk to our expert
              </p>
              <ArrowRight className="w-3 h-3 text-gray-800" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StarsSection;
