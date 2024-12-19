import React from "react";
import { cn } from "@/lib/utils";

const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "rounded-full bg-[#11434C] px-10 py-3 text-center text-sm font-semibold text-white shadow-md shadow-[#11434C]/50",
        className
      )}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
