import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'megandowdell', // ✅ Use your actual Sanity project ID (yours should be 'megandowdell')
  dataset: 'production',
  apiVersion: '2024-01-01', // ✅ Use today's date
  useCdn: true, // ✅ Caches the content for faster load times
});

export interface GalleryItem {
  title: string;
  imageUrl: string;
  category: string;
  tags: string[];
}

export const fetchGallery = async (): Promise<GalleryItem[]> => {
  const data = await client.fetch(`*[_type == "gallery"]{
    title,
    "imageUrl": image.asset->url,
    category,
    tags
  }`);
  return data;
};
