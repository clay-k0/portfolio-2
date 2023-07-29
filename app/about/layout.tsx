import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: `about`,
    template: "%s - CLAY KING",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
