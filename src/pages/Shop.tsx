import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { bouquets, varmalas, jewellery, decor } from '../data/products';

interface ProductSectionProps {
  section: string;
  title: string;
  description: string;
  products: typeof bouquets;
  linkText: string;
}

function ProductSection({ section, title, description, products, linkText }: ProductSectionProps) {
  return (
    <section className="py-16 lg:py-20 border-b border-border last:border-0">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">{section}</p>
            <h2 className="font-display text-4xl lg:text-5xl text-primary">{title}</h2>
            <p className="mt-2 text-foreground/60 max-w-xl">{description}</p>
          </div>
          <Link
            to="/customise"
            className="inline-flex items-center gap-2 text-sm text-primary border-b border-primary pb-0.5 hover:gap-3 transition-all self-start sm:self-end"
          >
            {linkText} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, i) => (
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
              <span className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase text-foreground/60">
                Plate {String(i + 1).padStart(2, '0')}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-background/90 font-display text-lg">₹{product.price.toLocaleString()}.00</span>
                  <span className="text-xs tracking-[0.15em] uppercase text-background/90 border-b border-background/60 pb-0.5">Customise →</span>
                </div>
              </div>
            </div>
            <div className="pt-3 flex items-baseline justify-between gap-2">
              <h3 className="font-display text-xl leading-tight text-foreground group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <span className="text-sm text-muted-foreground lg:hidden">₹{product.price.toLocaleString()}.00</span>
            </div>
            {product.originalPrice && (
              <p className="text-xs text-muted-foreground line-through mt-0.5">₹{product.originalPrice.toLocaleString()}.00</p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function Shop() {
  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-10 pt-12 lg:pt-16">
      <ProductSection
        section="Section A"
        title="Hand-Tied Bouquets"
        description="Composed by hand, wrapped like a gift — for every day and every milestone."
        products={bouquets}
        linkText="Shop Hand-Tied Bouquets"
      />
      <ProductSection
        section="Section B"
        title="Varmalas"
        description="Wedding garlands of marigold and rose, woven for the day you remember forever."
        products={varmalas}
        linkText="Shop Varmalas"
      />
      <ProductSection
        section="Section C"
        title="Floral Jewellery"
        description="Hair flowers, hasta phools, maang tikkas — delicate blooms to wear."
        products={jewellery}
        linkText="Shop Floral Jewellery"
      />
      <ProductSection
        section="Section D"
        title="Event Décor"
        description="Mandap, entrance, stage and car décor — grand florals for grand occasions."
        products={decor}
        linkText="Shop Event Décor"
      />

      {/* CTA */}
      <section className="py-20 lg:py-24 text-center">
        <div>
          <h2 className="font-display text-4xl lg:text-5xl text-primary mb-4">Have something else in mind?</h2>
          <p className="text-foreground/60 max-w-lg mx-auto mb-8">
            Tell us your vision and we'll compose it by hand — or build it bloom by bloom in the Atelier.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/customise"
              className="petal-btn bg-primary text-primary-foreground px-7 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-primary/90"
            >
              Build a Custom Bouquet
            </Link>
            <a
              href="tel:+919923106684"
              className="petal-btn border border-primary text-primary px-7 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Send an Enquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
