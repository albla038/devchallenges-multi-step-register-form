export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex grow flex-col items-center justify-center">
      {children}
    </main>
  );
}
