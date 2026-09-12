import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Instagram } from 'lucide-react';
import { products, testimonials } from '../data/products';

const heroSlides = [
  {
    subtitle: 'Varmalas & Wedding Garlands',
    title: 'Threads of Marigold',
    description: 'Woven for the day you remember forever. A women-owned floral atelier in Nagpur. Hand-tied bouquets, varmalas, floral jewellery and event décor — composed by hand, since 2018.',
    image: 'https://image.qwenlm.ai/generated-images/3f754a0b-91e0-47ba-b82a-cbaf6642cd88/_result.png'
  },
  {
    subtitle: 'Hand-Tied Bouquets',
    title: 'Every Stem Placed with Intention',
    description: 'Every bouquet, a keepsake. From our atelier in Nagpur to your doorstep — fresh blooms composed by hand, wrapped like a gift.',
    image: 'https://image.qwenlm.ai/generated-images/3cf0bc76-4f84-4966-b859-7ed52935c40e/_result.png'
  },
  {
    subtitle: 'Event Décor',
    title: 'Grand Florals for Grand Moments',
    description: 'Mandap, entrance, stage and car décor — we bring your vision to life, bloom by bloom.',
    image: 'https://image.qwenlm.ai/generated-images/f1fec2c1-f542-4b40-9ad2-9ef569bee7ea/_result.png'
  }
];

