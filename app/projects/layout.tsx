import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: `projects`,
    template: "clay-k0 • %s",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative min-h-screen bg-gradient-to-tl from-custom-blue via-custom-blue to-custom-blue'>
      {children}
    </div>
  );
}
