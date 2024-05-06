import { useState } from 'react';
import type { CollectionEntry } from 'astro:content';
import { ArrowUpRight, Github } from 'lucide-react';

type DocsHeaderProps = {
  guides: CollectionEntry<'guides'>[];
  activeGuideSlug: string;
};

export function DocsHeader(props: DocsHeaderProps) {
  const { guides, activeGuideSlug } = props;
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between border-b">
        <div className="flex justify-end px-6 py-3 text-right">
          <a
            href="/"
            className="flex items-center justify-end text-xl font-bold"
          >
            <img src="/brand/icon.svg" alt="Logo" className="mr-2 h-10 w-10" />
            mly.fyi
          </a>
        </div>
        <div className="flex items-center pr-12">
          <a
            href="https://github.com/arikchakma/mly.fyi"
            target="_blank"
            className="flex h-[38px] w-[38px] items-center justify-center rounded-md hover:bg-gray-100"
          >
            <Github size="15" />
            <span className="sr-only">GitHub</span>
          </a>

          <button
            onClick={() => setIsActive(!isActive)}
            aria-label={isActive ? 'Close Menu' : 'Open Menu'}
            className="-mr-[12px] rounded-md p-[12px] hover:bg-gray-100"
          >
            <img
              src={isActive ? '/cross.svg' : '/burger.svg'}
              alt="menu"
              className="h-[14px] w-[14px]"
            />
          </button>
        </div>
      </div>
      <div
        className={`flex flex-col border-b bg-gray-50 px-6 py-6 ${isActive ? 'block' : 'hidden'}`}
      >
        {guides.map((guide) => {
          return (
            <a
              key={guide.slug}
              href={`/docs/${guide.slug}`}
              className={`${activeGuideSlug === guide.slug ? 'text-black' : 'text-gray-400'} py-1 hover:text-gray-900`}
            >
              {guide.data.title}
            </a>
          );
        })}
      </div>

      <a
        className="flex items-center justify-center gap-1.5 bg-orange-500 px-5 py-2 font-medium text-white hover:opacity-85"
        href="https://go.mly.fyi/mly-demo"
        target="_blank"
      >
        <ArrowUpRight size="16" className="stroke-[2.5px]" />
        Check Live Demo
      </a>
    </>
  );
}
