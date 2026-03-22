import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const iconMap = {
  email: Mail,
  phone: Phone,
  location: MapPin,
  linkedin: Linkedin,
  github: Github,
};
function ContactForm() {
  const [state, handleSubmit] = useForm("xblpaadw");
  if (state.succeeded) {
      return (
        <div className="flex items-center justify-center">
          <div className="text-center py-16 px-8 rounded-3xl border border-fun-pink/30 bg-fun-pink/10 backdrop-blur-xl">
            <div className="mb-4 text-4xl">✓</div>
            <p className="text-xl font-bold text-white mb-2">Message Sent!</p>
            <p className="text-base text-white/70">Thanks for reaching out! I'll get back to you shortly.</p>
          </div>
        </div>
      );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/5 p-8 md:p-10 backdrop-blur-xl shadow-2xl hover:border-white/20 transition-all duration-300"
    >
      <div>
        <label htmlFor="full-name" className="block text-xs md:text-sm font-bold uppercase tracking-widest text-white/70 mb-3">
          Full Name
        </label>
        <input
          id="full-name"
          type="text"
          name="fullName"
          required
          autoComplete="name"
          placeholder="Your full name"
          className="w-full rounded-xl border border-white/15 bg-white/8 px-4 md:px-5 py-3 md:py-4 text-sm md:text-base text-black placeholder-white/50 outline-none transition-all duration-300 ease-out focus:border-fun-pink focus:bg-white/12 focus:ring-4 focus:ring-fun-pink/20 hover:border-white/25"
        />
        <ValidationError
          prefix="Full Name"
          field="fullName"
          errors={state.errors}
          className="text-xs md:text-sm font-medium text-fun-pink/80 mt-1"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs md:text-sm font-bold uppercase tracking-widest text-white/70 mb-3">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="name@email.com"
          className="w-full rounded-xl border border-white/15 bg-white/8 px-4 md:px-5 py-3 md:py-4 text-sm md:text-base text-black placeholder-white/50 outline-none transition-all duration-300 ease-out focus:border-fun-pink focus:bg-white/12 focus:ring-4 focus:ring-fun-pink/20 hover:border-white/25"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-xs md:text-sm font-medium text-fun-pink/80 mt-1"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs md:text-sm font-bold uppercase tracking-widest text-white/70 mb-3">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          autoComplete="off"
          placeholder="Tell me about your project, goals, and timeline."
          className="w-full resize-none rounded-xl border border-black/15 bg-black/8 px-4 md:px-5 py-3 md:py-4 text-sm md:text-base text-black placeholder-white/50 outline-none transition-all duration-300 ease-out focus:border-fun-pink focus:bg-white/12 focus:ring-4 focus:ring-fun-pink/20 hover:border-white/25"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-xs md:text-sm font-medium text-fun-pink/80 mt-1"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full rounded-full bg-gradient-to-r from-fun-pink to-fun-pink/80 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold uppercase tracking-widest text-white transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-xl hover:shadow-fun-pink/50 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-fun-pink/40 disabled:cursor-not-allowed disabled:opacity-60 disabled:scale-100 shadow-lg shadow-fun-pink/20"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

function CTA() {
  const contactDetails = [
    {
      label: "Email",
      value: "ouldkhaoua.pro@gmail.com",
      link: "mailto:ouldkhaoua.pro@gmail.com",
      type: "email",
    },
    {
      label: "Phone",
      value: "+213 556 04 53 93",
      link: "tel:+213556045393",
      type: "phone",
      
    },
    {
      label: "Availability",
      value: "Open to freelance collaborations and full time roles",
      type: "location",
     
    },
  ];

  return (
    <div id="contact" className="pt-10 md:pt-16 lg:pt-20 relative w-full overflow-hidden scroll-mt-20">
      <img className="w-24 md:w-32 m-auto mb-4 md:mb-6 opacity-80" src="/static/doodles/lineBreak.svg" />
      
      <div className="pt-4 md:pt-6 lg:pt-8 pb-10 md:pb-32 lg:pb-40 px-4 sm:px-6 md:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Let's Work Together
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
          </div>

          <div className="mt-12 md:mt-16 lg:mt-20 grid gap-8 md:gap-10 lg:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            {/* Contact Info Card */}
          <div className="w-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-8 md:p-10 lg:p-12 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

  {/* Top Text */}
  <div className="mb-12 max-w-xl">
    <p className="text-base md:text-lg leading-relaxed text-white/60">
      Let’s build something meaningful — combining clean engineering,
      refined design, and reliable collaboration.
    </p>
  </div>

  {/* Contact List */}
  <div className="space-y-5">
    {contactDetails.map((item) => {
      const Icon = iconMap[item.type];

      return (
        <div
          key={item.label}
          className="group relative flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-[2px]"
        >
          {/* Left accent line */}
          <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-fun-pink/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

          {/* Icon */}
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 group-hover:border-fun-pink/30 group-hover:bg-fun-pink/10 transition-all duration-300">
            {Icon && (
              <Icon className="w-5 h-5 text-white/70 group-hover:text-fun-pink transition-colors duration-300" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-1">
              {item.label}
            </p>

            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base font-medium text-white/90 transition-all duration-300 group-hover:text-fun-pink"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-sm md:text-base font-medium text-white/80">
                {item.value}
              </p>
            )}
          </div>

          {/* Hover arrow */}
          <div className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <span className="text-fun-pink text-sm">→</span>
          </div>
        </div>
      );
    })}
  </div>
</div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <img
        className="sqD min-w-[400px] sm:min-w-[800px] lg:min-w-[1100px] bottom-[-80px] sm:bottom-[-100px] lg:bottom-[-150px] left-1/2 -translate-x-1/2 object-cover"
        style={{ zIndex: "-10" }}
        src="/static/doodles/hero/fancyLines.svg"
      />
    </div>
  );
}

export default CTA;