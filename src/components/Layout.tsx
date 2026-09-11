import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Sparkles, Clock } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="min-h-screen pb-16 lg:pb-0">
        {children}

        {/* Footer */}
        <footer className="border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            {/* Footer top - navigation links */}
            <div className="py-12 lg:py-16 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12">
              {/* Brand */}
              <div className="col-span-2 sm:col-span-1">
                <Link to="/" className="inline-block">
                  <span className="font-display text-2xl text-primary">Aroma</span>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground mt-1">Flowers Corner</p>
                </Link>
                <p className="mt-4 text-sm text-foreground/60 leading-relaxed max-w-xs">
                  A women-owned floral atelier in Nagpur. Composed by hand, since 2018.
                </p>
              </div>

              {/* Shop */}
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">Shop</p>
                <ul className="space-y-2.5">
                  <li><Link to="/shop" className="text-sm text-foreground/70 hover:text-primary transition-colors">All Collections</Link></li>
                  <li><Link to="/occasions" className="text-sm text-foreground/70 hover:text-primary transition-colors">Hand-Tied Bouquets</Link></li>
                  <li><Link to="/occasions" className="text-sm text-foreground/70 hover:text-primary transition-colors">Varmalas</Link></li>
                  <li><Link to="/occasions" className="text-sm text-foreground/70 hover:text-primary transition-colors">Floral Jewellery</Link></li>
                  <li><Link to="/occasions" className="text-sm text-foreground/70 hover:text-primary transition-colors">Event Décor</Link></li>
                </ul>
              </div>

              {/* Atelier */}
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">Atelier</p>
                <ul className="space-y-2.5">
                  <li><Link to="/customise" className="text-sm text-foreground/70 hover:text-primary transition-colors">Customise a Bouquet</Link></li>
                  <li><Link to="/journal" className="text-sm text-foreground/70 hover:text-primary transition-colors">Our Story</Link></li>
                  <li><Link to="/journal" className="text-sm text-foreground/70 hover:text-primary transition-colors">Artisan's Journal</Link></li>
                  <li><Link to="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">Visit Us</Link></li>
                  <li><Link to="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">Send an Enquiry</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">Contact</p>
                <ul className="space-y-2.5">
                  <li>
                    <a href="tel:+919923106684" className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5" /> +91 99231 06684
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/919923106684" target="_blank" rel="noreferrer" className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                      <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/aromaflowerscorner" target="_blank" rel="noreferrer" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                      @aromaflowerscorner
                    </a>
                  </li>
                </ul>
                <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Open daily · 9 AM – 10 PM</span>
                </div>
              </div>
            </div>

            {/* Footer bottom */}
            <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                © 2024 Aroma Flowers Corner · Nagpur
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                Women-owned · Est 2018
              </p>
            </div>
          </div>
        </footer>
      </main>

      {/* Desktop sidebar - fixed left */}
      <div className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-4">
        <a
          href="tel:+919923106684"
          className="petal-btn w-11 h-11 rounded-full border border-border bg-background/90 backdrop-blur flex items-center justify-center text-primary hover:bg-secondary/30 transition-colors"
          aria-label="Call"
        >
          <Phone className="w-4 h-4" />
        </a>
        <a
          href="https://wa.me/919923106684"
          target="_blank"
          rel="noreferrer"
          className="petal-btn w-11 h-11 rounded-full border border-border bg-background/90 backdrop-blur flex items-center justify-center text-primary hover:bg-secondary/30 transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
        <span className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground rotate-90 whitespace-nowrap mt-2">
          Nagpur · Est 2018
        </span>
      </div>

      {/* Mobile bottom bar - 3 columns (the "3-line section") */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-background/95 backdrop-blur-md border-t border-border">
        <div className="grid grid-cols-3 divide-x divide-border">
          <a href="tel:+919923106684" className="petal-btn flex flex-col items-center justify-center py-2.5 text-primary">
            <Phone className="w-4 h-4" />
            <span className="text-[10px] mt-0.5">Call</span>
          </a>
          <a href="https://wa.me/919923106684" target="_blank" rel="noreferrer" className="petal-btn flex flex-col items-center justify-center py-2.5 text-primary">
            <MessageCircle className="w-4 h-4" />
            <span className="text-[10px] mt-0.5">WhatsApp</span>
          </a>
          <Link to="/customise" className="petal-btn flex flex-col items-center justify-center py-2.5 text-primary">
            <Sparkles className="w-4 h-4" />
            <span className="text-[10px] mt-0.5">Customise</span>
          </Link>
        </div>
      </div>
    </>
  );
}
