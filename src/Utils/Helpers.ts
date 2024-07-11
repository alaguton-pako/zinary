import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function classesMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
