import Header from "@/app/components/main/main.header";
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
  return <>{children}</>;
}
