import Button from "@/app/ui/button";
import Card from "@/app/ui/card";

export default function Step3() {
  return (
    <Card>
      <h2 className="mb-6 text-[20px] font-semibold text-white">Summary </h2>

      <div className="space-y-1 font-medium">
        <div>
          <label htmlFor="name" className="text-gray-brown">
            Name:{" "}
          </label>
          <p id="name" className="inline text-white">
            Emily Johnson
          </p>
        </div>

        <div>
          <label htmlFor="email" className="text-gray-brown">
            Email:{" "}
          </label>
          <p id="email" className="inline text-white">
            emily.johnson@gmail.com
          </p>
        </div>
      </div>

      <div className="mt-4 font-medium">
        <label htmlFor="topics" className="text-gray-brown">
          Topics:{" "}
        </label>
        <ul id="topics" className="list-disc pl-6 text-white">
          <li>User Experience</li>
          <li>Graphic Design</li>
        </ul>
      </div>

      <form className="flex grow flex-col items-center gap-y-6">
        <Button className="mt-auto">Confirm</Button>
      </form>
    </Card>
  );
}
