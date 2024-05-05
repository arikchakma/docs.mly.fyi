import { type CollectionEntry, getCollection } from 'astro:content';

export async function getAllGuides(): Promise<CollectionEntry<'guides'>[]> {
  const allGuides: CollectionEntry<'guides'>[] = await getCollection('guides');
  const sortedGuides = allGuides.sort((a, b) => a.data.sort - b.data.sort);
  return sortedGuides;
}
