import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Sparkles, X, Clock } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/customise', label: 'Customise' },
    { to: '/journal', label: 'Journal' },
    { to: '/occasions', label: 'Occasions' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <main className="min-h-screen pb-16 lg:pb-0">
        {/* Hamburger Menu Button - Top Right */}
        <button
          onClick={() => setMenuOpen(true)}
          className="fixed top-5 right-5 z-50 w-11 h-11 rounded-full border border-border bg-background/90 backdrop-blur flex items-center justify-center text-primary hover:bg-secondary/30 transition-colors"
          aria-label="Open menu"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>

        {/* Full-screen Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-md flex flex-col">
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full border border-border bg-background flex items-center justify-center text-primary hover:bg-secondary/30 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Menu Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-6">
              {/* Brand */}
              <Link to="/" onClick={() => setMenuOpen(false)} className="mb-10 text-center">
                <span className="font-display text-3xl text-primary">Aroma</span>
                <p className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground mt-1">Flowers Corner</p>
              </Link>

              {/* Navigation Links */}
              <nav className="flex flex-col items-center gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={`font-display text-2xl sm:text-3xl transition-colors ${
                      location.pathname === link.to ? 'text-primary' : 'text-foreground/60 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Bottom info */}
              <div className="mt-12 flex flex-col items-center gap-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Open daily · 9 AM – 10 PM</span>
                </div>
                <p className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground">
                  Nagpur · Est 2018
                </p>
              </div>
            </div>
          </div>
        )}

        {children}

        {/* Footer - simple, matching original style */}
        <footer className="border-t border-border mt-0">
          <div className="mx-auto max-w-7xl px-5 lg:px-10 py-8 lg:py-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                <span>Open daily · 9:00 AM – 10:00 PM</span>
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                © 2024 Aroma Flowers Corner · Nagpur · Women-owned · Est 2018
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
