import { Fragment } from 'react';
import Marquee from 'react-fast-marquee';

const featureList = [
  'Monitoring Email Delivery',
  'Know Email Status',
  'MIT Licensed',
  'Written in TypeScript',
  'Easy to use',
  'Accessible',
];

export function FeatureMarquee() {
  return (
    <Marquee autoFill>
      <p className="whitespace-nowrap py-2.5 text-lg md:py-3.5 md:text-xl lg:py-4 lg:text-2xl">
        {featureList.map((featureItem, index) => (
          <Fragment key={index}>
            {featureItem}
            <span className="mx-2 md:mx-3">&middot;</span>
          </Fragment>
        ))}
      </p>
    </Marquee>
  );
}
