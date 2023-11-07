import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

export const revalidate = 60;

export default async function ProjectsPage() {
  const featured = allProjects.find((project) => project.slug === "project5")!;
  const top2 = allProjects.find((project) => project.slug === "ematchi")!;
  const top3 = allProjects.find((project) => project.slug === "memento")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <div className='relative pb-16'>
      <Navigation />
      <div className='px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32'>
        <div className='max-w-2xl mx-auto lg:mx-0 pt-2'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl text-white'>
            Projects
          </h2>
          <p className='mt-4 text-zinc-400/80 font-light'>
            Here are some of the projects I've worked on.
          </p>
        </div>
        <div className='w-full h-px bg-zinc-700' />

        <div className='grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 '>
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className='relative w-full h-full p-4 md:p-8'>
                <div className='flex items-center justify-between gap-2'>
                  <div className='text-xs text-zinc-100 font-light'>
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>wip</span>
                    )}
                  </div>
                </div>

                <h2
                  id='featured-post'
                  className='mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display'
                >
                  {featured.title}
                </h2>
                <p className='mt-4 mb-5 leading-8 duration-150 text-zinc-400/80 group-hover:text-zinc-300 font-light'>
                  {featured.description}
                </p>
                <div className='bottom-4 md:bottom-8'>
                  <p className='hidden text-zinc-300 group-hover:text-zinc-50 lg:block font-light'>
                    Read More{" "}
                    <span className='arrow' aria-hidden='true'>
                      &rarr;
                    </span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className='flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 '>
            {[top2, top3].map((project) => (
              <Card key={project.slug}>
                <Article project={project} />
              </Card>
            ))}
          </div>
        </div>
        <div className='hidden w-full h-px md:block bg-zinc-700' />

        <div className='grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3'>
          <div className='grid grid-cols-1 gap-4'>
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} />
                </Card>
              ))}
          </div>
          <div className='grid grid-cols-1 gap-4'>
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} />
                </Card>
              ))}
          </div>
          <div className='grid grid-cols-1 gap-4'>
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} />
                </Card>
              ))}
          </div>
        </div>
        <div className='w-full h-px bg-zinc-700' />
      </div>
    </div>
  );
}
