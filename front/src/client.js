import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '24n790x1',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:'skuzYHknV1GRlz02dmy6SSoaSSMSKXPrO9KW7CAcER5LmaewDtrHu8M29nbyTAHvz3JTxI5YZAT6CYe3D6VlfzZMVhMiWFk65uGd27Mvwxk2aeMTM5Jf6maZlyg1qwxNCmLhHA0ulvhaAdtTAqR3iRCrdpFtsD6OhIFPoeyYGCPy5ANvbDhe',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
