function Contact() {
  return (
    <section id="contact">
      <h2 className="text-4xl font-bold text-center mb-10">
        Contact Us
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

        <div className="bg-amber-50 p-6 rounded">
          <p className="mb-4">📞 Phone: +254 700 000000</p>
          <p className="mb-4">📧 Email: mwangazamelodies@gmail.com</p>
          <p className="mb-4">📍 Location: Nairobi, Kenya</p>
        </div>

        <form className="space-y-4 bg-amber-50 p-6 rounded">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded border border-gray-300 text-black focus:outline-none focus:border-yellow-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded border border-gray-300 text-black focus:outline-none focus:border-yellow-500"
          />

          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded border border-gray-300 text-black focus:outline-none focus:border-yellow-500"
          />

          <button className="bg-yellow-600 px-6 py-3 rounded hover:bg-yellow-700">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}
export default Contact;