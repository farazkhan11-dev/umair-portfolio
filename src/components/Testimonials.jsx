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
    className="w-10 h-10 text-cyan-400/25"
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
    <section id="testimonials" className="bg-[#060911] py-24 relative overflow-hidden text-white">
      {/* Background Glass Lighting Effects */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#1d4ed8]/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#0284c7]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className="inline-block bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-xl border border-white/20 px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-4"
            style={{
              boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.3), 0 4px 15px rgba(0,0,0,0.3)"
            }}
          >
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 tracking-tight">
            What Clients{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Say
            </span>
          </h2>
          <p className="text-slate-300 mt-4 max-w-xl mx-auto text-base sm:text-lg">
            Real feedback from real clients who trusted their vision with me.
          </p>
        </div>

        {/* Main Liquid Glass Testimonial Card */}
        <div
          className="relative bg-gradient-to-b from-white/10 via-white/5 to-transparent backdrop-blur-3xl border border-white/20 rounded-[32px] p-8 md:p-12 transition-all duration-300"
          style={{ 
            opacity: animating ? 0 : 1, 
            transform: animating ? "translateY(12px)" : "translateY(0)",
            boxShadow: "inset 0 1px 2px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.5), 0 20px 50px rgba(0,0,0,0.6)"
          }}
        >
          {/* Top edge glass highlight */}
          <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          {/* Quote icon */}
          <div className="absolute top-8 right-8 md:top-10 md:right-10">
            <QuoteIcon />
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">

            {/* Avatar + Info */}
            <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4">
              <div 
                className="p-1.5 bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-xl rounded-full border border-white/30 relative"
                style={{
                  boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.5), 0 10px 25px rgba(0,0,0,0.4)"
                }}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover border border-cyan-400/50"
                />
              </div>

              <div className="text-center md:text-left">
                <p className="text-white font-bold text-lg leading-tight tracking-wide">{t.name}</p>
                <p className="text-cyan-400 text-sm font-medium mt-0.5">{t.title}</p>
                <p className="text-slate-400 text-xs mt-0.5 font-light">{t.company}</p>
              </div>

              {/* Stars */}
              <div className="flex gap-1 bg-white/5 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
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
                    className="w-24 h-12 object-contain rounded-xl opacity-80 border border-white/20 bg-black/40 p-1.5 backdrop-blur-md"
                  />
                </div>
              )}

              {/* Instagram page screenshot (if exists) */}
              {t.instaPage && (
                <div className="mt-2 group relative">
                  <div className="relative border border-white/20 rounded-xl overflow-hidden w-28 backdrop-blur-md bg-black/40">
                    <div className="flex items-center gap-1.5 px-2 py-1.5 bg-white/10 border-b border-white/15">
                      <div className="w-2 h-2 rounded-full bg-pink-500" />
                      <span className="text-slate-300 text-xs font-medium">Instagram</span>
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

            {/* Vertical Glass Divider */}
            <div className="hidden md:block w-[1px] self-stretch bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            {/* Quote Text */}
            <div className="flex-1 flex items-center pt-2">
              <blockquote className="text-slate-200 text-base md:text-lg leading-relaxed italic font-light">
                "{t.quote}"
              </blockquote>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => switchTo(index)}
              className={`transition-all duration-300 rounded-full ${
                index === active
                  ? "w-8 h-3 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
                  : "w-3 h-3 bg-white/20 hover:bg-white/40 border border-white/20"
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
              className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl backdrop-blur-2xl border transition-all duration-300 ${
                index === active
                  ? "border-cyan-400/80 bg-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_20px_rgba(0,0,0,0.4)]"
                  : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className={`w-8 h-8 rounded-full object-cover border transition-all duration-300 ${
                  index === active ? "border-cyan-400" : "border-white/20"
                }`}
              />
              <div className="text-left hidden sm:block">
                <p className={`text-xs font-semibold transition-colors ${index === active ? "text-cyan-300" : "text-slate-300"}`}>
                  {item.name}
                </p>
                <p className="text-xs text-slate-400">{item.title}</p>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
