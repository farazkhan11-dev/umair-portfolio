import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactInfo = [
  {
    label: "Email",
    value: "umair204060@gmail.com",
    href: "mailto:umair204060@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "0348 4819543",
    href: "tel:03484819543",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.06 2.18 2 2 0 012 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
];



const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_7e04wk9",
        "template_122py2q",
        form.current,
        "wKV563CMN_ifDXw87"
      )
      .then(() => {
        setStatus("sent");
        form.current.reset();
      })
      .catch((error) => {
        setStatus("error");
        console.error(error);
      });
  };

  return (
    <section id="contact" className="bg-slate-950 py-24 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/4 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #22d3ee 1px, transparent 1px), linear-gradient(to bottom, #22d3ee 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold uppercase tracking-widest text-sm">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Let's Work{" "}
            <span className="text-cyan-400">Together</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Have a project in mind? Reach out and let's create something
            incredible together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — Contact Info */}
          <div className="space-y-8">

            {/* Tagline */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to- from-transparent via-cyan-500/40 to-transparent" />

              <h3 className="text-white text-2xl font-bold mb-3">
                Ready to elevate your content?
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Whether it's a YouTube video, a short-form reel, a brand
                commercial, or a cinematic project — I'm here to bring your
                vision to life. Let's talk about what you need.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-400 text-sm font-medium">
                  Available for new projects
                </span>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {ContactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-5 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl px-6 py-5 group transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 flex items-center justify-center text-cyan-400 transition-all duration-300 flex-shrink-">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                  <div className="ml-auto text-slate-700 group-hover:text-cyan-500 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

          </div>

          {/* Right — Contact Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 relative">
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to- from-transparent via-cyan-500/40 to-transparent" />

            <h3 className="text-white text-xl font-bold mb-7">
              Send a Message
            </h3>

            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-cyan-400">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-white text-xl font-bold">Message Sent!</p>
                <p className="text-slate-400">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus(null)}
                  className="mt-2 text-cyan-400 text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 outline-none transition-colors duration-200 text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="user@example.com"
                    required
                    className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 outline-none transition-colors duration-200 text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 outline-none transition-colors duration-200 text-sm resize-none"
                  />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <p className="text-red-400 text-sm text-center">
                    Failed to send. Please try again or email directly.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-800 disabled:cursor-not-allowed text-white font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
