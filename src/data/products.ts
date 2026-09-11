export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  plate: string;
  category: string;
  description?: string;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'sage-blush-bridal-bouquet',
    name: 'Sage & Blush Bridal Bouquet',
    price: 2799,
    image: 'https://image.qwenlm.ai/generated-images/3cf0bc76-4f84-4966-b859-7ed52935c40e/_result.png',
    plate: 'Plate 01',
    category: 'bouquets',
    description: 'Each stem is sourced at first light and composed by hand in our Nagpur atelier. A keepsake of a moment, wrapped like a gift.'
  },
  {
    id: '2',
    slug: 'celebration-birthday-bouquet',
    name: 'Celebration Birthday Bouquet',
    price: 1299,
    image: 'https://image.qwenlm.ai/generated-images/5bcd639f-3fae-4524-a7df-bdc0073ea075/_result.png',
    plate: 'Plate 02',
    category: 'bouquets'
  },
  {
    id: '3',
    slug: 'pastel-dream-baby-shower-arrangement',
    name: 'Pastel Dream Baby Shower Arrangement',
    price: 1799,
    image: 'https://image.qwenlm.ai/generated-images/626b9678-64d0-49c3-9782-e01d47d8a039/_result.png',
    plate: 'Plate 03',
    category: 'bouquets'
  },
  {
    id: '4',
    slug: 'mandap-majesty-decor',
    name: 'Mandap Majesty Décor',
    price: 12999,
    image: 'https://image.qwenlm.ai/generated-images/f1fec2c1-f542-4b40-9ad2-9ef569bee7ea/_result.png',
    plate: 'Plate 04',
    category: 'decor'
  },
  {
    id: '5',
    slug: 'jasmine-floral-jewellery-set',
    name: 'Jasmine Floral Jewellery Set',
    price: 1999,
    image: 'https://image.qwenlm.ai/generated-images/c0df7432-e0ac-4f8c-b5bd-93f7de42da30/_result.png',
    plate: 'Plate 05',
    category: 'jewellery'
  },
  {
    id: '6',
    slug: 'atelier-hand-tied-posy',
    name: 'Atelier Hand-Tied Posy',
    price: 1499,
    originalPrice: 1899,
    image: 'https://image.qwenlm.ai/generated-images/ac3faa09-125b-4225-8063-3f8a21829b1e/_result.png',
    plate: 'Plate 06',
    category: 'bouquets'
  },
  {
    id: '7',
    slug: 'marigold-rose-varmala',
    name: 'Marigold & Rose Varmala',
    price: 3499,
    image: 'https://image.qwenlm.ai/generated-images/3f754a0b-91e0-47ba-b82a-cbaf6642cd88/_result.png',
    plate: 'Plate 07',
    category: 'varmalas'
  },
  {
    id: '8',
    slug: 'the-blush-garden-rose-bouquet',
    name: 'The Blush Garden Rose Bouquet',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1457089328389-e5d2a5aeeb6c?w=800&q=80',
    plate: 'Plate 08',
    category: 'bouquets'
  }
];

export const bouquets = products.filter(p => p.category === 'bouquets');
export const varmalas = products.filter(p => p.category === 'varmalas');
export const jewellery = products.filter(p => p.category === 'jewellery');
export const decor = products.filter(p => p.category === 'decor');

export const testimonials = [
  {
    text: '"The floral jewellery was delicate and dreamy. Our photos turned out like a magazine."',
    author: 'Priya M.',
    occasion: 'Baby Shower'
  },
  {
    text: '"Kirti understood exactly what we wanted for our wedding mandap. Every guest complimented the flowers."',
    author: 'Ananya & Rohan',
    occasion: 'Wedding'
  },
  {
    text: '"The bouquet arrived fresh, beautifully wrapped, and my mother cried happy tears."',
    author: 'Sneha K.',
    occasion: 'Anniversary'
  },
  {
    text: '"We order from Aroma for every festival now. The Ganesh Chaturthi arrangements are always stunning."',
    author: 'Deshmukh Family',
    occasion: 'Festival'
  },
  {
    text: '"The varmala was exactly what we envisioned — traditional yet fresh. Worth every rupee."',
    author: 'Meera & Arjun',
    occasion: 'Wedding'
  },
  {
    text: '"Quick delivery, gorgeous presentation, and the flowers lasted over a week!"',
    author: 'Rahul T.',
    occasion: 'Birthday'
  }
];

