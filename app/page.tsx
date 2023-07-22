import Link from "next/link";
import React from "react";
// import Particles from "./components/particles";

const navigation = [
  { name: "projects", href: "/projects" },
  { name: "about", href: "/about" },
  { name: "contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-custom-blue via-custom-blue to-custom-blue'>
      <nav className='my-16 animate-fade-in'>
        <ul className='flex items-center justify-center gap-6'>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-sm duration-500 text-zinc-400 hover:text-accent'
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className='hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
      {/* <Particles
        className='absolute inset-0 -z-10 animate-fade-in'
        quantity={100}
      /> */}
      <h1 className='z-10 pb-4 text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text '>
        clay-k0
      </h1>
      <div className='hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
      <div className='my-14 text-center animate-fade-in'>
        <h2 className='text-sm text-zinc-400 pointer-events-none'>
          hello, i'm clayton, a computer science student
          <br />
          and aspiring web developer.
        </h2>
      </div>
    </div>
  );
}
