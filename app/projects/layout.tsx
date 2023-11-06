import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: `projects`,
    template: "%s - clay king",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative min-h-screen bg-gradient-to-tl bg-black'>
      {children}
    </div>
  );
}
