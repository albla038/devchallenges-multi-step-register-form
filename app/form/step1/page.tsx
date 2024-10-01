"use client";

import formReducer, { ACTIONS, initalData } from "@/app/lib/form-reducer";
import Button from "@/app/ui/button";
import Card from "@/app/ui/card";
import Pagination, { PaginationLink } from "@/app/ui/pagination";
import Link from "next/link";
import { useReducer, useState } from "react";

export default function Step1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [state, dispatch] = useReducer(formReducer, initalData);

  return (
    <>
      <Card>
        <h2 className="mb-6 text-[20px] font-semibold text-white">Register</h2>

        <form className="flex grow flex-col items-center gap-y-6">
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
              value={state.name}
              onChange={(e) =>
                dispatch({
                  type: ACTIONS.CHANGED_NAME,
                  payload: e.target.value,
                })
              }
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
              value={state.email}
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.CHANGED_EMAIL,
                  payload: e.target.value,
                });
              }}
              placeholder="example@gmail.com"
              className="block w-full rounded-xl border-2 border-gray-light bg-transparent p-3 px-4 text-sm font-semibold text-white outline-none ring-white placeholder:text-sm placeholder:font-semibold placeholder:text-gray-medium focus:border-primary-light"
            />
          </div>
          <Button className="mt-auto">Continue</Button>
        </form>
      </Card>
      <Pagination currentPageNum={1} totalPages={3}>
        <PaginationLink state="current"/>
        <PaginationLink state="next" href="./step2"/>
        <PaginationLink state="inactive"/>
      </Pagination>
    </>
  );
}
