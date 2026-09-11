import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Sparkles, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/customise', label: 'Customise' },
    { to: '/journal', label: 'Journal' },
  ];

  return (
    <>
      <main className="min-h-screen pb-16 lg:pb-0 w-full overflow-x-hidden">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10 flex items-center justify-between h-14 sm:h-16">
            <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <span className="font-display text-lg sm:text-xl text-primary">Aroma</span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.3em] uppercase text-muted-foreground hidden sm:inline">Flowers Corner</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-[10px] sm:text-xs tracking-[0.15em] uppercase transition-colors ${
                    location.pathname === link.to ? 'text-primary' : 'text-foreground/60 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <a href="tel:+919923106684" className="md:hidden text-primary">
                <Phone className="w-4 h-4" />
              </a>
              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-primary p-1"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border mobile-menu-enter">
              <nav className="flex flex-col py-4 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 px-2 text-sm tracking-[0.15em] uppercase transition-colors border-b border-border/50 last:border-0 ${
                      location.pathname === link.to ? 'text-primary' : 'text-foreground/70'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </header>

        {/* Spacer for fixed header */}
        <div className="h-14 sm:h-16" />

        {children}
      </main>

      {/* Desktop sidebar - hidden on smaller screens */}
      <div className="hidden xl:flex fixed left-4 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-4">
        <a
          href="tel:+919923106684"
          className="petal-btn w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-border bg-background/90 backdrop-blur flex items-center justify-center text-primary hover:bg-secondary/30 transition-colors"
          aria-label="Call"
        >
          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </a>
        <a
          href="https://wa.me/919923106684"
          target="_blank"
          rel="noreferrer"
          className="petal-btn w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-border bg-background/90 backdrop-blur flex items-center justify-center text-primary hover:bg-secondary/30 transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </a>
        <span className="text-[8px] sm:text-[9px] tracking-[0.3em] uppercase text-muted-foreground rotate-90 whitespace-nowrap mt-2">
          Nagpur · Est 2018
        </span>
      </div>

      {/* Mobile bottom bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-background/95 backdrop-blur-md border-t border-border safe-area-bottom">
        <div className="grid grid-cols-3 divide-x divide-border">
          <a href="tel:+919923106684" className="petal-btn flex flex-col items-center justify-center py-2 sm:py-2.5 text-primary">
            <Phone className="w-4 h-4" />
            <span className="text-[9px] sm:text-[10px] mt-0.5">Call</span>
          </a>
          <a href="https://wa.me/919923106684" target="_blank" rel="noreferrer" className="petal-btn flex flex-col items-center justify-center py-2 sm:py-2.5 text-primary">
            <MessageCircle className="w-4 h-4" />
            <span className="text-[9px] sm:text-[10px] mt-0.5">WhatsApp</span>
          </a>
          <Link to="/customise" className="petal-btn flex flex-col items-center justify-center py-2 sm:py-2.5 text-primary">
            <Sparkles className="w-4 h-4" />
            <span className="text-[9px] sm:text-[10px] mt-0.5">Customise</span>
          </Link>
        </div>
      </div>
    </>
  );
}
