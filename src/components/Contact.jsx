// ============================================================
// Contact.jsx — Contact form + contact cards
// ============================================================

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {

  const left = useScrollReveal();
  const right = useScrollReveal();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_70hmgy3", // replace
        "template_hd6gnj6", // replace 
        form, 
        "T0x11NYPxx5ldi2sF" // replace
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        () => {
          setLoading(false);
          alert("Something went wrong. Try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-16 overflow-hidden bg-gray-900"
    >

      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#3c6e71]/10 via-transparent to-cyan-400/5 pointer-events-none" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(#3c6e71 0.5px, transparent 1px),
            linear-gradient(90deg, #3c6e71 0.5px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-[#3c6e71] to-cyan-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="text-zinc-400 max-w-xl mx-auto">
            Open to collaborations, projects, and opportunities.
            Feel free to reach out and start a conversation.
          </p>

        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <div
            ref={left.ref}
            className={`transition-all duration-700 ${
              left.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >

            <div className="flex flex-col gap-5">

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center justify-between bg-gray-900 border border-white/10 rounded-2xl px-5 py-4 w-full hover:border-[#3c6e71]/70 transition"
              >
                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 bg-gray-800 rounded-xl flex items-center justify-center text-[#3c6e71] text-lg">
                    <FaEnvelope />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest">
                      Email
                    </p>

                    <p className="text-white font-medium">
                      {personalInfo.email}
                    </p>
                  </div>

                </div>

                <span className="text-zinc-500">↗</span>
              </a>

              <a
                href="tel:+918317550061"
                className="flex items-center justify-between bg-gray-900 border border-white/10 rounded-2xl px-5 py-4 w-full hover:border-[#3c6e71]/70 transition cursor-pointer"
              >
                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 bg-gray-800 rounded-xl flex items-center justify-center text-[#3c6e71] text-lg">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest">
                      Phone
                    </p>

                    <p className="text-white font-medium">
                      +91 8317550061
                    </p>
                  </div>

                </div>

                <span className="text-zinc-500">↗</span>
              </a>

              {/* LOCATION */}
              <div className="flex items-center justify-between bg-gray-900 border border-white/10 rounded-2xl px-5 py-4 w-full hover:border-[#3c6e71]/70 transition">

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-gray-800 rounded-xl flex items-center justify-center text-[#3c6e71] text-lg">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest">
                      Location
                    </p>
                    <p className="text-white font-medium">
                      Andhra Pradesh, India
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div
            ref={right.ref}
            className={`transition-all duration-700 delay-200 ${
              right.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >

            <div className="bg-gray-900 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg hover:border-[#3c6e71]/70 transition">

              {success ? (

                <div className="flex flex-col items-center justify-center text-center py-14 gap-4">

                  <div className="text-5xl">🎉</div>

                  <h3 className="text-white font-bold text-xl">
                    Message Sent!
                  </h3>

                  <p className="text-zinc-400 text-sm">
                    I'll get back to you soon.
                  </p>

                  <button
                    onClick={() => setSuccess(false)}
                    className="text-[#3c6e71] hover:underline"
                  >
                    Send another →
                  </button>

                </div>

              ) : (

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <input
                      name="name"
                      placeholder="Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-900 border border-white/10 text-white px-4 py-3 rounded-xl
                      focus:border-[#3c6e71]
                      focus:ring-2 focus:ring-[#3c6e71]/30
                      hover:border-[#3c6e71]/50
                      outline-none transition-all duration-300"
                    />

                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-900 border border-white/10 text-white px-4 py-3 rounded-xl
                      focus:border-[#3c6e71]
                      focus:ring-2 focus:ring-[#3c6e71]/30
                      hover:border-[#3c6e71]/50
                      outline-none transition-all duration-300"
                    />

                  </div>

                  {/* Subject */}
                  <input
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="bg-gray-900 border border-white/10 text-white px-4 py-3 rounded-xl
                    focus:border-[#3c6e71]
                    focus:ring-2 focus:ring-[#3c6e71]/30
                    hover:border-[#3c6e71]/50
                    outline-none transition-all duration-300"
                  />

                  {/* Message */}
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="bg-gray-900 border border-white/10 text-white px-4 py-3 rounded-xl
                    focus:border-[#3c6e71]
                    focus:ring-2 focus:ring-[#3c6e71]/30
                    hover:border-[#3c6e71]/50
                    outline-none transition-all duration-300"
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2
                    bg-gradient-to-r from-[#284b63] via-[#3c6e71] to-[#284b63]
                    text-black font-bold text-sm px-8 py-3.5 rounded-xl
                    transition-all duration-300
                    hover:scale-105 hover:-translate-y-1
                    hover:shadow-lg hover:shadow-[#3c6e71]/40
                    disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message →"}
                  </button>

                </form>

              )}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}