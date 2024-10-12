import FormContextProvider from "@/app/lib/form-context";

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormContextProvider>
      <main className="flex grow flex-col items-center justify-center">
        {children}
      </main>
    </FormContextProvider>
  );
}
