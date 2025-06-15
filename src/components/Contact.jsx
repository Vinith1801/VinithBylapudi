import React from "react";

const Contact = () => {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto" id="contact">
      <h2 className="text-3xl font-bold text-white mb-8 border-b-2 inline-block border-blue-500">
        Contact Me
      </h2>

      <div className="relative p-8 rounded-2xl shadow-lg overflow-hidden">
        {/* Gradient left accent */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-l"></div>
      {/* Blurred Glow Background Element */}
      <div className="absolute w-[60vw] max-w-[600px] aspect-square bg-blue-500 opacity-20 blur-[60px] sm:blur-[90px] md:blur-[120px] rounded-full bottom-[10vh] right-0"></div>

        <p className="text-gray-300 mb-6 leading-relaxed">
          I'm currently open to freelance projects and full-time opportunities. Feel free to get in touch via the form below or directly through email or phone.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `mailto:bylapudivinith0812@gmail.com?subject=New Contact Form Message&body=Name: ${e.target.name.value}%0DEmail: ${e.target.email.value}%0DMessage: ${e.target.message.value}`;
          }}
          className="grid gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-slate-700 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-slate-700 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="bg-slate-700 text-white p-3 rounded-md outline-none resize-none focus:ring-2 focus:ring-cyan-500 transition"
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-md hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-gray-400 text-sm space-y-2">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:bylapudivinith0812@gmail.com"
              className="text-blue-400 hover:underline"
            >
              bylapudivinith0812@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919014336441" className="hover:underline">
              +91 90143 36441
            </a>
          </p>
          <p>
            <strong>Location:</strong> India (Open to remote & on-site roles)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
