export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <h3 className="text-2xl font-bold mb-4">Send your details</h3>
            <form className="space-y-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="text"
                  id="name"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="email"
                  id="email"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  id="message"
                  rows={4}
                ></textarea>
              </div>
              <button className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Submit
              </button>
            </form>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <h3 className="text-2xl font-bold mb-4">Contact Details</h3>
            <p className="text-gray-700 mb-4 py-4">
              <div className="mb-4">
                <p className="font-bold size-8 ">Address</p>
              Main Autobhan Road Near Giddu Chowk Hyderabad.
              </div>
              <div className="mb-4">
              03025793739
              </div>
              <div className="mb-4">
              email@example.com
              </div>
            </p>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.731 0-1.325.595-1.325 1.326v21.348c0 .73.594 1.326 1.325 1.326h11.495v-9.294h-3.123v-3.622h3.123v-2.676c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.797.144v3.243l-1.919.001c-1.504 0-1.794.715-1.794 1.76v2.316h3.586l-.468 3.622h-3.118v9.294h6.116c.73 0 1.324-.596 1.324-1.326v-21.349c0-.731-.594-1.326-1.325-1.326z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="text-blue-400 hover:text-blue-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.949.563-2.001.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.918 2.201-4.918 4.917 0 .386.044.762.127 1.124-4.083-.205-7.702-2.16-10.125-5.128-.423.724-.666 1.562-.666 2.457 0 1.697.865 3.194 2.179 4.074-.802-.025-1.555-.246-2.213-.614-.001.021-.001.041-.001.062 0 2.367 1.685 4.342 3.918 4.789-.411.112-.843.171-1.288.171-.314 0-.615-.03-.911-.086.617 1.927 2.406 3.33 4.526 3.368-1.66 1.3-3.752 2.075-6.026 2.075-.392 0-.779-.023-1.158-.068 2.147 1.377 4.697 2.18 7.434 2.18 8.921 0 13.801-7.394 13.801-13.801 0-.21 0-.423-.016-.632.944-.684 1.765-1.538 2.411-2.511z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="text-pink-500 hover:text-pink-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.322 3.608 1.297.975.975 1.235 2.243 1.297 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.322 2.633-1.297 3.608-.975.975-2.243 1.235-3.608 1.297-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.322-3.608-1.297-.975-.975-1.235-2.243-1.297-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.322-2.633 1.297-3.608.975-.975 2.243-1.235 3.608-1.297 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.67.014-4.947.072-1.641.07-3.098.486-4.263 1.651-1.165 1.165-1.582 2.622-1.651 4.263-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.07 1.641.486 3.098 1.651 4.263 1.165 1.165 2.622 1.582 4.263 1.651 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.641-.07 3.098-.486 4.263-1.651 1.165-1.165 1.582-2.622 1.651-4.263.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.07-1.641-.486-3.098-1.651-4.263-1.165-1.165-2.622-1.582-4.263-1.651-1.277-.058-1.688-.072-4.947-.072z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
