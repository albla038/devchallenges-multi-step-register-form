"use client";

import { multiSelectOptions } from "@/app/lib/data";
import { FORM_ACTIONS, useFormContext } from "@/app/lib/form-context";
import Button from "@/app/ui/button";
import Card from "@/app/ui/card";
import Pagination, { PaginationLink } from "@/app/ui/pagination";
import { useRouter } from "next/navigation";

export default function Step3() {
  const { push } = useRouter();
  const { formState, dispatch } = useFormContext();
  const name = formState.step1.name;
  const email = formState.step1.email;
  const selectedOptions = formState.step2.selectedOptions;

  const selectedOptionsList = multiSelectOptions.filter((option) =>
    selectedOptions.includes(option.id),
  );

  function handleSubmit() {
    dispatch({
      type: FORM_ACTIONS.RESET,
      payload: null,
    });
    push("./step1");
  }

  return (
    <>
      <Card>
        <h2 className="mb-6 text-[20px] font-semibold text-white">Summary </h2>

        <div className="space-y-1 font-medium">
          <div>
            <label htmlFor="name" className="text-gray-brown">
              Name:{" "}
            </label>
            <p id="name" className="inline text-white">
              {name}
            </p>
          </div>

          <div>
            <label htmlFor="email" className="text-gray-brown">
              Email:{" "}
            </label>
            <p id="email" className="inline text-white">
              {email}
            </p>
          </div>
        </div>

        <div className="mt-4 font-medium">
          <label htmlFor="topics" className="text-gray-brown">
            Topics:{" "}
          </label>
          <ul id="topics" className="list-disc pl-6 text-white">
            {selectedOptionsList.map((option) => (
              <li key={option.id}>{option.label}</li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex grow flex-col items-center gap-y-6"
        >
          <Button className="mt-auto">Confirm</Button>
        </form>
      </Card>
      <Pagination currentPageNum={3} totalPages={3}>
        <PaginationLink state="previous" href="./step1" />
        <PaginationLink state="previous" href="./step2" />
        <PaginationLink state="current" />
      </Pagination>
    </>
  );
}
