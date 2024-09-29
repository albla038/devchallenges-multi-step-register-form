import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button(props: ButtonProps) {
  const { children, className } = props;

  return (
    <button
      {...props}
      className={clsx(
        "from-primary-light to-primary-dark h-10 w-32 rounded-full bg-gradient-to-b text-sm font-semibold text-white hover:opacity-85 focus:border-white active:opacity-60",
        className,
      )}
    >
      {children}
    </button>
  );
}