const instagramImages = [
  'https://image.qwenlm.ai/generated-images/c0df7432-e0ac-4f8c-b5bd-93f7de42da30/_result.png',
  'https://image.qwenlm.ai/generated-images/3f754a0b-91e0-47ba-b82a-cbaf6642cd88/_result.png',
  'https://image.qwenlm.ai/generated-images/f1fec2c1-f542-4b40-9ad2-9ef569bee7ea/_result.png',
  'https://image.qwenlm.ai/generated-images/5bcd639f-3fae-4524-a7df-bdc0073ea075/_result.png',
  'https://image.qwenlm.ai/generated-images/ac3faa09-125b-4225-8063-3f8a21829b1e/_result.png',
  'https://image.qwenlm.ai/generated-images/626b9678-64d0-49c3-9782-e01d47d8a039/_result.png',
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [currentTestimonial, setCurrentTestimonial] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const featuredProduct = products[0];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[75vh] sm:h-[80vh] min-h-[420px] sm:min-h-[500px] max-h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <span className="inline-block relative w-full h-full">
            <img
              src={heroSlides[currentSlide].image}
              loading="lazy"
              className="w-full h-full inset-0 absolute object-cover transition-opacity duration-1000"
              alt={heroSlides[currentSlide].subtitle}
            />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-background/10 sm:from-background/70 sm:via-background/30 sm:to-transparent" />
        </div>
        <div className="relative h-full mx-auto max-w-7xl px-4 sm:px-5 lg:px-10 flex items-center">
          <div className="max-w-full sm:max-w-xl lg:max-w-xl">
            <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-primary mb-3 sm:mb-5">
              {heroSlides[currentSlide].subtitle}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] sm:leading-[1.05] text-primary font-bold">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-foreground/70 max-w-md leading-relaxed">
              {heroSlides[currentSlide].description}
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
              <Link
                to="/customise"
                className="petal-btn bg-primary text-primary-foreground px-5 sm:px-7 py-3 sm:py-3.5 text-[10px] sm:text-xs tracking-[0.2em] uppercase hover:bg-primary/90"
              >
                Customise a Bouquet
              </Link>
              <Link
                to="/shop"
                className="petal-btn border border-primary text-primary px-5 sm:px-7 py-3 sm:py-3.5 text-[10px] sm:text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                View the Collection
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`h-1 transition-all duration-500 ${i === currentSlide ? 'w-6 sm:w-8 bg-primary' : 'w-2 sm:w-3 bg-primary/30'}`}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10 py-8 sm:py-12 lg:py-16">
        <div>
          <div className="text-center mb-6 sm:mb-10">
            <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">This Season's Pick</p>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl text-primary">A bloom worth the wait</h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center">
          <div>
            <Link to={`/shop`} className="group block">
              <div className="relative overflow-hidden bg-muted aspect-[3/4] sm:aspect-[4/5]">
                <span className="inline-block relative w-full h-full transition-transform duration-[1200ms] ease-out group-hover:scale-105">
                  <img
                    src={featuredProduct.image}
                    loading="lazy"
                    className="w-full h-full inset-0 absolute object-cover"
                    alt={featuredProduct.name}
                  />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-background/90 font-display text-lg">₹{featuredProduct.price.toLocaleString()}.00</span>
                    <span className="text-xs tracking-[0.15em] uppercase text-background/90 border-b border-background/60 pb-0.5">Customise →</span>
                  </div>
                </div>
              </div>
              <div className="pt-3 flex items-baseline justify-between gap-2">
                <h3 className="font-display text-lg sm:text-xl leading-tight text-foreground group-hover:text-primary transition-colors">
                  {featuredProduct.name}
                </h3>
                <span className="text-sm text-muted-foreground lg:hidden">₹{featuredProduct.price.toLocaleString()}.00</span>
              </div>
            </Link>
          </div>
          <div>
            <div>
              <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 sm:mb-4">Featured</p>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-primary mb-4 sm:mb-5">{featuredProduct.name}</h3>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-6 sm:mb-8 max-w-md">
                {featuredProduct.description || 'Each stem is sourced at first light and composed by hand in our Nagpur atelier. A keepsake of a moment, wrapped like a gift.'}
              </p>
              <Link
                to="/shop"
                className="petal-btn bg-primary text-primary-foreground px-6 sm:px-7 py-3 sm:py-3.5 text-[10px] sm:text-xs tracking-[0.2em] uppercase hover:bg-primary/90"
              >
                Shop the Pick
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10 py-8 sm:py-12 lg:py-16">
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <div className="order-2 sm:order-1">
              <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2 sm:mb-3">The Season's Edit</p>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl text-primary leading-tight mb-4 sm:mb-6">
                A little corner of Nagpur where flowers become memory.
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-3 sm:mb-4">
                Aroma Flowers Corner began in Manish Nagar in 2018 — a women-owned atelier built on the belief that a bouquet is never just flowers. It is a mark of a moment: a vow, a welcome, a goodbye, a celebration.
              </p>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-6 sm:mb-8">
                Today, from two shops in Manish Nagar and Khamla, we compose every arrangement by hand — sourcing the freshest blooms, wrapping them like a gift, and delivering them with care across Nagpur.
              </p>
              <Link
                to="/journal"
                className="inline-flex items-center gap-2 text-sm text-primary border-b border-primary pb-0.5 hover:gap-3 transition-all"
              >
                Read the Artisan's Journal <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="order-1 sm:order-2">
              <div className="aspect-[4/5] overflow-hidden">
                <span className="inline-block relative w-full h-full">
                  <img
                    src="https://image.qwenlm.ai/generated-images/f5fded4c-8081-4c1a-8cfe-3010b72b4398/_result.png"
                    loading="lazy"
                    className="w-full h-full inset-0 absolute object-cover"
                    alt="The atelier"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10 py-8 sm:py-12 lg:py-16">
        <div>
          <div className="text-center mb-6 sm:mb-10">
            <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">In Season Now</p>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl text-primary">The Curated Collection</h2>
            <Link
              to="/shop"
              className="hidden sm:inline-flex items-center justify-center gap-2 text-sm text-primary hover:gap-3 transition-all mt-3"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-x-6 sm:gap-y-10">
          {products.slice(0, 8).map((product) => (
            <Link key={product.id} to="/shop" className="group block">
              <div className="relative overflow-hidden bg-muted aspect-[3/4]">
                <span className="inline-block relative w-full h-full transition-transform duration-[1200ms] ease-out group-hover:scale-105">
                  <img
                    src={product.image}
                    loading="lazy"
                    className="w-full h-full inset-0 absolute object-cover"
                    alt={product.name}
                  />
                </span>
                <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[8px] sm:text-[10px] tracking-[0.2em] uppercase text-foreground/60">
                  {product.plate}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <div className="flex items-center justify-between gap-2 sm:gap-3">
                    <span className="text-xs sm:text-sm text-background/90 font-display text-sm sm:text-lg">₹{product.price.toLocaleString()}.00</span>
                    <span className="text-[9px] sm:text-xs tracking-[0.15em] uppercase text-background/90 border-b border-background/60 pb-0.5">Customise →</span>
                  </div>
                </div>
              </div>
              <div className="pt-2 sm:pt-3 flex items-baseline justify-between gap-1 sm:gap-2">
                <h3 className="font-display text-sm sm:text-lg lg:text-xl leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <span className="text-xs sm:text-sm text-muted-foreground lg:hidden whitespace-nowrap">₹{product.price.toLocaleString()}.00</span>
              </div>

            </Link>
          ))}
        </div>
        <div className="mt-6 sm:hidden text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm text-primary border-b border-primary pb-0.5"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <span className="inline-block relative w-full h-full">
            <img
              src="https://image.qwenlm.ai/generated-images/f1fec2c1-f542-4b40-9ad2-9ef569bee7ea/_result.png"
              loading="lazy"
              className="w-full h-full inset-0 absolute object-cover"
              alt="The Petal & Stem Atelier"
            />
          </span>
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 sm:px-5 py-12 sm:py-16 lg:py-20 text-center text-primary-foreground">
          <div>
            <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-primary-foreground/70 mb-3 sm:mb-4">The Petal & Stem Atelier</p>
            <h2 className="text-center font-display text-3xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              Become the artist. Compose your own bouquet, bloom by bloom.
            </h2>
            <p className="text-sm sm:text-base text-primary-foreground/80 mb-6 sm:mb-9 max-w-xl mx-auto">
              Choose your primary blooms, your colours, your wrapping. We'll compose it by hand and deliver it across Nagpur.
            </p>
            <Link
              to="/customise"
              className="petal-btn bg-background text-primary px-6 sm:px-8 py-3 sm:py-4 text-[10px] sm:text-xs tracking-[0.2em] uppercase hover:bg-secondary/40 transition-colors"
            >
              Open the Bouquet Builder
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
}
