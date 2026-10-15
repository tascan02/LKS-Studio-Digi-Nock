export const siteConfig = {
  name: 'LKS Studio',
  logo: '/images/lks-studio-logo.jpg',
  phone: '+91 89205 47605',
  phoneInternational: '+918920547605',
  whatsappNumber: '918920547605',
  email: 'lksstudioservice@gmail.com',
  address: 'R-96, Lane-4, Ramesh Park, Laxmi Nagar, Delhi-92',
  defaultEnquiry:
    'Hello LKS Studio, I would like to know more about your apparel collections and wholesale manufacturing services.',
}
// All supplied photo paths, descriptions, and collection galleries live here.
// Keep the local illustrations as fallbacks; Plazo is awaiting a supplied photo.
function productPhoto(filename, alt, category) {
  return {
    src: `/images/products/${filename}.jpg`,
    alt,
    fallback: `/images/placeholders/${category}.svg`,
    isPlaceholder: false,
    position: 'center top',
  }
}

const photos = {
  pink: productPhoto(
    'pink-bow-top',
    'Model wearing a pink long-sleeve top with bow detailing',
    'tops',
  ),
  lavender: productPhoto(
    'lavender-square-neck-top',
    'Model wearing a lavender square-neck top with decorative trim',
    'tops',
  ),
  taupe: productPhoto(
    'taupe-square-neck-top',
    'Model wearing a taupe short-sleeve square-neck top',
    'tops',
  ),
  mauve: productPhoto(
    'mauve-zip-top',
    'Model wearing a mauve long-sleeve zip-neck top',
    'tops',
  ),
  rust: productPhoto(
    'rust-cherry-top',
    'Model wearing a rust long-sleeve cherry graphic top',
    'tops',
  ),
  pinkDetails: productPhoto(
    'pink-bow-top-details',
    'Pink bow-detail top collection sheet with garment close-ups',
    'tops',
  ),
  lavenderDetails: productPhoto(
    'lavender-top-details',
    'Lavender square-neck top collection sheet with garment close-ups',
    'tops',
  ),
  taupeDetails: productPhoto(
    'taupe-top-details',
    'Taupe square-neck top collection sheet with garment close-ups',
    'tops',
  ),
  mauveDetails: productPhoto(
    'mauve-zip-top-details',
    'Mauve zip-neck top collection sheet with garment close-ups',
    'tops',
  ),
  limeDetails: productPhoto(
    'lime-camisole-details',
    'Lime Brooklyn camisole collection sheet with front, back, and detail views',
    'tops',
  ),
  blackDetails: productPhoto(
    'black-bow-top-details',
    'Black bow-detail top collection sheet with garment close-ups',
    'tops',
  ),
  brooklyn: productPhoto(
    'black-brooklyn-top',
    'Model wearing a black long-sleeve Brooklyn graphic T-shirt',
    'tshirts',
  ),
  white: productPhoto(
    'white-graphic-top',
    'Model wearing a white long-sleeve graphic T-shirt',
    'tshirts',
  ),
  red: productPhoto(
    'red-varsity-top',
    'Model wearing a red V-neck varsity-style T-shirt',
    'tshirts',
  ),
  brooklynDetails: productPhoto(
    'black-brooklyn-top-details',
    'Black Brooklyn T-shirt collection sheet with garment close-ups',
    'tshirts',
  ),
  whiteDetails: productPhoto(
    'white-graphic-top-details',
    'White graphic T-shirt collection sheet with garment close-ups',
    'tshirts',
  ),
  redDetails: productPhoto(
    'red-varsity-top-details',
    'Red varsity T-shirt collection sheet with garment close-ups',
    'tshirts',
  ),
  bear: productPhoto(
    'kids-bear-outfit',
    'Upcoming children’s bear-themed brown overalls with a cream top and hat',
    'kids',
  ),
  dresses: productPhoto(
    'kids-dresses',
    'Upcoming children’s dresses arranged on a clothing rail',
    'kids',
  ),
  neutral: productPhoto(
    'kids-neutral-outfits',
    'Upcoming baby clothing sets in cream, stripes, and brown',
    'kids',
  ),
  denim: productPhoto(
    'kids-denim-overalls',
    'Upcoming children’s denim overalls with floral details and a green T-shirt',
    'kids',
  ),
  blue: productPhoto(
    'kids-blue-set',
    'Upcoming children’s blue embroidered top and matching bottoms',
    'kids',
  ),
  hoodie: productPhoto(
    'kids-grey-hoodie',
    'Upcoming children’s grey Brooklyn hoodie outfit',
    'kids',
  ),
}

export const siteImages = {
  hero: {
    ...photos.taupe,
    fallback: '/images/placeholders/hero.svg',
    position: '50% 10%',
  },
  about: {
    ...photos.mauve,
    fallback: '/images/placeholders/about.svg',
    position: '50% 12%',
  },
  collections: {
    tops: photos.pink,
    tshirts: photos.brooklyn,
    plazo: {
      src: '/images/plazo.jpg',
      fallback: '/images/placeholders/plazo.svg',
      alt: 'Illustrated wide-leg plazo silhouette',
      isPlaceholder: true,
    },
    kids: photos.bear,
  },
}

export const collectionGalleries = {
  tops: [
    photos.pink,
    photos.lavender,
    photos.taupe,
    photos.mauve,
    photos.rust,
    photos.pinkDetails,
    photos.lavenderDetails,
    photos.taupeDetails,
    photos.mauveDetails,
    photos.limeDetails,
    photos.blackDetails,
  ],
  tshirts: [
    photos.brooklyn,
    photos.white,
    photos.red,
    photos.brooklynDetails,
    photos.whiteDetails,
    photos.redDetails,
  ],
  kids: [
    photos.bear,
    photos.dresses,
    photos.neutral,
    photos.denim,
    photos.blue,
    photos.hoodie,
  ],
}

export const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'collections', label: 'Collections' },
  { id: 'why-choose-us', label: 'Why Choose Us' },
  { id: 'about', label: 'About Us' },
  { id: 'contact', label: 'Contact Us' },
]
