/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { apiCallMultipart, currencySetter } from "@/utils/apiHelper";
import { ApiEndPoints } from "@/utils/apiEndPoints";
import { useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import "react-circular-progressbar/dist/styles.css";
import { Check } from "lucide-react";
import NewsCard from "./NewsCard";
import UpperSection from "./UpperSection";
import StarsSection from "./StarsSection";

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
                  {/* upper section */}
                  <UpperSection college={college} />

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
                  <StarsSection college={college} />

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
                  {/* know university */}
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
        {/* Right static content */}
        <div className="md:w-[25%] w-full bg-muted rounded-lg p-0">
          <NewsCard />
        </div>
      </div>
    </div>
  );
}
