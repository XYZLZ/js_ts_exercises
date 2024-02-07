import "../App.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variantsize?: "sm" | "md" | "lg" | "xl" | "full";
  title: string;
  hidden?: boolean;
}
const ResponseButtom = ({ variantsize, title, hidden, ...props }: Props) => {
  const variantsSizes = {
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    full: "full",
  };

  return (
    <>
      <button
        className={`${
          variantsize ? variantsSizes[variantsize] : variantsSizes["md"]
        } ${hidden && "hidden"}`}
        {...props}
      >
        {title}
      </button>
    </>
  );
};

export default ResponseButtom;
