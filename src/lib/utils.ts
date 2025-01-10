import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { AxiosError } from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAxiosErrorMessage = (
  error: AxiosError<{ message: string }>
) => {
  const errorMessage = error.response?.data?.message ?? "An error occurred";
  return errorMessage;
};