export const blooms = [
  { name: 'Sunflower', price: 90, color: '#e8c25a', colors: [{ name: 'Yellow', color: '#e8c25a' }] },
  { name: 'Tulip', price: 200, color: '#7a1f2b', colors: [{ name: 'Red', color: '#7a1f2b' }, { name: 'Yellow', color: '#e8c25a' }, { name: 'White', color: '#faf7f2' }, { name: 'Mixed', color: '#c97a8a' }], premium: 1500 },
  { name: 'Lotus', price: 150, color: '#ebcbcb', colors: [{ name: 'Blush Pink', color: '#ebcbcb' }, { name: 'White', color: '#faf7f2' }] },
  { name: 'Ixora', price: 40, color: '#7a1f2b', colors: [{ name: 'Red', color: '#7a1f2b' }, { name: 'Mixed', color: '#c97a8a' }] },
  { name: 'Local / Seasonal Flowers', price: 50, color: '#c97a8a', colors: [{ name: 'Mixed', color: '#c97a8a' }] },
  { name: 'Garden Rose', price: 120, color: '#ebcbcb', colors: [{ name: 'Blush Pink', color: '#ebcbcb' }, { name: 'Red', color: '#7a1f2b' }, { name: 'White', color: '#faf7f2' }, { name: 'Peach', color: '#e8b89a' }, { name: 'Mixed', color: '#c97a8a' }] },
  { name: 'Red Rose', price: 100, color: '#7a1f2b', colors: [{ name: 'Red', color: '#7a1f2b' }] },
  { name: 'Pink Rose', price: 100, color: '#ebcbcb', colors: [{ name: 'Blush Pink', color: '#ebcbcb' }] },
  { name: 'White Lily', price: 140, color: '#faf7f2', colors: [{ name: 'White', color: '#faf7f2' }] },
  { name: 'Marigold', price: 60, color: '#e8c25a', colors: [{ name: 'Yellow', color: '#e8c25a' }] },
  { name: 'Yellow Gerbera', price: 70, color: '#e8c25a', colors: [{ name: 'Yellow', color: '#e8c25a' }] },
  { name: 'Peach Carnation', price: 80, color: '#e8b89a', colors: [{ name: 'Peach', color: '#e8b89a' }] },
  { name: 'Carnation', price: 80, color: '#ebcbcb', colors: [{ name: 'Blush Pink', color: '#ebcbcb' }, { name: 'Red', color: '#7a1f2b' }, { name: 'White', color: '#faf7f2' }, { name: 'Yellow', color: '#e8c25a' }, { name: 'Peach', color: '#e8b89a' }, { name: 'Mixed', color: '#c97a8a' }] },
  { name: 'Orchid', price: 220, color: '#7b5a8c', colors: [{ name: 'Purple', color: '#7b5a8c' }, { name: 'White', color: '#faf7f2' }, { name: 'Mixed', color: '#c97a8a' }], premium: 700 },
  { name: 'Chrysanthemum', price: 60, color: '#e8c25a', colors: [{ name: 'Yellow', color: '#e8c25a' }, { name: 'White', color: '#faf7f2' }, { name: 'Mixed', color: '#c97a8a' }] },
  { name: 'Tuberose (Rajnigandha)', price: 90, color: '#faf7f2', colors: [{ name: 'White', color: '#faf7f2' }] },
  { name: 'Jasmine (Mogra)', price: 35, color: '#faf7f2', colors: [{ name: 'White', color: '#faf7f2' }] },
  { name: 'Gladiolus', price: 110, color: '#7a1f2b', colors: [{ name: 'Red', color: '#7a1f2b' }, { name: 'Blush Pink', color: '#ebcbcb' }, { name: 'White', color: '#faf7f2' }, { name: 'Mixed', color: '#c97a8a' }] },
  { name: 'Anthurium', price: 180, color: '#7a1f2b', colors: [{ name: 'Red', color: '#7a1f2b' }, { name: 'White', color: '#faf7f2' }], premium: 1000 },
  { name: 'Bird of Paradise', price: 260, color: '#c97a8a', colors: [{ name: 'Mixed', color: '#c97a8a' }], premium: 1500 },
  { name: 'Hydrangea', price: 240, color: '#ebcbcb', colors: [{ name: 'Blush Pink', color: '#ebcbcb' }, { name: 'Purple', color: '#7b5a8c' }, { name: 'White', color: '#faf7f2' }], premium: 1500 },
  { name: 'Peony', price: 300, color: '#ebcbcb', colors: [{ name: 'Blush Pink', color: '#ebcbcb' }, { name: 'White', color: '#faf7f2' }], premium: 2000 },
];

export const occasions = [
  { name: 'Wedding', subtitle: 'Varmalas · Bridal · Mandap' },
  { name: 'Baby Shower', subtitle: 'Floral Jewellery · Décor' },
  { name: 'Birthday', subtitle: 'Everyday Joy' },
  { name: 'Anniversary', subtitle: 'Romance' },
  { name: 'Ganesh Chaturthi', subtitle: 'Festival' },
  { name: 'Mahalakshmi Puja', subtitle: 'Festival' },
  { name: 'Navratri', subtitle: 'Festival' },
  { name: 'Welcome / Inauguration', subtitle: 'Corporate · Entrance' },
  { name: 'Sympathy', subtitle: 'Condolence' },
  { name: 'Just Because', subtitle: 'Everyday' },
];

export const budgets = [100, 150, 200, 300, 400, 500, 700, 1000, 1500, 2000, 3000];

export const compositionTypes = [
  'Hand-Tied Bouquet',
  'Flower Basket',
  'Varmala',
  'Floral Jewellery',
  'Event Décor'
];
