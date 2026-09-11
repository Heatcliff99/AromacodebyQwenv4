import { useState } from 'react';
import { Phone, MessageCircle, Instagram, MapPin, Navigation, Clock, Star } from 'lucide-react';

export default function Contact() {
  const [enquiryForm, setEnquiryForm] = useState({ name: '', phone: '', occasion: '', date: '', message: '' });
  const [reviewForm, setReviewForm] = useState({ name: '', occasion: '', rating: 5, message: '' });

  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-10 pt-12 lg:pt-16 w-full overflow-x-hidden">
      {/* Quick Contact Buttons */}
      <div>
        <div className="grid sm:grid-cols-3 gap-4 mb-16 pt-4">
          <a
            href="tel:+919923106684"
            className="petal-btn flex items-center justify-center gap-2 border border-border py-5 hover:border-primary transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-sm">+91 99231 06684</span>
          </a>
          <a
            href="https://wa.me/919923106684"
            target="_blank"
            rel="noreferrer"
            className="petal-btn flex items-center justify-center gap-2 border border-border py-5 hover:border-primary transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm">WhatsApp</span>
          </a>
          <a
            href="https://instagram.com/aromaflowerscorner"
            target="_blank"
            rel="noreferrer"
            className="petal-btn flex items-center justify-center gap-2 border border-border py-5 hover:border-primary transition-colors"
          >
            <Instagram className="w-4 h-4 text-primary" />
            <span className="text-sm">@aromaflowerscorner</span>
          </a>
        </div>
      </div>

      {/* Shop Locations */}
      <section className="grid lg:grid-cols-2 gap-10 lg:gap-12 mb-20">
        {/* Manish Nagar */}
        <div>
          <div className="border border-border">
            <div className="aspect-[16/10] overflow-hidden bg-muted">
              <iframe
                title="Map Manish Nagar"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sManish+Nagar+Somalwada+Nagpur+Maharashtra+440037"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl text-primary mb-2">Aroma Flowers Corner — Manish Nagar</h3>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4 flex gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-muted-foreground" />
                Shop No 10, 11, Manik Park, opposite Union Bank of India, Santaji Society, Manish Nagar, Somalwada, Nagpur, Maharashtra 440037
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Aroma+Flowers+Corner+Manish+Nagar+Nagpur"
                  target="_blank"
                  rel="noreferrer"
                  className="petal-btn inline-flex items-center gap-2 border border-primary text-primary px-5 py-2.5 text-xs tracking-wide uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" /> Get Directions
                </a>
                <a
                  href="tel:+919923106684"
                  className="petal-btn inline-flex items-center gap-2 border border-border px-5 py-2.5 text-xs tracking-wide uppercase hover:border-primary transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> Call This Shop
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Khamla */}
        <div>
          <div className="border border-border">
            <div className="aspect-[16/10] overflow-hidden bg-muted">
              <iframe
                title="Map Khamla"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sPande+Layout+Khamla+Nagpur+Maharashtra"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl text-primary mb-2">Aroma Flowers Corner — Khamla</h3>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4 flex gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-muted-foreground" />
                Kalash Complex, Gulmohar Hall, Near Gulmohar Hall, Pande Layout, Khamla, Nagpur, Maharashtra
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Aroma+Flowers+Corner+Khamla+Nagpur"
                  target="_blank"
                  rel="noreferrer"
                  className="petal-btn inline-flex items-center gap-2 border border-primary text-primary px-5 py-2.5 text-xs tracking-wide uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" /> Get Directions
                </a>
                <a
                  href="tel:+919923106684"
                  className="petal-btn inline-flex items-center gap-2 border border-border px-5 py-2.5 text-xs tracking-wide uppercase hover:border-primary transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> Call This Shop
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry & Review Forms */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 pb-10">
        {/* Enquiry Form */}
        <div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Send an Enquiry</p>
            <h2 className="font-display text-3xl text-primary mb-6">Tell us what you have in mind</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                placeholder="Full Name *"
                value={enquiryForm.name}
                onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
              />
              <input
                placeholder="Phone (10-digit) *"
                value={enquiryForm.phone}
                onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  placeholder="Occasion"
                  value={enquiryForm.occasion}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, occasion: e.target.value })}
                  className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
                />
                <input
                  type="date"
                  value={enquiryForm.date}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, date: e.target.value })}
                  className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <textarea
                placeholder="Tell us the occasion, date and what you have in mind…"
                rows={5}
                value={enquiryForm.message}
                onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none"
              />
              <button
                type="submit"
                className="petal-btn w-full bg-primary text-primary-foreground py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-primary/90 disabled:opacity-50"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>

        {/* Review Form */}
        <div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Share Your Experience</p>
            <h2 className="font-display text-3xl text-primary mb-6">Leave a review</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                placeholder="Your Name *"
                value={reviewForm.name}
                onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
              />
              <input
                placeholder="Occasion (e.g. Wedding, Birthday)"
                value={reviewForm.occasion}
                onChange={(e) => setReviewForm({ ...reviewForm, occasion: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
              />
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Rating</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                    >
                      <Star
                        className={`w-7 h-7 transition-colors ${
                          star <= reviewForm.rating ? 'fill-secondary text-secondary' : 'text-border'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <textarea
                placeholder="Tell us about your experience…"
                rows={4}
                value={reviewForm.message}
                onChange={(e) => setReviewForm({ ...reviewForm, message: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none"
              />
              <button
                type="submit"
                className="petal-btn w-full border border-primary text-primary py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-50"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Opening Hours */}
      <div className="text-center py-10 text-sm text-muted-foreground flex items-center justify-center gap-2">
        <Clock className="w-4 h-4" />
        Open daily · 9:00 AM – 10:00 PM
      </div>
    </div>
  );
}
