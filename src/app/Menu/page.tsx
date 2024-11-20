import Link from 'next/link';
import Image from 'next/image';

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
            <div className="flex justify-center mt-6">
              <Link href="/contact">
                <button className="bg-blue-600 text-white p-2 hover:bg-green-800 rounded-lg">Order Now</button>
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
            <div className="flex justify-center mt-6">
              <Link href="/contact">
                <button className="bg-blue-600 text-white p-2 hover:bg-green-800 rounded-lg">Order Now</button>
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
            <div className="flex justify-center mt-6">
              <Link href="/contact">
                <button className="bg-blue-600 text-white p-2 hover:bg-green-800 rounded-lg">Order Now</button>
              </Link>
            </div>
          </div>

          <div className=" bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="/Briyani.jpeg"
              alt="Signature Dish"
              width={400}
              height={300}
              className=" h-56 rounded-lg mb-4"
            />
            <h3 className="flex justify-center text-2xl font-bold mb-4">Sindhi Briyani</h3>
            <p className="flex justify-center text-justify text-gray-700">Sindhi Biryani is a spicy, aromatic rice dish with marinated meat, bold spices, and a tangy flavor, often garnished with fried onions and fresh herbs.</p>
            <div className="flex justify-center mt-6">
              <Link href="/contact">
                <button className="bg-blue-600 text-white p-2 hover:bg-green-800 rounded-lg">Order Now</button>
              </Link>
            </div>
          </div>

          <div className=" bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="/kadhi-chawal.jpeg"
              alt="Signature Dish"
              width={400}
              height={300}
              className=" h-56 rounded-lg mb-4"
            />
            <h3 className="flex justify-center text-2xl font-bold mb-4">Kadhi Chawal</h3>
            <p className="flex justify-center text-justify text-gray-700">Kadhi Chawal is a comforting dish of spiced yogurt-based curry (kadhi) served with steamed rice (chawal), popular in Indian and Pakistani cuisine.</p>
            <div className="flex justify-center mt-6">
              <Link href="/contact">
                <button className="bg-blue-600 text-white p-2 hover:bg-green-800 rounded-lg">Order Now</button>
              </Link>
            </div>
          </div>

          <div className=" bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="/Sindhi-Pulao.jpg"
              alt="Signature Dish"
              width={400}
              height={300}
              className=" h-56 rounded-lg mb-4"
            />
            <h3 className="flex justify-center text-2xl font-bold mb-4">Sindhi Pulao</h3>
            <p className="flex justify-center text-justify text-gray-700">Known for its rich and fragrant taste, Sindhi Pulao is a popular dish for special occasions and family gatherings.</p>
            <div className="flex justify-center mt-6">
              <Link href="/contact">
                <button className="bg-blue-600 text-white p-2 hover:bg-green-800 rounded-lg">Order Now</button>
              </Link>
            </div>
          </div>

          <div className=" bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="/Bhindi.jpeg"
              alt="Signature Dish"
              width={400}
              height={300}
              className=" h-56 rounded-lg mb-4"
            />
            <h3 className="flex justify-center text-2xl font-bold mb-4">Sindhi Bhindi</h3>
            <p className="flex justify-center text-justify text-gray-700">Sindhi Bhindi is a flavorful, dry-cooked okra dish made with spices, onions, and green chilies, often garnished with fresh cilantro.</p>
            <div className="flex justify-center mt-6">
              <Link href="/contact">
                <button className="bg-blue-600 text-white p-2 hover:bg-green-800 rounded-lg">Order Now</button>
              </Link>
            </div>
          </div>

          <div className=" bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="/bhugal-gosht.jpeg"
              alt="Signature Dish"
              width={400}
              height={300}
              className=" h-56 rounded-lg mb-4"
            />
            <h3 className="flex justify-center text-2xl font-bold mb-4">Bhugal Gosht</h3>
            <p className="flex justify-center text-justify text-gray-700">A slow-cooked mutton or beef dish where the meat is simmered with a rich mixture of onions, tomatoes, and spices until tender and flavorful. It&apos;s often served with naan or roti.</p>
            <div className="flex justify-center mt-6">
              <Link href="/contact">
                <button className="bg-blue-600 text-white p-2 hover:bg-green-800 rounded-lg">Order Now</button>
              </Link>
            </div>
          </div>

          <div className=" bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="/kheerni.jpeg"
              alt="Signature Dish"
              width={400}
              height={300}
              className=" h-56 rounded-lg mb-4"
            />
            <h3 className="flex justify-center text-2xl font-bold mb-4">Sindhi Kheerni</h3>
            <p className="flex justify-center text-justify text-gray-700">A traditional Sindhi dessert made with milk, sugar, and rice, flavored with cardamom and garnished with nuts like almonds and pistachios. It&apos;s similar to the popular kheer but has its unique Sindhi twist..</p>
            <div className="flex justify-center mt-6">
              <Link href="/contact">
                <button className="bg-blue-600 text-white p-2 hover:bg-green-800 rounded-lg">Order Now</button>
              </Link>
            </div>
          </div>


          
        </div>
      </div>
    </section>
  );
}

export default Menu;
