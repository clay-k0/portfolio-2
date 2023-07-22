import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: `about`,
    template: "clay-k0 • %s",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
