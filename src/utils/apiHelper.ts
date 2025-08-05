/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { BASE_URL } from "./apiEndPoints";

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

//
export const currencySetter = (number: any) => {
  let theNewCurrency = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(number);
  let currencySymbol = theNewCurrency.substring(0, 1);
  let theAmount = theNewCurrency.substring(1);
  if (theAmount.endsWith(".00")) {
    theAmount = theAmount.slice(0, -3);
  }
  return `${currencySymbol} ${theAmount}`;
};
