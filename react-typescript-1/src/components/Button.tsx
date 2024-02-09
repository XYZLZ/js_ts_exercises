import React from "react";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  nombre: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  hidden?: boolean;
}

const Button = ({ nombre, size, hidden, ...props }: IButton) => {
  const sizes = {
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    full: "full",
  };
  
  return (
    <button
      className={`${size ? sizes[size] : sizes["md"]} ${hidden && "hidden"}`}
      {...props}
    >
      {nombre}
    </button>
  );
};

export default Button;
