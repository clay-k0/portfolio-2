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
    <div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl bg-black/10'>
      <nav className='my-16 animate-fade-in'>
        <ul className='flex items-center justify-center gap-6'>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-sm duration-500 text-zinc-400/80 hover:text-accent font-light'
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      {/* <Particles
        className='absolute inset-0 -z-10 animate-fade-in'
        quantity={100}
      /> */}
      <div className='hidden w-screen h-px md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
      <h1 className='z-10 pb-4 text-5xl text-transparent duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text bg-gradient-to-tr from-white via-slate-300 to-white'>
        clay king
      </h1>
      <div className='hidden w-screen h-px md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
      <div className='my-14 text-center animate-fade-in'>
        <h2 className='text-sm text-zinc-400/80 font-light'>
          hello, i'm clay, a computer science student
          <br />
          and aspiring web developer.
        </h2>
      </div>
    </div>
  );
}
