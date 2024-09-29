import Button from "@/app/ui/button";
import Card from "@/app/ui/card";
import Pagination from "@/app/ui/pagination";

export default function Step1() {
  return (
    <>
      <Card>
        <h2 className="mb-6 text-[20px] font-semibold text-white">Register</h2>

        <form className="flex grow flex-col items-center gap-y-6">
          <div className="w-full">
            <label
              htmlFor="name"
              className="text-gray-brown mb-2 block text-sm font-semibold"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="enter your name"
              required
              className="border-gray-light placeholder:text-gray-medium focus:border-primary-light block w-full rounded-xl border-2 bg-transparent p-3 px-4 text-sm font-semibold text-white outline-none ring-white placeholder:text-sm placeholder:font-semibold"
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="email"
              className="text-gray-brown mb-2 block text-sm font-semibold"
            >
              Name
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              className="border-gray-light placeholder:text-gray-medium focus:border-primary-light block w-full rounded-xl border-2 bg-transparent p-3 px-4 text-sm font-semibold text-white outline-none ring-white placeholder:text-sm placeholder:font-semibold"
            />
          </div>
          <Button className="mt-auto">Continue</Button>
        </form>
      </Card>
      <Pagination />
    </>
  );
}
