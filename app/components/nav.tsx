"use client";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/util/cn";

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  const pathname = usePathname();

  const routes = [
    {
      href: `/projects`,
      label: "projects",
      active: pathname === `/projects`,
    },
    {
      href: `/about`,
      label: "about",
      active: pathname === `/about`,
    },
    {
      href: `/contact`,
      label: "contact",
      active: pathname === `/contact`,
    },
  ];

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500 border-zinc-800 "
        }`}
      >
        <div className='container flex flex-row-reverse items-center justify-between p-6 mx-auto'>
          <div className='flex justify-between gap-8'>
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "duration-200 text-zinc-400 hover:text-zinc-100/90",
                  route.active ? "text-zinc-100" : "text-zinc-400"
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>

          <Link
            href='/'
            className='duration-200 text-zinc-300 hover:text-zinc-100'
          >
            <ArrowLeft className='w-6 h-6' />
          </Link>
        </div>
      </div>
    </header>
  );
};
