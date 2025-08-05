/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { apiCallMultipart, currencySetter } from "@/utils/apiHelper";
import { ApiEndPoints } from "@/utils/apiEndPoints";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Check } from "lucide-react";
import NewsCard from "./NewsCard";

export default function ClientColleges({
  initialData,
}: {
  initialData: any[];
}) {
  const [colleges, setColleges] = useState(initialData);
  //   console.log("colleges", colleges[0]?.university?.logo);

  const [lower, setLower] = useState(6);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const uid = searchParams.get("uid");

  const loadMore = async () => {
    const data = {
      cid: 1,
      uid: uid || "467d8841-b3c3-42cc-a439-ee4d912bf1c6",
      lower,
      upper: lower + 6,
    };

    const { res } = await apiCallMultipart({
      method: "post",
      apiEnd: ApiEndPoints.GET_USER_BY_UNIVERSITY,
      data,
      setLoading,
    });

    if (res) {
      setColleges((prev) => [...prev, ...(res?.data?.data || [])]);
      setLower(lower + 6);
    }
  };

  return (
    <div className="p-4 px-4 md:px-8 lg:px-14 bg-[#F2F2F2]">
      {/* New top container with 60-40 layout */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-[75%] w-full space-y-4 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {colleges.map((college, index) => (
              <Card
                key={index}
                className="p-4"
                style={{
                  boxShadow:
                    "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;",
                  border: "none",
                }}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row gap-1">
                    <div className="md:w-[55%] w-full space-y-1">
                      <div
                        className="text-sm flex justify-start text-truncate truncate whitespace-nowrap p-0.5 text-white rounded-md"
                        style={{
                          backgroundColor:
                            college?.university?.university_dynamic_tag_color ||
                            "#0056D2",
                          maxWidth: college?.university?.custom_tags?.includes(
                            "<?xml"
                          )
                            ? "63%"
                            : "60%",
                        }}
                      >
                        <span
                          className="text-[12px] truncate whitespace-nowrap overflow-hidden text-ellipsis px-1 py-0.3"
                          dangerouslySetInnerHTML={{
                            __html:
                              college?.university?.custom_tags ||
                              "College Vidya",
                          }}
                        ></span>
                      </div>
                    </div>
                    <div className="md:w-[35%] w-full flex items-center justify-center mt-[-8px]">
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
                  {/* approvals */}
                  <div className="w-full flex items-center mt-4 px-0 py-1">
                    <Icon
                      icon="material-symbols:verified-rounded"
                      style={{
                        marginRight: "6px",
                        width: "22px",
                        height: "22px",
                        color: "#FAAF00",
                        flexShrink: 0,
                      }}
                    />
                    <div className="truncate whitespace-nowrap overflow-hidden text-ellipsis text-sm">
                      {college?.university?.approval_details
                        ?.map(
                          (item: any, index: any, arr: any) =>
                            `${item.title}${
                              index !== arr.length - 1 ? " | " : ""
                            }`
                        )
                        .join("")}
                    </div>
                  </div>

                  {/* stars and percentage */}
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
                  {/* apply now */}
                  <div className="w-full flex justify-center mt-4">
                    <Button className="w-[80%] bg-yellow-500 hover:bg-yellow-400 text-white text-[14px] font-medium rounded-full py-4 group">
                      {currencySetter(college?.courses_fee_details[0]?.fee)}*
                      {/* <span className="text-[11px] ml-[-6px] mb-[-2px]">
                        {college?.courses_fee_details[0]?.fee_type?.fee_type ===
                        "Full Fees (internally)"
                          ? "(Full) "
                          : "sem "}
                      </span> */}
                      <span className="text-[14px] font-medium text-[#075975]">
                        Apply Now
                      </span>
                    </Button>
                  </div>
                  <div className="w-full flex flex-col mt-4 h-[80px] overflow-y-auto">
                    <p className="w-max text-[11px] bg-[#E2FBED] text-[#057450] py-0.5 px-2 font-bold rounded-md">
                      Know your university in 2 mins
                    </p>

                    <ul className="space-y-2 mt-2">
                      {college?.university?.universty_cards?.map(
                        (feature: any) => (
                          <li
                            key={`${feature?.id}`}
                            className="flex items-start text-sm text-gray-800 ml-1"
                          >
                            <Check className="text-green-600 w-3 h-3 mt-1 mr-2 flex-shrink-0 font-medium" />
                            <span className="text-[11px] font-medium">
                              {feature?.content}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Button onClick={loadMore} disabled={loading}>
              {loading ? "Loading..." : "Load More"}
            </Button>
          </div>
        </div>
        {/* Right 40%: static content */}
        <div className="md:w-[25%] w-full bg-muted rounded-lg p-0">
          <NewsCard />
        </div>
      </div>
    </div>
  );
}
