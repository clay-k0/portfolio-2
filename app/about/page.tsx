"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import Image from "next/image";

export default function About() {
  return (
    <div className='bg-black'>
      <Navigation />
      <div className='container flex items-center justify-center min-h-screen px-4 mx-auto max-w-5xl'>
        <div className='mt-20 pb-4 lg:mt-0 lg:pb-0'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-1 bg-black'>
            <div className='relative flex items-center max-w-2xl mx-auto'>
              <Image
                src='/me.jpg'
                width={415}
                height={415}
                alt='image of me'
                className='rounded-full'
              />
            </div>
            <div className='relative flex flex-col justify-center px-6 py-10 bg-black'>
              <div className='flex items-center mb-4'>
                <h2 className='text-2xl font-bold text-zinc-200 mr-4'>
                  clayton king
                  <span className='text-zinc-500 text-xl font-medium ml-4'>
                    he/him
                  </span>
                </h2>
                <hr className='border-t border-zinc-700 flex-grow' />
              </div>
              <div className='relative'>
                <p className='text-zinc-400/80 mb-6 font-light'>
                  hey there! i'm clayton, but you can call me clay. i'm a 20
                  year old computer science student learning web development in
                  my free time. i'm almost a junior at old dominion university,
                  and i'm passionate about learning new tech and building things
                  that solve real world problems. when it comes to
                  libraries/frameworks, i'm most familiar with react and
                  next.js, but i'm currently learning svelte and sveltekit.
                  outside of programming, i enjoy listening to music, collecting
                  vinyl, spending time with family and friends, and cycling
                  outdoors. if you ever want to reach out or just chat, head to
                  the{" "}
                  <Link className='text-white hover:underline' href='/contact'>
                    contact
                  </Link>{" "}
                  page to send me an email; i'm always looking for opportunities
                  to learn and grow as a developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
