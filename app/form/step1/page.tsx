"use client";

import { FORM_ACTIONS, useFormContext } from "@/app/lib/form-context";
import Button from "@/app/ui/button";
import Card from "@/app/ui/card";
import Pagination, { PaginationLink } from "@/app/ui/pagination";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Step1() {
  const { formState, dispatch } = useFormContext();
  const { push } = useRouter();
  const [name, setName] = useState(formState.step1.name);
  const [email, setEmail] = useState(formState.step1.email);

  function handleNext() {
    dispatch({
      type: FORM_ACTIONS.CHANGED_STEP1,
      payload: {
        name,
        email,
      },
    });
    push("./step2");
  }

  return (
    <>
      <Card>
        <h2 className="mb-6 text-[20px] font-semibold text-white">Register</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleNext();
          }}
          className="flex grow flex-col items-center gap-y-6"
        >
          <div className="w-full">
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-gray-brown"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="block w-full rounded-xl border-2 border-gray-light bg-transparent p-3 px-4 text-sm font-semibold text-white outline-none ring-white placeholder:text-sm placeholder:font-semibold placeholder:text-gray-medium focus:border-primary-light"
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-gray-brown"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="block w-full rounded-xl border-2 border-gray-light bg-transparent p-3 px-4 text-sm font-semibold text-white outline-none ring-white placeholder:text-sm placeholder:font-semibold placeholder:text-gray-medium focus:border-primary-light"
            />
          </div>
          <Button className="mt-auto">Continue</Button>
        </form>
      </Card>
      <Pagination currentPageNum={1} totalPages={3}>
        <PaginationLink state="current" />
        <PaginationLink state="next" href="./step2" />
        <PaginationLink state="inactive" />
      </Pagination>
    </>
  );
}
