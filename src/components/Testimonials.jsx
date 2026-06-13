import React, { useState, useEffect } from "react";
import saraimage from "../assets/images/saraimage.png";
import sarainstapage from "../assets/images/sarainstapage.png";
import uzairimage from "../assets/images/uzairimage.png";
import uzaircompany from "../assets/images/uzaircompany.jpg";

const testimonials = [
  {
    name: "Uzair Asif",
    title: "CEO",
    company: "AXIOLINK SYSTEMS",
    image: uzairimage,
    companyLogo: uzaircompany,
    instaPage: null,
    quote:
      "Umair is a highly skilled video editor who understands how content needs to perform online. He quickly adapted to our vision and delivered results beyond our expectations. The quality of his edits, the attention to detail, and his ability to meet tight deadlines made the whole collaboration seamless. Working with him was smooth, professional, and genuinely efficient. We'll definitely be coming back for future projects.",
    rating: 5,
  },
  {
    name: "Sarah Ahmad",
    title: "Content Creator",
    company: "Instagram & Social Media",
    image: saraimage,
    companyLogo: null,
    instaPage: sarainstapage,
    quote:
      "Umair is an incredible video editor who truly understands how to create engaging content. He nailed the pacing and style I needed for my platform from the very first draft. My audience immediately noticed the upgrade in quality — the transitions, color grading, and overall feel were exactly what I was going for. He listens carefully, takes feedback well, and always delivers on time. Honestly one of the best editors I've worked with.",
    rating: 5,
  },
];

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-cyan-400"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const QuoteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-10 h-10 text-cyan-500/30"
  >
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const switchTo = (index) => {
    if (index === active || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 300);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
        setAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <section id="testimonials" className="bg-slate-950 py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold uppercase tracking-widest text-sm">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            What Clients{" "}
            <span className="text-cyan-400">Say</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Real feedback from real clients who trusted their vision with me.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div
          className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 transition-all duration-300"
          style={{ opacity: animating ? 0 : 1, transform: animating ? "translateY(12px)" : "translateY(0)" }}
        >
          {/* Cyan top accent line */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to from-transparent via-cyan-500/50 to-transparent" />

          {/* Quote icon */}
          <div className="absolute top-8 right-8 md:top-10 md:right-10">
            <QuoteIcon />
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">

            {/* Avatar + Info */}
            <div className="flex-shrink- flex flex-col items-center md:items-start gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full" />
                <img
                  src={t.image}
                  alt={t.name}
                  className="relative w-20 h-20 rounded-full object-cover border-2 border-cyan-500"
                />
              </div>

              <div className="text-center md:text-left">
                <p className="text-white font-bold text-lg leading-tight">{t.name}</p>
                <p className="text-cyan-400 text-sm font-medium">{t.title}</p>
                <p className="text-slate-500 text-xs mt-0.5">{t.company}</p>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Company logo (if exists) */}
              {t.companyLogo && (
                <div className="mt-2">
                  <img
                    src={t.companyLogo}
                    alt={t.company}
                    className="w-24 h-12 object-contain rounded-lg opacity-70 border border-slate-700"
                  />
                </div>
              )}

              {/* Instagram page screenshot (if exists) */}
              {t.instaPage && (
                <div className="mt-2 group relative">
                  <div className="absolute -inset-1 bg-gradient-to- from-pink-500/20 via-purple-500/10 to-cyan-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative border border-slate-700 rounded-xl overflow-hidden w-28">
                    <div className="flex items-center gap-1.5 px-2 py-1.5 bg-slate-800 border-b border-slate-700">
                      <div className="w-2 h-2 rounded-full bg-pink-500" />
                      <span className="text-slate-400 text-xs font-medium">Instagram</span>
                    </div>
                    <img
                      src={t.instaPage}
                      alt="Sarah's Instagram"
                      className="w-full h-20 object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px self-stretch bg-slate-800" />

            {/* Quote Text */}
            <div className="flex-1 flex items-center">
              <blockquote className="text-slate-300 text-lg md:text-xl leading-relaxed italic">
                "{t.quote}"
              </blockquote>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to from-transparent via-slate-700/60 to-transparent" />
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => switchTo(index)}
              className={`transition-all duration-300 rounded-full ${
                index === active
                  ? "w-8 h-3 bg-cyan-400"
                  : "w-3 h-3 bg-slate-700 hover:bg-slate-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail Row */}
        <div className="flex justify-center gap-4 mt-6">
          {testimonials.map((item, index) => (
            <button
              key={index}
              onClick={() => switchTo(index)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl border transition-all duration-300 ${
                index === active
                  ? "border-cyan-500 bg-slate-800/80"
                  : "border-slate-800 bg-slate-900/50 hover:border-slate-600"
              }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className={`w-8 h-8 rounded-full object-cover border transition-all duration-300 ${
                  index === active ? "border-cyan-500" : "border-slate-700"
                }`}
              />
              <div className="text-left hidden sm:block">
                <p className={`text-xs font-semibold transition-colors ${index === active ? "text-white" : "text-slate-400"}`}>
                  {item.name}
                </p>
                <p className="text-xs text-slate-500">{item.title}</p>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
