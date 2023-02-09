import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export const client = sanityClient({
    projectId: 'nwwws2wk',
    dataset: 'production',
    apiVersion: '2022-10-28',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
  });
  const builder = imageUrlBuilder(client);
  client
  .fetch(`count(*)`)
  .then((data) => console.log(`Number of documents: ${data}`))
  .catch(console.error)
  export const urlFor = (source) => builder.image(source);
