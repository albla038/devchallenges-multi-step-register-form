import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "h-10 w-32 rounded-full bg-gradient-to-b from-primary-light to-primary-dark text-sm font-semibold text-white hover:opacity-85 focus:border-white active:opacity-60",
        className,
      )}
    >
      {children}
    </button>
  );
}
