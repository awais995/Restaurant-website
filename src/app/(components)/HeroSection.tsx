const Hero = () => {
    return (
      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('./hero-bg.jpg')" }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center px-4 md:px-8 lg:px-16">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Sindhi Zaika Restaurant</h1>
            <p className="text-lg md:text-xl lg:text-2xl">Experience the traditional cuisine with us</p>
          </div>
        </div>
      </section>
      
    );
  }
  
  export default Hero;
  