import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <>
      <main className="min-h-screen pb-16 lg:pb-0">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
          <div className="mx-auto max-w-7xl px-5 lg:px-10 flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-display text-xl text-primary">Aroma</span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground hidden sm:inline">Flowers Corner</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link 
                to="/" 
                className={`text-xs tracking-[0.15em] uppercase transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-foreground/60 hover:text-primary'}`}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className={`text-xs tracking-[0.15em] uppercase transition-colors ${location.pathname === '/shop' ? 'text-primary' : 'text-foreground/60 hover:text-primary'}`}
              >
                Shop
              </Link>
              <Link 
                to="/customise" 
                className={`text-xs tracking-[0.15em] uppercase transition-colors ${location.pathname === '/customise' ? 'text-primary' : 'text-foreground/60 hover:text-primary'}`}
              >
                Customise
              </Link>
              <Link 
                to="/journal" 
                className={`text-xs tracking-[0.15em] uppercase transition-colors ${location.pathname === '/journal' ? 'text-primary' : 'text-foreground/60 hover:text-primary'}`}
              >
                Journal
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <a href="tel:+919923106684" className="md:hidden text-primary">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </header>

        {/* Spacer for fixed header */}
        <div className="h-16" />

        {children}
      </main>

      {/* Desktop sidebar */}
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

      {/* Mobile bottom bar */}
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
