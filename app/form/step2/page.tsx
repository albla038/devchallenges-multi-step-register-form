"use client";

import { multiSelectOptions } from "@/app/lib/data";
import { FORM_ACTIONS, useFormContext } from "@/app/lib/form-context";
import Button from "@/app/ui/button";
import Card from "@/app/ui/card";
import Pagination, { PaginationLink } from "@/app/ui/pagination";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Step2() {
  const { formState, dispatch } = useFormContext();
  const [selectedOptions, setOptions] = useState<number[]>(
    formState.step2.selectedOptions,
  );
  const { push } = useRouter();

  console.log(selectedOptions);

  function handleCheck(id: number) {
    setOptions((prevOptions) => {
      if (prevOptions.includes(id)) {
        return prevOptions.filter((prevOption) => prevOption !== id);
      } else {
        return [...prevOptions, id];
      }
    });
  }

  function handleNext() {
    dispatch({
      type: FORM_ACTIONS.CHANGED_STEP2,
      payload: { selectedOptions },
    });

    push("./step3");
  }

  return (
    <>
      <Card>
        <h2 className="mb-6 text-[20px] font-semibold text-white">
          Which topics are you interested in?
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleNext();
          }}
          className="flex grow flex-col items-center gap-y-6"
        >
          <fieldset className="w-full space-y-4">
            {multiSelectOptions.map((option) => (
              <div key={option.id} className="w-full">
                <input
                  type="checkbox"
                  id={option.value}
                  name={option.value}
                  checked={selectedOptions.includes(option.id)}
                  onChange={() => handleCheck(option.id)}
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
