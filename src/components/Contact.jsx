import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <p className="mb-6 text-gray-300">
          Have a project in mind or just want to say hi? Fill out the form below 👇
        </p>

        <form
          action="https://formspree.io/f/your-form-id"  // isko baad me setup karenge
          method="POST"
          className="space-y-4 max-w-xl mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
          >
            Send Message 🚀
          </button>
        </form>

        <div className="mt-10 flex justify-center space-x-6">
          <a
            href="https://github.com/Manjeetsingh31"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-id"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a
            href="mailto:msmanjeetsingh4271@gmail.com"
            className="hover:text-blue-400"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
