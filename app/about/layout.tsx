import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: `about`,
    template: "%s - clay king",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
