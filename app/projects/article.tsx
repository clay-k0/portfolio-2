import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";

type Props = {
  project: Project;
};

export const Article: React.FC<Props> = ({ project }) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <article className='p-4 md:p-8'>
        <div className='flex justify-between gap-2 items-center'>
          <span className='text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange font-light'>
            {project.date ? (
              <time dateTime={new Date(project.date).toISOString()}>
                {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                  new Date(project.date)
                )}
              </time>
            ) : (
              <span>wip</span>
            )}
          </span>
        </div>
        <h2 className='z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display'>
          {project.title}
        </h2>
        <p className='z-20 mt-4 text-sm  duration-1000 text-zinc-400/80 group-hover:text-zinc-200 font-light'>
          {project.description}
        </p>
      </article>
    </Link>
  );
};
