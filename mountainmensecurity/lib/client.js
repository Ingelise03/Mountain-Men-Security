import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export const client = sanityClient({
    projectId: 'nwwws2wk',
    dataset: 'production',
    apiVersion: '2022-10-28',
    useCdn: true,
    token: 'skomkrpvia8rHyW0HS9HT1U3ZIAUFS8TiA9meGvah4mEStWYeHxEGAbWJufHYUaYuBONbl3KznzV1OZEEcW9dcaANKeHf00tQznS7b8KwBG6trHLBrBXJcAX3mJfJwWHhhSDFWsWrhV2isMXabSEoM0XEVopGum3ALOhGXeaH33jcSo8T8Rm',

  });
  const builder = imageUrlBuilder(client);
  client
  .fetch(`count(*)`)
  .then((data) => console.log(`Number of documents: ${data}`))
  .catch(console.error)
  export const urlFor = (source) => builder.image(source);
