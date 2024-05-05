import { z, defineCollection } from 'astro:content';

const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    sort: z.number(),
  }),
});

export const collections = {
  guides: guidesCollection,
};
