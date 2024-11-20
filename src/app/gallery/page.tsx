export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className=" container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
            
          <div className="bg-white p-6 text-center rounded-lg shadow-lg">
            <img src="/bg-image1.jpeg" alt="Gallery Image 1" className="w-full h-48 object-cover rounded-lg" />
            <p className="mt-4 text-gray-700">A glimpse of our elegant dining area, perfect for any occasion.</p>
          </div>
          <div className="bg-white p-6 text-center rounded-lg shadow-lg">
            <img src="/bhugal-gosht.jpeg" alt="Gallery Image 2" className="w-full h-48 object-cover rounded-lg" />
            <p className="mt-4 text-gray-700">Our beautifully presented signature dish, ready to delight your taste buds.</p>
          </div>
          <div className="bg-white p-6 rounded-lg  text-center shadow-lg">
            <img src="/cozy-corner2.jpeg" alt="Gallery Image 3" className="w-full h-48 object-cover rounded-lg" />
            <p className="mt-4 text-gray-700">A cozy corner of our restaurant, perfect for intimate dining experiences.</p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center shadow-lg">
            <img src="/fresh-ingredients.jpeg" alt="Gallery Image 4" className="w-full h-48 object-cover rounded-lg" />
            <p className="mt-4 text-gray-700">Fresh ingredients are the foundation of our delicious meals.</p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center shadow-lg">
            <img src="/sindhi-deserts.jpeg" alt="Gallery Image 5" className="w-full h-48 object-cover rounded-lg" />
            <p className="mt-4 text-gray-700">An array of our specialty desserts, crafted to perfection.</p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center shadow-lg">
            <img src="/evening-env.jpeg" alt="Gallery Image 6" className="w-full h-48 object-cover rounded-lg" />
            <p className="mt-4 text-gray-700">The vibrant atmosphere of our restaurant during evening hours.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
