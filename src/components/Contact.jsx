import React from "react";

const Contact = () => {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto" id="contact">
      <h2 className="text-3xl font-bold text-white mb-8 border-b-2 inline-block border-blue-500">
        Contact Me
      </h2>

      <div className="bg-slate-800 p-8 rounded-2xl shadow-md">
        <p className="text-gray-300 mb-6">
          I'm currently open to freelance projects and full-time opportunities. Feel free to get in touch via the form or directly via email/phone.
        </p>

        <form
          action="mailto:bylapudivinith0812@gmail.com"
          method="POST"
          encType="text/plain"
          className="grid gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-slate-700 text-white p-3 rounded-md outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-slate-700 text-white p-3 rounded-md outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="bg-slate-700 text-white p-3 rounded-md outline-none resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-gray-400 text-sm space-y-2">
          <p><strong>Email:</strong> <a href="mailto:bylapudivinith08112@gmail.com" className="text-blue-400">bylapudivinith0812@gmail.com</a></p>
          <p><strong>Phone:</strong> +91 90143 36441</p>
          <p><strong>Location:</strong> India (Open to remote & on-site roles)</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
