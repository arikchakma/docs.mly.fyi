import { useState } from 'react';
import { cn } from '../lib/classname';

const exampleItems = [
  {
    title: 'Dashboard',
    description:
      'Beautiful <span class="font-semibold">dashboard</span> to keep track of your emails',
    image: '/images/examples/dashboard.png',
  },
  {
    title: 'Domain Management',
    image: '/images/examples/identities.png',
    description:
      'Manage your <span class="font-semibold">domains</span> and <span class="font-semibold">identities</span> easily',
  },
  {
    title: 'Domain DNS',
    image: '/images/examples/identity.png',
    description:
      'Add <span class="font-semibold">DNS records</span> to your domain to verify your domain',
  },
  {
    title: 'Email Status',
    image: '/images/examples/email.png',
    description:
      'Check the <span class="font-semibold">status</span> of your emails and see if they are delivered',
  },
  {
    title: 'API Keys',
    image: '/images/examples/keys.png',
    description:
      'Generate <span class="font-semibold">API keys</span> to use the API and send emails',
  },
  {
    title: 'Invite Members',
    image: '/images/examples/members.png',
    description:
      'Invite <span class="font-semibold">members</span> to your organization to work together',
  },
];

export function Examples() {
  const [hasViewed, setHasViewed] = useState<number[]>([0]);
  const [activeItem, setActiveItem] = useState(exampleItems[0]);

  return (
    <>
      <h2 className="mb-3 text-4xl font-bold md:mb-4 md:text-5xl lg:mb-6 lg:text-6xl">
        How it works
      </h2>
      <p className="text-base leading-6 text-black md:text-xl lg:text-2xl">
        Here are just a few examples; find more{' '}
        <a
          className="text-black underline underline-offset-4"
          href="/docs/installation"
        >
          in the documentation
        </a>
        .
      </p>

      <ul className="mt-6 flex items-center gap-1.5">
        {exampleItems.map((item, counter) => {
          const isActive = activeItem === item;
          const hasAlreadyViewed = hasViewed.includes(counter);

          if (!isActive) {
            return (
              <li key={item.title} className="flex items-center justify-center">
                <button
                  aria-label={`View ${item.title}`}
                  onClick={() => {
                    setHasViewed([...hasViewed, counter]);
                    setActiveItem(item);
                  }}
                  className={cn(
                    'h-3.5 w-3.5 rounded-full bg-gray-300 hover:bg-gray-400',
                    !hasAlreadyViewed && 'animate-pulse',
                  )}
                />
              </li>
            );
          }

          return (
            <li key={item.title}>
              <button className="rounded-full bg-black px-3 py-0.5 text-sm text-white">
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>

      {activeItem ? (
        <div className="mt-4 overflow-hidden rounded-xl border-4 border-black">
          {activeItem?.description ? (
            <p
              className="p-3 text-base text-black"
              dangerouslySetInnerHTML={{ __html: activeItem.description }}
            />
          ) : null}
          {activeItem.image ? (
            <figure className="">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                // @ts-ignore
                fetchpriority="high"
              />
            </figure>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
