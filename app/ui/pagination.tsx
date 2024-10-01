import clsx from "clsx";
import Link from "next/link";

type PaginationProps = {
  children: React.ReactNode;
  currentPageNum: number;
  totalPages: number;
};

export default function Pagination({
  children,
  currentPageNum,
  totalPages,
}: PaginationProps) {
  return (
    <div className="relative mt-2">
      <menu className="flex gap-4 p-2">{children}</menu>
      <p className="absolute -left-20 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-medium">
        Step {currentPageNum} of {totalPages}
      </p>
    </div>
  );
}

type PaginationLinkProps = {
  state: "previous" | "current" | "next" | "inactive";
  href?: string;
};

export function PaginationLink({ state, href = "" }: PaginationLinkProps) {
  return (
    <Link
      href={href}
      className={clsx("size-2 rounded-full bg-gray-dark", {
        "bg-primary-dark": state === "previous",
        "pointer-events-none bg-primary-dark ring-4 ring-gray-dark":
          state === "current",
        "pointer-events-none": state === "inactive",
      })}
    />
  );
}
