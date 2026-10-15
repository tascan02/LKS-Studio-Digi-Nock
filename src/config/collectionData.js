import { siteImages, collectionGalleries } from './siteConfig'
export const collections = [
  {
    id: 'tops',
    name: "Women's Tops",
    description:
      'Contemporary and versatile tops designed for modern everyday fashion.',
    image: siteImages.collections.tops,
    gallery: collectionGalleries.tops,
  },
  {
    id: 'tshirts',
    name: "Women's T-Shirts",
    description:
      'Comfortable, stylish T-shirts crafted with attention to quality and fit.',
    image: siteImages.collections.tshirts,
    gallery: collectionGalleries.tshirts,
  },
  {
    id: 'plazo',
    name: 'Plazo Collection',
    description:
      'Elegant and comfortable plazo styles created for effortless everyday wear.',
    image: siteImages.collections.plazo,
  },
  {
    id: 'kids',
    name: 'Kids Wear',
    description:
      'An exciting upcoming collection for infants and children up to 15 years of age.',
    image: siteImages.collections.kids,
    gallery: collectionGalleries.kids,
    comingSoon: true,
  },
]
