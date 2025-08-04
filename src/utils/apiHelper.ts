/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { BASE_URL } from "./apiEndPoints";

// export const fetchColleges = async ({
//   cid,
//   uid,
//   lower,
//   upper,
// }: {
//   cid: number;
//   uid: string;
//   lower: number;
//   upper: number;
// }) => {
//   console.log("here");

//   const formData = new FormData();
//   formData.append("cid", cid.toString());
//   formData.append("uid", uid);
//   formData.append("lower", lower.toString());
//   formData.append("upper", upper.toString());

//   // const res = await fetch('https://admin.collegevidya.com/getuserbyuniversity/', {
//   const res = await fetch(
//     `${BASE_URL.main}${ApiEndPoints.GET_USER_BY_UNIVERSITY}`,
//     {
//       method: "POST",
//       body: formData,
//     }
//   );

//   if (!res.ok) throw new Error("API call failed");
//   return res.json();
// };

type ApiCallParams = {
  method?: "get" | "post" | "put" | "delete" | "patch";
  apiEnd?: string;
  data?: any;
  setLoading?: (loading: boolean) => void;
  query?: any;
  responseType?: InternalAxiosRequestConfig["responseType"];
};

export const apiCallMultipart = async ({
  method = "post",
  apiEnd = "",
  data = {},
  setLoading = () => {},
  query = {},
}: ApiCallParams): Promise<{
  res?: AxiosResponse;
  error?: unknown;
}> => {
  const formData = new FormData();

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      formData.append(key, data[key]);
    }
  }

  setLoading(true);

  try {
    const res = await axios[method](BASE_URL.main + apiEnd, formData, {
      params: query,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setLoading(false);
    return { res };
  } catch (error: unknown) {
    console.error("Error from axios util:", error);
    setLoading(false);
    return { error };
  }
};
