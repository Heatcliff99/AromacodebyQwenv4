import { useState } from 'react';
import { Sparkles, Upload, Lock } from 'lucide-react';
import { occasions, budgets, compositionTypes, blooms } from '../data/products';

export default function Customise() {
  const [selectedOccasion, setSelectedOccasion] = useState<string | null>(null);
  const [selectedComposition, setSelectedComposition] = useState('Hand-Tied Bouquet');
  const [selectedBudget, setSelectedBudget] = useState(500);
  const [selectedBlooms, setSelectedBlooms] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('Primary Blooms');

  const tabs = ['Primary Blooms', 'Fillers & Leaves', 'Foliage', 'Wrapping / Base', 'Ribbon', 'Add-ons'];

  const toggleBloom = (name: string) => {
    setSelectedBlooms(prev => 
      prev.includes(name) ? prev.filter(b => b !== name) : [...prev, name]
    );
  };

  const totalPrice = selectedBlooms.reduce((sum, name) => {
    const bloom = blooms.find(b => b.name === name);
    return sum + (bloom?.price || 0);
  }, 0);

  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-10 pt-12 lg:pt-16">
      {/* Occasion Selector */}
      <section className="py-12 lg:py-16 border-b border-border">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6 text-center">
            Choose your occasion — we'll pre-load the perfect blooms
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
          {occasions.map((occasion) => (
            <div key={occasion.name}>
              <button
                className={`petal-btn group w-full text-left p-4 border transition-all bg-background ${
                  selectedOccasion === occasion.name ? 'border-primary' : 'border-border hover:border-primary'
                }`}
                onClick={() => setSelectedOccasion(occasion.name)}
              >
                <div className="w-10 h-10 rounded-full mb-3 bg-secondary/40 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <p className="font-display text-lg leading-tight">{occasion.name}</p>
                <p className="text-[10px] tracking-wide uppercase mt-1 text-muted-foreground">{occasion.subtitle}</p>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Composition & Budget */}
      <section className="py-10 lg:py-14 border-b border-border space-y-8">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center">Step 1 — What are we composing?</p>
          <div className="flex flex-wrap justify-center gap-2">
            {compositionTypes.map((type) => (
              <button
                key={type}
                className={`petal-btn px-4 py-2.5 text-xs tracking-[0.12em] uppercase border transition-all ${
                  selectedComposition === type
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border hover:border-primary'
                }`}
                onClick={() => setSelectedComposition(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center">Step 2 — Choose your budget </p>
          <div className="flex flex-wrap justify-center gap-2">
            {budgets.map((budget) => (
              <button
                key={budget}
                className={`petal-btn px-3.5 py-2 text-xs border transition-all ${
                  selectedBudget === budget
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border hover:border-primary'
                }`}
                onClick={() => setSelectedBudget(budget)}
              >
                ₹{budget >= 5000 ? `${budget / 1000}k+` : budget}
              </button>
            ))}
            <button
              className={`petal-btn px-3.5 py-2 text-xs border transition-all ${
                selectedBudget > 3000
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border hover:border-primary'
              }`}
            >
              ₹5k+
            </button>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-3">
            Higher budgets unlock premium & imported species and richer packaging.
          </p>
        </div>
      </section>

      {/* Builder */}
      <section className="py-12 lg:py-16 grid lg:grid-cols-2 gap-10 lg:gap-14">
        {/* Preview */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="bg-secondary/15 p-6 lg:p-8">
            <div className="flex items-center justify-between mb-5">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Your {selectedComposition}</p>
              <button
                className="text-xs text-muted-foreground hover:text-primary underline underline-offset-4"
                onClick={() => setSelectedBlooms([])}
              >
                Clear
              </button>
            </div>
            <div className="relative h-72 flex items-end justify-center mb-6">
              <div className="relative w-56 h-full">
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-44 h-44">
                  <div className="relative w-full h-full">
                    {selectedBlooms.length === 0 ? (
                      <div className="absolute inset-0 flex items-center justify-center text-center">
                        <p className="text-sm text-muted-foreground italic font-display text-lg">
                          Your piece awaits its first bloom
                        </p>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-2">
                        {selectedBlooms.map((name) => {
                          const bloom = blooms.find(b => b.name === name);
                          return (
                            <div
                              key={name}
                              className="w-10 h-10 rounded-full border border-border shadow-sm"
                              style={{ backgroundColor: bloom?.color }}
                              title={name}
                            />
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-16">
                  <div
                    className="w-full h-full bg-primary/15 border border-primary/30"
                    style={{ clipPath: 'polygon(15% 0px, 85% 0px, 100% 100%, 0px 100%)' }}
                  />
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground/70 italic font-display text-lg text-center mb-1">
              {selectedBlooms.length > 0 ? `${selectedBlooms.length} blooms selected` : '—'}
            </p>
            <p className="text-xs text-muted-foreground text-center mb-5">
              {selectedBlooms.length === 0 ? 'Add blooms to begin' : ''}
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-5 min-h-[2rem]">
              {selectedBlooms.map((name) => (
                <span key={name} className="text-[10px] tracking-wide uppercase bg-background border border-border px-2 py-1">
                  {name}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-border pt-4">
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Estimated total</span>
              <span className="font-display text-3xl text-primary">₹{totalPrice}</span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-2 text-center">
              Pricing is indicative — we'll confirm the final arrangement and delivery when we call you back.
            </p>
            <button
              disabled={selectedBlooms.length === 0}
              className="petal-btn w-full mt-5 bg-primary text-primary-foreground py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-primary/90 disabled:opacity-40"
            >
              Proceed to Book This Order
            </button>
          </div>
          <div className="mt-6 p-6 border border-border">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Upload Inspiration</p>
            <label className="petal-btn inline-flex items-center gap-2 border border-primary text-primary px-5 py-2.5 text-xs tracking-wide cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              <Upload className="w-4 h-4" /> Choose a reference photo
              <input type="file" accept="image/*" className="hidden" />
            </label>
            <textarea
              rows={3}
              placeholder="Tell us your vision…"
              className="w-full mt-4 border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none"
            />
          </div>
        </div>

        {/* Bloom Selection */}
        <div>
          <div className="flex flex-wrap gap-2 mb-6 border-b border-border pb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`petal-btn px-4 py-2 text-xs tracking-[0.15em] uppercase transition-all ${
                  activeTab === tab ? 'bg-primary text-primary-foreground' : 'text-foreground/70 hover:text-primary'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {blooms.map((bloom) => {
              const isSelected = selectedBlooms.includes(bloom.name);
              const isLocked = bloom.premium ? selectedBudget < bloom.premium : false;
              return (
                <div
                  key={bloom.name}
                  className={`group border p-3 transition-colors relative ${
                    isSelected ? 'border-primary' : isLocked ? 'border-border' : 'border-border hover:border-primary'
                  }`}
                >
                  <button
                    disabled={isLocked}
                    className="block w-full text-left disabled:cursor-not-allowed"
                    onClick={() => toggleBloom(bloom.name)}
                  >
                    <div className="aspect-square mb-3 flex items-center justify-center bg-secondary/20">
                      <span
                        className="w-12 h-12 rounded-full border border-border"
                        style={{ backgroundColor: bloom.color }}
                      />
                    </div>
                    <p className="font-display text-lg leading-tight">{bloom.name}</p>
                    <p className="text-sm text-muted-foreground">₹{bloom.price}</p>
                  </button>
                  {isLocked && (
                    <div className="absolute top-2 right-2 flex items-center gap-1 text-[10px] text-muted-foreground bg-background/80 px-1.5 py-0.5">
                      <Lock className="w-3 h-3" /> ₹{bloom.premium}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {bloom.colors.map((c) => (
                      <button
                        key={c.name}
                        title={c.name}
                        className={`w-5 h-5 rounded-full border transition-all ${
                          c.color === bloom.color ? 'border-primary ring-1 ring-primary scale-110' : 'border-border'
                        }`}
                        style={{ backgroundColor: c.color }}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
