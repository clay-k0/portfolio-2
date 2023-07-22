"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from "next/image";

export default function About() {
  return (
    <div className='bg-gradient-to-tl from-custom-blue via-custom-blue to-custom-blue'>
      <Navigation />
      <div className='container flex items-center justify-center min-h-screen px-4 mx-auto max-w-5xl'>
        <div className='mt-20 pb-4 lg:mt-0 lg:pb-0'>
          <Card>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 bg-custom-blue'>
              <div className='relative flex items-center'>
                <Image
                  src='/me.jpg'
                  width={500}
                  height={500}
                  alt='image of me'
                  className='object-cover w-full h-full lg:border-r lg:border-zinc-600'
                />
              </div>
              <div className='relative flex flex-col justify-center px-6 py-10 bg-custom-blue'>
                <div className='flex items-center mb-4'>
                  <h2 className='text-2xl font-bold text-zinc-200 mr-4'>
                    about
                  </h2>
                  <hr className='border-t border-zinc-600 flex-grow' />
                </div>
                <div className='relative'>
                  <p className='text-zinc-400 mb-6'>
                    hey there! i'm clayton, a 20 year old computer science
                    student who is also learning web development. i'm just about
                    a semester away from being a junior at old dominion
                    university, and i'm passionate about learning new
                    technologies and building projects that solve real-world
                    problems. when it comes to libraries/frameworks, i'm most
                    familiar with react and next.js, but i'm currently learning
                    svelte and sveltekit. outside of programming, i enjoy
                    listening to music, collecting vinyl, spending time with
                    family and friends, and cycling outside. if you ever want to
                    reach out or just chat, head to the{" "}
                    <Link
                      className='text-white hover:underline'
                      href='/contact'
                    >
                      contact
                    </Link>{" "}
                    section to send me an email; i'm always looking for new
                    opportunities to learn and grow as a developer.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
