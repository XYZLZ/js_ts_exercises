import "../App.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variantsize?: "sm" | "md" | "lg" | "xl" | "full";
  title: string;
  hidden?: boolean;
}

interface HookProps {
    handleClick : (arg : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const variantsSizes = {
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    full: "full",
  };



function useButtom ({handleClick}: HookProps) {

    const Response = ({ variantsize, title, hidden, ...props }: Props) => {
        return (
          <>
            <button
              onClick={handleClick}
              className={`${
                variantsize ? variantsSizes[variantsize] : variantsSizes["md"]
              } ${hidden && "hidden"}`}
              {...props}
            >
              {title}
            </button>
          </>
        )
      }
    return [Response]
}

export default useButtom