import Header from "@/app/components/main/main.header";
import MainList from "@/app/components/main/main.list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatWork",
  description: "Welcome to ChatWork",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h ">
      <Header />
      {children}
    </div>
  );
}
