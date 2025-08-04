// app/colleges/page.tsx
import { ApiEndPoints } from "@/utils/apiEndPoints";
import CollegesView from "./CollegesView";
import { apiCallMultipart } from "@/utils/apiHelper";

async function getInitialColleges(uid: string) {
  const data = {
    cid: 1,
    uid,
    lower: 0,
    upper: 6,
  };

  const { res } = await apiCallMultipart({
    method: "post",
    apiEnd: ApiEndPoints.GET_USER_BY_UNIVERSITY,
    data,
  });

  return res?.data?.data || [];
}

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let uid = "";
  const uidData = await searchParams;

  uid =
    typeof uidData.uid === "string"
      ? uidData.uid
      : "467d8841-b3c3-42cc-a439-ee4d912bf1c6";
  const initialColleges = await getInitialColleges(uid);

  return <CollegesView initialData={initialColleges} />;
}
