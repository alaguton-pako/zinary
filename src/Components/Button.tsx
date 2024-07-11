import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { Loader } from "lucide-react";

export const buttonVariants = cva(
  "focus:ring-4 focus:ring-blue-300 rounded-lg focus:outline-none dark:focus:ring-blue-800 rounded-full flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-blue-400 text-white hover:bg-blue-500 dark:text-gray-50",
        red: "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        light: "bg-gray-50 text-gray-900",
        dark: "bg-gray-500 text-white hover:bg-gray-900 dark:hover:bg-gray-600",
        green:
          "bg-green-500 text-white hover:bg-green-600 dark:hover:bg-green-600",
        outline:
          "text-black bg-transparent border-2 border-blue-400 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-100",
        subtle:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100",
        ghost:
          "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-black border border-black hover:text-black dark:hover:text-gray-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
      },
      size: {
        default: "text-sm px-5 py-2.5",
        sm: "px-3 py-2 text-sm font-medium",
        lg: "px-5 py-3 text-base font-medium text-center",
        xl: "text-base px-6 py-3.5 text-center",
        xs: "px-3 py-2 text-xs font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  loadingText?: string;
}

const sizeMap: { [key: string]: string | number } = {
  default: 16,
  sm: 12,
  lg: 20,
  xl: 24,
  xs: 10,
};

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  variant,
  size,
  loading,
  loadingText,
  ...props
}) => {
  const buttonClass = (
    buttonVariants({ variant, size, className })
  );

  const loaderSize = size ? sizeMap[size] : sizeMap.default;

  return (
    <button className={buttonClass} {...props}>
      {loading ? <Loader size={loaderSize} /> : null}
      {loading ? loadingText : children}
    </button>
  );
};

export default Button;
