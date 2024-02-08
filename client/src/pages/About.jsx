import React from 'react';

const AboutSection = () => {
  return (
  
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">
          Welcome to IDShieldPro, where innovation meets sustainability in the realm of identification solutions. At IDShieldPro, we believe in crafting more than just ID cards; we create a connection between individuals and the environment. Our commitment to a greener future drives us to design and produce eco-friendly ID cards that not only serve as a symbol of identity but also reflect a conscientious choice for the planet. Rooted in cutting-edge technology and sustainable materials, our cards are a testament to our dedication to both security and environmental responsibility. Join us on a journey where each identification card not only safeguards your identity but also contributes to a healthier, more sustainable world. IDShieldPro – where your identity and our planet thrive in harmony.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <img className="mx-auto h-64 rounded-full" src="/" alt="Team" />
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Our Mission</h3>
            <p className="mt-4 text-lg text-gray-600">
              To empower individuals and businesses through innovative solutions.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <img className="mx-auto h-64 rounded-full" src="/office.jpg" alt="Office" />
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Our Vision</h3>
            <p className="mt-4 text-lg text-gray-600">
              To create a world where technology enhances lives in meaningful ways.
            </p>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default AboutSection;
