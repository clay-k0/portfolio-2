import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: `contact`,
    template: "%s - clay king",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
