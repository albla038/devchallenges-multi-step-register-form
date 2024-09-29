export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-gray-dark border-gray-medium flex h-[400px] w-[456px] flex-col rounded-xl border p-8">
      {children}
    </section>
  );
}
