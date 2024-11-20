import Link from "next/link";
import Image from "next/image";
const Menu = () => {
  return (
    <section id="menu" className="py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">Our Menu</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="/Bhee.jpeg"
              alt="Signature Dish1"
              width={400}
              height={300}
              className=" h-56 rounded-lg mb-4"
            />
            <h3 className="flex justify-center text-2xl font-bold mb-4">Bhee (Lotus Root) Curry</h3>
            <p className="flex justify-center text-justify text-gray-700">A curry made with lotus root slices, cooked in a spicy tomato and onion gravy.</p>
            <div className="flex justify-center mt-8">
              <Link href="/Menu">
                <button className="bg-blue-600 text-white p-2 hover:bg-green-800 rounded-lg">Check Menu</button>
              </Link>
            </div>
          
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="/Aloo-gosht.avif"
              alt="Signature Dish2"
              width={400}
              height={300}
              className=" h-56 rounded-lg mb-4"
            />
            <h3 className="flex justify-center  text-2xl font-bold mb-4">Aloo Gosht</h3>
            <p className="flex justify-center text-justify text-gray-700">A flavorful curry made with tender pieces of meat (usually mutton or beef) and potatoes, cooked in a spiced gravy.</p>
            <div className="flex justify-center mt-2">
              <Link href="/Menu">
                <button className="bg-blue-600 text-white p-2 hover:bg-green-800 rounded-lg">Check Menu</button>
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="/Kheer.jpeg"
              alt="Signature Dish3"
              width={400}
              height={300}
              className=" h-56 rounded-lg mb-4"
            />
            <h3 className="flex justify-center text-2xl font-bold mb-4">Kheer</h3>
            <p className="flex justify-center text-justify text-gray-700">A rice pudding made with milk, sugar, and cardamom, garnished with nuts and saffron.
            </p>
            <div className="flex justify-center mt-8">
              <Link href="/Menu">
                <button className="bg-blue-600 text-white p-2 hover:bg-green-800 rounded-lg">Check Menu</button>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Menu;
