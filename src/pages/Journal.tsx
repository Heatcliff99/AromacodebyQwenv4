import { Link } from 'react-router-dom';
import { Sprout, Hand, Gift, Truck } from 'lucide-react';

export default function Journal() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10 pt-8 sm:pt-12 lg:pt-16 w-full overflow-x-hidden">
      {/* Story Section */}
      <section className="grid sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center pb-12 sm:pb-20 lg:pb-24 border-b border-border">
        <div className="order-2 sm:order-1">
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
        <div className="order-1 sm:order-2">
          <div>
            <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2 sm:mb-3">Our Story · Est 2018</p>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl text-primary leading-tight mb-4 sm:mb-6">
              Women-owned, made by hand, rooted in Nagpur.
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-foreground/70 leading-relaxed">
              <p>
                Aroma Flowers Corner began in Manish Nagar in 2018, founded by Kirti with a simple belief: a bouquet is never just flowers. It is a vow, a welcome, a goodbye, a celebration — a mark of a moment that would otherwise slip away.
              </p>
              <p>
                As a women-owned atelier, every arrangement is composed by hand. Nothing is pre-made. We source the freshest blooms each morning, place each stem with intention, and wrap each bouquet like a gift.
              </p>
              <p>
                Today, from two shops — Manish Nagar and Khamla — we serve Nagpur with hand-tied bouquets, varmalas, floral jewellery and event décor, for every occasion and festival the year brings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-20 lg:py-24 border-b border-border">
        <div>
          <div className="text-center mb-8 sm:mb-14">
            <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2 sm:mb-3">How a Bloom Becomes Yours</p>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl text-primary">Four steps, one keepsake</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-3 sm:mb-5 text-primary">
                <Sprout className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1 sm:mb-2">Step 1</p>
              <h3 className="font-display text-lg sm:text-2xl text-primary mb-1 sm:mb-2">Sourced at First Light</h3>
              <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">
                We hand-pick the freshest blooms each morning from trusted growers.
              </p>
            </div>
          </div>
          <div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-3 sm:mb-5 text-primary">
                <Hand className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1 sm:mb-2">Step 2</p>
              <h3 className="font-display text-lg sm:text-2xl text-primary mb-1 sm:mb-2">Composed by Hand</h3>
              <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">
                Each stem is placed with intention — never assembled, always arranged.
              </p>
            </div>
          </div>
          <div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-3 sm:mb-5 text-primary">
                <Gift className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1 sm:mb-2">Step 3</p>
              <h3 className="font-display text-lg sm:text-2xl text-primary mb-1 sm:mb-2">Wrapped Like a Gift</h3>
              <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">
                Premium atelier wrapping and ribbon, because the first impression matters.
              </p>
            </div>
          </div>
          <div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-3 sm:mb-5 text-primary">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1 sm:mb-2">Step 4</p>
              <h3 className="font-display text-lg sm:text-2xl text-primary mb-1 sm:mb-2">Delivered with Care</h3>
              <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">
                Climate-safe delivery across Nagpur, on time, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-10 sm:py-16 lg:py-20 border-b border-border">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div>
            <h3 className="font-display text-xl sm:text-2xl text-primary mb-1 sm:mb-2">Made to Order</h3>
            <p className="text-xs sm:text-sm text-foreground/60">Nothing is pre-made. Every bouquet is composed for you.</p>
          </div>
          <div>
            <h3 className="font-display text-xl sm:text-2xl text-primary mb-1 sm:mb-2">Fully Customisable</h3>
            <p className="text-xs sm:text-sm text-foreground/60">Bloom by bloom, colour by colour — your vision, our hands.</p>
          </div>
          <div>
            <h3 className="font-display text-xl sm:text-2xl text-primary mb-1 sm:mb-2">We're a Call Away</h3>
            <p className="text-xs sm:text-sm text-foreground/60">Speak to Kirti directly, any day, 9 AM to 10 PM.</p>
          </div>
        </div>
      </section>

      {/* Journal Articles */}
      <section className="py-12 sm:py-20 lg:py-24">
        <div>
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2 sm:mb-3">From the Journal</p>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl text-primary">Seasonal notes & styling ideas</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <article className="border-t border-border pt-4 sm:pt-5">
              <p className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2 sm:mb-3">Flower Care</p>
              <h3 className="font-display text-xl sm:text-2xl text-primary mb-2 sm:mb-3 leading-tight">Caring for Your Cut Blooms</h3>
              <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed mb-3 sm:mb-4">
                Five small rituals to keep your bouquet alive a day longer — from the first trim to the nightly water change.
              </p>
              <span className="text-xs text-primary border-b border-primary pb-0.5">Read more</span>
            </article>
          </div>
          <div>
            <article className="border-t border-border pt-4 sm:pt-5">
              <p className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2 sm:mb-3">Festival Styling</p>
              <h3 className="font-display text-xl sm:text-2xl text-primary mb-2 sm:mb-3 leading-tight">Styling Marigolds for Ganesh Chaturthi</h3>
              <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed mb-3 sm:mb-4">
                How we layer saffron and gold to frame the idol — a styling note from Kirti.
              </p>
              <span className="text-xs text-primary border-b border-primary pb-0.5">Read more</span>
            </article>
          </div>
          <div>
            <article className="border-t border-border pt-4 sm:pt-5">
              <p className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2 sm:mb-3">Weddings</p>
              <h3 className="font-display text-xl sm:text-2xl text-primary mb-2 sm:mb-3 leading-tight">The Varmala, Reimagined</h3>
              <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed mb-3 sm:mb-4">
                A modern take on the wedding garland — why we mix rose and jasmine with tradition.
              </p>
              <span className="text-xs text-primary border-b border-primary pb-0.5">Read more</span>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div>
        <div className="text-center py-6 sm:py-10">
          <Link
            to="/customise"
            className="petal-btn bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-[10px] sm:text-xs tracking-[0.2em] uppercase hover:bg-primary/90"
          >
            Visit Our Atelier
          </Link>
        </div>
      </div>
    </div>
  );
}
