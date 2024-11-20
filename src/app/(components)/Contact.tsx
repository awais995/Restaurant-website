
export default function Contact() {
  return (

    <section id="contact" className="py-16">
    <div className="container mx-auto px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">Contact Us</h2>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input className="w-full px-3 py-2 border rounded-lg" type="text" id="name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input className="w-full px-3 py-2 border rounded-lg" type="email" id="email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea className="w-full px-3 py-2 border rounded-lg" id="message" rows={4}></textarea>
        </div>
        <button className="w-full bg-gray-800 text-white py-2 rounded-lg">Submit</button>
      </form>
    </div>
  </section>

  );
}
