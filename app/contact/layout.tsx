import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: `contact`,
    template: "clay-k0 • %s",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
