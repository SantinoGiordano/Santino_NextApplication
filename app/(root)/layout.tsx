import Navbar from "../componets/Navbar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="work-font-sans">
      <Navbar />

      {children}
    </main>
  );
}
