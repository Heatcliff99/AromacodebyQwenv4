import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';

const categories = [
  {
    title: 'Hand-Tied Bouquets',
    description: 'Composed by hand, wrapped like a gift — for every day and every milestone.',
    category: 'bouquets'
  },
  {
    title: 'Varmalas',
    description: 'Wedding garlands of marigold and rose, woven for the day you remember forever.',
    category: 'varmalas'
  },
  {
    title: 'Floral Jewellery',
    description: 'Hair flowers, hasta phools, maang tikkas — delicate blooms to wear.',
    category: 'jewellery'
  },
  {
    title: 'Event Décor',
    description: 'Mandap, entrance, stage and car décor — grand florals for grand occasions.',
    category: 'decor'
  }
];

export default function Occasions() {
  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-10 pt-12 lg:pt-16 w-full overflow-x-hidden">
      {/* Header */}
      <div className="text-center mb-12 lg:mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Shop by Occasion</p>
        <h1 className="font-display text-4xl lg:text-5xl text-primary">Find the perfect arrangement</h1>
        <p className="mt-4 text-foreground/60 max-w-lg mx-auto">
          From weddings to everyday joy — explore our collections curated for every moment.
        </p>
      </div>

      {/* Categories */}
      {categories.map((cat, idx) => {
        const categoryProducts = products.filter(p => p.category === cat.category);
        return (
          <section key={cat.title} className="py-10 sm:py-16 lg:py-20 border-b border-border last:border-0">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  Section {String.fromCharCode(65 + idx)}
                </p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary">{cat.title}</h2>
                <p className="mt-2 text-foreground/60 max-w-xl">{cat.description}</p>
              </div>
              <Link
                to="/customise"
                className="inline-flex items-center gap-2 text-sm text-primary border-b border-primary pb-0.5 hover:gap-3 transition-all self-start sm:self-end"
              >
                Customise {cat.title} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-x-6 sm:gap-y-10">
              {categoryProducts.map((product, i) => (
                <Link key={product.id} to="/customise" className="group block">
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
                      Plate {String(i + 1).padStart(2, '0')}
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
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">Don't see what you need?</h2>
        <p className="text-foreground/60 max-w-lg mx-auto mb-8">
          We compose everything by hand. Tell us your vision and we'll bring it to life.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/customise"
            className="petal-btn bg-primary text-primary-foreground px-7 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-primary/90"
          >
            Build a Custom Bouquet
          </Link>
          <Link
            to="/contact"
            className="petal-btn border border-primary text-primary px-7 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Send an Enquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
