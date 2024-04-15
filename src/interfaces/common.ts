import { Dispatch, SetStateAction } from "react";

export type SetState<T> = Dispatch<SetStateAction<T>>;

export type BackendError = {
  error: string;
  message: string;
  statusCode: number;
};

export type BackendResponse<T> = {
  data: T;
  message: string;
  statusCode: 200;
};
