"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from "next/image";

export default function About() {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setShouldRender(screenWidth >= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0'>
      <Navigation />
      <div className='container flex items-center justify-center min-h-screen px-4 mx-auto max-w-5xl'>
        <Card>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {shouldRender && (
              <div className='relative flex items-center'>
                <Image
                  src='/me.jpg'
                  width={500}
                  height={500}
                  alt='me'
                  className='object-cover w-full h-full border-r border-zinc-600'
                />
              </div>
            )}
            <div className='relative flex flex-col justify-center px-6 py-10'>
              <div className='flex items-center mb-4'>
                <h2 className='text-2xl font-bold text-zinc-200 mr-4'>about</h2>
                <hr className='border-t border-zinc-600 flex-grow' />
              </div>
              <div className='relative'>
                <p className='text-zinc-400 mb-6'>
                  hey there! i'm clayton, a 20 year old computer science student
                  who is also learning web development. i'm currently a
                  sophomore at tidewater community college with one semester
                  left before i transfer to old dominion university. i'm
                  passionate about learning new technologies and building
                  projects that solve real-world problems. when it comes to
                  libraries/frameworks, i mainly use react and next.js, but i'm
                  currently learning svelte and sveltekit. in my free time, i
                  enjoy listening to music, collecting vinyl, spending time with
                  family and friends, cycling outdoors, and coding. feel free to
                  head to the{" "}
                  <Link
                    className='text-zinc-100 hover:underline'
                    href='/contact'
                  >
                    contact
                  </Link>{" "}
                  section and reach out to me; i'm always looking for new
                  opportunities to learn and grow as a developer.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
