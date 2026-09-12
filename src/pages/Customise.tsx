import { useState } from 'react';
import { Sparkles, Upload, Lock, Calendar, MapPin, Phone, CheckCircle, Clock, Package, Truck } from 'lucide-react';
import { occasions, compositionTypes, blooms, fillers, wrappingOptions } from '../data/products';

interface SelectedItem {
  name: string;
  quantity: number;
  price: number;
  color?: string;
}

export default function Customise() {
  const [selectedOccasion, setSelectedOccasion] = useState<string | null>(null);
  const [selectedComposition, setSelectedComposition] = useState('Hand-Tied Bouquet');
  const [selectedBudget, setSelectedBudget] = useState(500);
  const [selectedBlooms, setSelectedBlooms] = useState<SelectedItem[]>([]);
  const [selectedFillers, setSelectedFillers] = useState<SelectedItem[]>([]);
  const [selectedWrapping, setSelectedWrapping] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('Flowers');

  // Booking state
  const [showBooking, setShowBooking] = useState(false);
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    deliveryType: 'delivery',
    shop: 'Manish Nagar',
    location: '',
    whatsapp: '',
    name: ''
  });

  const tabs = ['Flowers', 'Fillers & Foliage', 'Wrapping'];

  const budgets = [100, 150, 200, 300, 400, 500, 700, 1000, 1500, 2000, 3000, 5000];

  const updateQuantity = (name: string, type: 'bloom' | 'filler', delta: number) => {
    const items = type === 'bloom' ? selectedBlooms : selectedFillers;
    const setItems = type === 'bloom' ? setSelectedBlooms : setSelectedFillers;
    
    const existing = items.find(item => item.name === name);
    if (existing) {
      const newQty = Math.max(0, existing.quantity + delta);
      if (newQty === 0) {
        setItems(items.filter(item => item.name !== name));
      } else {
        setItems(items.map(item => item.name === name ? { ...item, quantity: newQty } : item));
      }
    } else if (delta > 0) {
      const source = type === 'bloom' ? blooms : fillers;
      const item = source.find(s => s.name === name);
      if (item) {
        setItems([...items, { name, quantity: 1, price: item.price, color: 'color' in item ? item.color : undefined }]);
      }
    }
  };

  const totalPrice = selectedBlooms.reduce((sum, item) => sum + (item.price * item.quantity), 0) +
    selectedFillers.reduce((sum, item) => sum + (item.price * item.quantity), 0) +
    (selectedWrapping ? (wrappingOptions.find(w => w.name === selectedWrapping)?.price || 0) : 0);

  const handleProceedToBook = () => {
    if (selectedBlooms.length === 0 && selectedFillers.length === 0) return;
    setShowBooking(true);
  };

  const handleConfirmBooking = () => {
    // In a real app, this would create a Google Calendar event
    // For now, we'll show a confirmation message
    alert(`Booking confirmed!\n\nOrder Details:\n- Product: ${selectedComposition}\n- Budget: ₹${selectedBudget}\n- Total: ₹${totalPrice}\n- Date: ${bookingData.date} at ${bookingData.time}\n- ${bookingData.deliveryType === 'delivery' ? 'Delivery' : 'Pickup'}: ${bookingData.shop}\n- WhatsApp: ${bookingData.whatsapp}\n\nWe'll send you a confirmation on WhatsApp shortly!`);
    setShowBooking(false);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10 pt-8 sm:pt-12 lg:pt-16 w-full overflow-x-hidden">
      {/* Occasion Selector */}
      <section className="py-8 sm:py-12 lg:py-16 border-b border-border">
        <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 sm:mb-6 text-center">
          Choose your occasion — we'll pre-load the perfect blooms
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
          {occasions.map((occasion) => (
            <button
              key={occasion.name}
              className={`petal-btn group w-full text-left p-3 sm:p-4 border transition-all bg-background ${
                selectedOccasion === occasion.name ? 'border-primary' : 'border-border hover:border-primary'
              }`}
              onClick={() => setSelectedOccasion(occasion.name)}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mb-2 sm:mb-3 bg-secondary/40 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <p className="font-display text-base sm:text-lg leading-tight">{occasion.name}</p>
              <p className="text-[9px] sm:text-[10px] tracking-wide uppercase mt-1 text-muted-foreground">{occasion.subtitle}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Composition & Budget */}
      <section className="py-8 sm:py-10 lg:py-14 border-b border-border space-y-6 sm:space-y-8">
        <div>
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 sm:mb-4 text-center">Step 1 — What are we composing?</p>
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {compositionTypes.map((type) => (
              <button
                key={type}
                className={`petal-btn px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs tracking-[0.12em] uppercase border transition-all ${
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
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 sm:mb-4 text-center">Step 2 — Choose your budget tier</p>
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {budgets.map((budget) => (
              <button
                key={budget}
                className={`petal-btn px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-[10px] sm:text-xs border transition-all ${
                  selectedBudget === budget
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border hover:border-primary'
                }`}
                onClick={() => setSelectedBudget(budget)}
              >
                ₹{budget >= 5000 ? '5k+' : budget}
              </button>
            ))}
          </div>
          <p className="text-center text-[10px] sm:text-xs text-muted-foreground mt-2 sm:mt-3 px-4">
            Higher budgets unlock premium & imported species and richer packaging.
          </p>
        </div>
      </section>

      {/* Builder */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14">
          {/* Preview & Summary */}
          <div className="lg:sticky lg:top-24 lg:self-start order-2 lg:order-1">
            <div className="bg-secondary/15 p-4 sm:p-6 lg:p-8">
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground">Your {selectedComposition}</p>
                <button
                  className="text-[10px] sm:text-xs text-muted-foreground hover:text-primary underline underline-offset-4"
                  onClick={() => {
                    setSelectedBlooms([]);
                    setSelectedFillers([]);
                    setSelectedWrapping(null);
                  }}
                >
                  Clear
                </button>
              </div>
              
              {/* Visual Preview */}
              <div className="relative h-56 sm:h-64 lg:h-72 flex items-end justify-center mb-4 sm:mb-6">
                <div className="relative w-44 sm:w-52 lg:w-56 h-full">
                  <div className="absolute bottom-14 sm:bottom-16 left-1/2 -translate-x-1/2 w-36 sm:w-40 lg:w-44 h-36 sm:h-40 lg:h-44">
                    <div className="relative w-full h-full">
                      {selectedBlooms.length === 0 && selectedFillers.length === 0 ? (
                        <div className="absolute inset-0 flex items-center justify-center text-center">
                          <p className="text-xs sm:text-sm text-muted-foreground italic font-display text-base sm:text-lg px-4">
                            Your piece awaits its first bloom
                          </p>
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                          {selectedBlooms.map((item) => (
                            <div
                              key={item.name}
                              className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full border border-border shadow-sm"
                              style={{ backgroundColor: item.color }}
                              title={`${item.name} × ${item.quantity}`}
                            />
                          ))}
                          {selectedFillers.map((item) => (
                            <div
                              key={item.name}
                              className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full border border-border shadow-sm opacity-70"
                              style={{ backgroundColor: item.color }}
                              title={`${item.name} × ${item.quantity}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 sm:w-26 lg:w-28 h-14 sm:h-15 lg:h-16">
                    <div
                      className="w-full h-full bg-primary/15 border border-primary/30"
                      style={{ clipPath: 'polygon(15% 0px, 85% 0px, 100% 100%, 0px 100%)' }}
                    />
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-3 mb-4">
                {selectedBlooms.length > 0 && (
                  <div>
                    <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Flowers</p>
                    <div className="space-y-1">
                      {selectedBlooms.map((item) => (
                        <div key={item.name} className="flex justify-between text-xs sm:text-sm">
                          <span>{item.name} × {item.quantity}</span>
                          <span className="text-muted-foreground">₹{item.price * item.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {selectedFillers.length > 0 && (
                  <div>
                    <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Fillers & Foliage</p>
                    <div className="space-y-1">
                      {selectedFillers.map((item) => (
                        <div key={item.name} className="flex justify-between text-xs sm:text-sm">
                          <span>{item.name} × {item.quantity}</span>
                          <span className="text-muted-foreground">₹{item.price * item.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {selectedWrapping && (
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span>Wrapping: {selectedWrapping}</span>
                    <span className="text-muted-foreground">₹{wrappingOptions.find(w => w.name === selectedWrapping)?.price}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between border-t border-border pt-3 sm:pt-4">
                <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground">Estimated total</span>
                <span className="font-display text-2xl sm:text-3xl text-primary">₹{totalPrice}</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-muted-foreground mt-2 text-center">
                Pricing is indicative — we'll confirm the final arrangement and delivery when we call you back.
              </p>
              <button
                disabled={selectedBlooms.length === 0 && selectedFillers.length === 0}
                onClick={handleProceedToBook}
                className="petal-btn w-full mt-4 sm:mt-5 bg-primary text-primary-foreground py-3 sm:py-3.5 text-[10px] sm:text-xs tracking-[0.2em] uppercase hover:bg-primary/90 disabled:opacity-40"
              >
                Proceed to Book This Order
              </button>
            </div>
            <div className="mt-4 sm:mt-6 p-4 sm:p-6 border border-border">
              <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 sm:mb-3">Upload Inspiration</p>
              <label className="petal-btn inline-flex items-center gap-2 border border-primary text-primary px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs tracking-wide cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                <Upload className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Choose a reference photo
                <input type="file" accept="image/*" className="hidden" />
              </label>
              <textarea
                rows={3}
                placeholder="Tell us your vision…"
                className="w-full mt-3 sm:mt-4 border border-border bg-background px-3 sm:px-4 py-2 sm:py-3 text-sm focus:outline-none focus:border-primary resize-none"
              />
            </div>
          </div>

          {/* Selection Panel */}
          <div className="order-1 lg:order-2">
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6 border-b border-border pb-3 sm:pb-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`petal-btn px-2.5 sm:px-4 py-1.5 sm:py-2 text-[9px] sm:text-xs tracking-[0.15em] uppercase transition-all ${
                    activeTab === tab ? 'bg-primary text-primary-foreground' : 'text-foreground/70 hover:text-primary'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Flowers Tab */}
            {activeTab === 'Flowers' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                {blooms.map((bloom) => {
                  const selected = selectedBlooms.find(item => item.name === bloom.name);
                  const isLocked = bloom.premium ? selectedBudget < bloom.premium : false;
                  return (
                    <div
                      key={bloom.name}
                      className={`group border p-2 sm:p-3 transition-colors relative ${
                        selected ? 'border-primary' : isLocked ? 'border-border opacity-50' : 'border-border hover:border-primary'
                      }`}
                    >
                      <div className="aspect-square mb-2 sm:mb-3 flex items-center justify-center bg-secondary/20">
                        <span
                          className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full border border-border"
                          style={{ backgroundColor: bloom.color }}
                        />
                      </div>
                      <p className="font-display text-sm sm:text-base lg:text-lg leading-tight">{bloom.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-2">₹{bloom.price} each</p>
                      
                      {/* Quantity Selector */}
                      {isLocked ? (
                        <div className="flex items-center gap-1 text-[8px] sm:text-[10px] text-muted-foreground bg-background/80 px-1.5 py-1">
                          <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> ₹{bloom.premium}+
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(bloom.name, 'bloom', -1)}
                            disabled={!selected}
                            className="w-7 h-7 border border-border flex items-center justify-center text-sm hover:border-primary disabled:opacity-30"
                          >
                            −
                          </button>
                          <span className="text-sm font-medium w-6 text-center">{selected?.quantity || 0}</span>
                          <button
                            onClick={() => updateQuantity(bloom.name, 'bloom', 1)}
                            className="w-7 h-7 border border-border flex items-center justify-center text-sm hover:border-primary"
                          >
                            +
                          </button>
                        </div>
                      )}
                      
                      {/* Color Swatches */}
                      <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2">
                        {bloom.colors.map((c) => (
                          <div
                            key={c.name}
                            title={c.name}
                            className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-border"
                            style={{ backgroundColor: c.color }}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Fillers Tab */}
            {activeTab === 'Fillers & Foliage' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                {fillers.map((filler) => {
                  const selected = selectedFillers.find(item => item.name === filler.name);
                  return (
                    <div
                      key={filler.name}
                      className={`group border p-2 sm:p-3 transition-colors ${
                        selected ? 'border-primary' : 'border-border hover:border-primary'
                      }`}
                    >
                      <div className="aspect-square mb-2 sm:mb-3 flex items-center justify-center bg-secondary/20">
                        <span
                          className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full border border-border"
                          style={{ backgroundColor: filler.color }}
                        />
                      </div>
                      <p className="font-display text-sm sm:text-base lg:text-lg leading-tight">{filler.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-2">₹{filler.price} each</p>
                      
                      {/* Quantity Selector */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(filler.name, 'filler', -1)}
                          disabled={!selected}
                          className="w-7 h-7 border border-border flex items-center justify-center text-sm hover:border-primary disabled:opacity-30"
                        >
                          −
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{selected?.quantity || 0}</span>
                        <button
                          onClick={() => updateQuantity(filler.name, 'filler', 1)}
                          className="w-7 h-7 border border-border flex items-center justify-center text-sm hover:border-primary"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Wrapping Tab */}
            {activeTab === 'Wrapping' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                {wrappingOptions
                  .filter(w => {
                    if (selectedComposition.includes('Bouquet')) return ['bouquet', 'basket', 'box'].includes(w.type);
                    if (selectedComposition.includes('Basket')) return w.type === 'basket';
                    if (selectedComposition.includes('Varmala')) return w.type === 'varmala';
                    if (selectedComposition.includes('Jewellery')) return w.type === 'jewellery';
                    return true;
                  })
                  .map((wrap) => (
                    <button
                      key={wrap.name}
                      onClick={() => setSelectedWrapping(wrap.name === selectedWrapping ? null : wrap.name)}
                      className={`group border p-3 sm:p-4 transition-colors text-left ${
                        selectedWrapping === wrap.name ? 'border-primary bg-primary/5' : 'border-border hover:border-primary'
                      }`}
                    >
                      <p className="font-display text-sm sm:text-base lg:text-lg leading-tight mb-1">{wrap.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">₹{wrap.price}</p>
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-background border border-border max-w-2xl w-full p-6 sm:p-8 my-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl sm:text-3xl text-primary">Book Your Order</h2>
              <button
                onClick={() => setShowBooking(false)}
                className="text-muted-foreground hover:text-primary"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Your Name</label>
                <input
                  type="text"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                  placeholder="Full Name"
                  className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" /> Date
                  </label>
                  <input
                    type="date"
                    value={bookingData.date}
                    onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                    className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" /> Time
                  </label>
                  <input
                    type="time"
                    value={bookingData.time}
                    onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                    className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Delivery Type</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setBookingData({ ...bookingData, deliveryType: 'delivery' })}
                    className={`petal-btn py-3 border text-sm ${
                      bookingData.deliveryType === 'delivery' ? 'border-primary bg-primary text-primary-foreground' : 'border-border'
                    }`}
                  >
                    <Truck className="w-4 h-4 mr-2" /> Delivery
                  </button>
                  <button
                    onClick={() => setBookingData({ ...bookingData, deliveryType: 'pickup' })}
                    className={`petal-btn py-3 border text-sm ${
                      bookingData.deliveryType === 'pickup' ? 'border-primary bg-primary text-primary-foreground' : 'border-border'
                    }`}
                  >
                    <Package className="w-4 h-4 mr-2" /> Pickup
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Shop Location</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setBookingData({ ...bookingData, shop: 'Manish Nagar' })}
                    className={`petal-btn py-3 border text-sm ${
                      bookingData.shop === 'Manish Nagar' ? 'border-primary bg-primary text-primary-foreground' : 'border-border'
                    }`}
                  >
                    Manish Nagar
                  </button>
                  <button
                    onClick={() => setBookingData({ ...bookingData, shop: 'Khamla' })}
                    className={`petal-btn py-3 border text-sm ${
                      bookingData.shop === 'Khamla' ? 'border-primary bg-primary text-primary-foreground' : 'border-border'
                    }`}
                  >
                    Khamla
                  </button>
                </div>
              </div>

              {bookingData.deliveryType === 'delivery' && (
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" /> Delivery Location (Google Maps Link)
                  </label>
                  <input
                    type="url"
                    value={bookingData.location}
                    onChange={(e) => setBookingData({ ...bookingData, location: e.target.value })}
                    placeholder="https://maps.google.com/..."
                    className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
                  />
                </div>
              )}

              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5" /> WhatsApp Number
                </label>
                <input
                  type="tel"
                  value={bookingData.whatsapp}
                  onChange={(e) => setBookingData({ ...bookingData, whatsapp: e.target.value })}
                  placeholder="+91 99231 06684"
                  className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
                />
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground">Total Amount</span>
                  <span className="font-display text-3xl text-primary">₹{totalPrice}</span>
                </div>
                <button
                  onClick={handleConfirmBooking}
                  disabled={!bookingData.name || !bookingData.date || !bookingData.time || !bookingData.whatsapp}
                  className="petal-btn w-full bg-primary text-primary-foreground py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-primary/90 disabled:opacity-50"
                >
                  Confirm Booking
                </button>
                <p className="text-[10px] text-muted-foreground mt-3 text-center">
                  We'll send you a confirmation on WhatsApp and add this to our calendar.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
