import Button from "@/app/ui/button";
import Card from "@/app/ui/card";
import Pagination, { PaginationLink } from "@/app/ui/pagination";

const multiSelectOptions = [
  { id: 0, label: "Software Development", value: "software_development" },
  { id: 1, label: "User Experience", value: "user_experience" },
  { id: 2, label: "Graphic Design", value: "graphic_design" },
];

export default function Step2() {
  return (
    <>
      <Card>
        <h2 className="mb-6 text-[20px] font-semibold text-white">
          Which topics are you interested in?
        </h2>

        <form className="flex grow flex-col items-center gap-y-6">
          <fieldset className="w-full space-y-4">
            {multiSelectOptions.map((option) => (
              <div key={option.id} className="w-full">
                <input
                  type="checkbox"
                  id={option.value}
                  name={option.value}
                  hidden
                  className="peer"
                />
                <label
                  htmlFor={option.value}
                  className="block w-full rounded-xl border border-gray-light bg-gray-medium p-4 text-sm text-gray-brown peer-checked:border-primary-light peer-checked:bg-primary-dark peer-checked:font-semibold peer-checked:text-white"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </fieldset>
          <Button className="mt-auto">Continue</Button>
        </form>
      </Card>
      <Pagination currentPageNum={2} totalPages={3}>
        <PaginationLink state="previous" href="./step1" />
        <PaginationLink state="current" />
        <PaginationLink state="next" href="./step3" />
      </Pagination>
    </>
  );
}
