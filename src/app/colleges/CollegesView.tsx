/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { apiCallMultipart } from "@/utils/apiHelper";
import { ApiEndPoints } from "@/utils/apiEndPoints";
import { useSearchParams } from "next/navigation";

export default function ClientColleges({
  initialData,
}: {
  initialData: any[];
}) {
  const [colleges, setColleges] = useState(initialData);
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
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {colleges.map((college, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold">{college.name}</h2>
              <p>{college.city}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Button onClick={loadMore} disabled={loading}>
          {loading ? "Loading..." : "Load More"}
        </Button>
      </div>
    </div>
  );
}
