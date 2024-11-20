export default function Gallery() {
    return (
      <section id="gallery" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white ml-6 p-6 rounded-lg shadow-lg">
            <img src="/bg-image1.avif" alt="Gallery Image" className="w-full h-48 object-cover rounded-lg" />
          </div>

          <div className="bg-white ml-6 p-6 rounded-lg shadow-lg">
            <img src="/bg-image1.jpeg" alt="Gallery Image" className="w-full h-48 object-cover rounded-lg" />
          </div>

          <div className="bg-white ml-6 p-6 rounded-lg shadow-lg">
            <img src="/bg-image2.jpeg" alt="Gallery Image" className="w-full h-48 object-cover rounded-lg" />
          </div>

        </div>
      </div>
    </section>
   
    );
  }
  