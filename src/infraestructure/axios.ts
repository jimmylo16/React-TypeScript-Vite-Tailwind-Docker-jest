import { AxiosInstance } from "axios";
import { axiosInstance } from "./axiosInstance";
import { BackendResponse } from "@/interfaces";

export type AxiosMethods = "get" | "post" | "put" | "delete" | "patch";
type IAxiosCall = {
  method: AxiosMethods;
  endpoint: string;
  id?: string;
  body?: unknown;
  query?: string;
  axiosInstance?: AxiosInstance;
};

/**
 * Axios Call will interact with the axions instance, and make http requests
 * @param `{IAxiosCall}`
 * @returns the response if success and the error if not.
 * @example
 * const response = await axiosCall({
 *   method: "get",
 *   endpoint: "/endpoint",
 *   id: "id",
 *   body: {
 *     body: "body",
 *   },
 * }
 */
export const axiosCall = async <T>({
  method,
  endpoint,
  id,
  body,
  query,
}: IAxiosCall): Promise<T> => {
  let url = `${endpoint}`;
  if (id) {
    url = url.concat(`/${id}`);
  }
  if (query) {
    url = url.concat(`?${query}`);
  }

  try {
    const response = await axiosInstance<BackendResponse<T>>({
      method,
      url,
      data: body,
    });
    return response.data.data;
  } catch (error: unknown) {
    return Promise.reject(error);
  }
};
