/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { apiCallMultipart } from "@/utils/apiHelper";
import { ApiEndPoints } from "@/utils/apiEndPoints";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

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
    <div className="p-4 mx-4 md:mx-8 lg:mx-16">
      {/* New top container with 60-40 layout */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-[75%] w-full space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {colleges.map((college, index) => (
              <Card key={index} className="p-0">
                <CardContent className="p-4">
                  <div className="mt-1 flex flex-col md:flex-row gap-1">
                    <div className="md:w-[60%] w-full space-y-1">
                      <div
                        className="text-sm flex justify-start text-truncate"
                        style={{
                          backgroundColor:
                            college?.university?.university_dynamic_tag_color,
                          maxWidth: college?.university?.custom_tags?.includes(
                            "<?xml"
                          )
                            ? "60%"
                            : "100%",
                        }}
                      >
                        <span
                          dangerouslySetInnerHTML={{
                            __html: college?.university?.custom_tags,
                          }}
                        ></span>
                      </div>
                      <h4>{college?.university?.name}</h4>
                    </div>
                    <div className="md:w-[40%] w-full flex items-center justify-center">
                      <Image
                        src={college?.university?.logo}
                        alt={`${college.name} logo`}
                        width={160}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="w-full  border space-y-1 mt-4">
                    {college?.university?.approval_details?.map(
                      (
                        item: {
                          id: number;
                          title: string;
                          logo: string;
                          priority: number;
                          status: number;
                          accreditation_description: string | null;
                        },
                        index: number
                      ) =>
                        `  ${item?.title} ${
                          college?.university?.approval_details?.length - 1 ===
                          index
                            ? ""
                            : "|"
                        }`
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Right 40%: static content */}
        <div className="md:w-[25%] w-full bg-muted rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Explore Top Colleges</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Compare, shortlist, and apply directly to top UGC-approved
            universities.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Button onClick={loadMore} disabled={loading}>
          {loading ? "Loading..." : "Load More"}
        </Button>
      </div>
    </div>
  );
}
