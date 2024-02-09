import React from "react";
import "../App.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variantSize?: "sm" | "md" | "lg" | "xl";
  hidden: boolean;
}

const Input = ({ variantSize, hidden, ...props }: InputProps) => {
  const variantSizes = {
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  };

  return (
    <input
      className={`${
        variantSize ? variantSizes[variantSize] : variantSizes["md"]
      } ${hidden && "hidden"}`}
      {...props}
    />
  );
};

export default Input;
