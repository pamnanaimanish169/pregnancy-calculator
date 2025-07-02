import useSEO from "../utils/useSEO";

const About = () => {
  useSEO({
    title: "Estimated Due Date Calculator | About Us",
    description: "Learn about our mission, vision, and journey at the Estimated Due Date Calculator. Discover how we support expecting mothers with reliable tools and resources.",
    url: "https://js2ts.online/about",
    image: "/icon.png",
    siteName: "Estimated Due Date Calculator",
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Company Story */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-pink-700 mb-4">Our Story</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our Estimated Due Date Calculator platform. We understand that pregnancy is a unique and special journey for every family, and we're here to provide helpful tools and information to support you along the way.
        </p>
        <p className="text-lg text-gray-700">
          Our goal is to offer a simple, user-friendly experience that helps you track important milestones and dates during your pregnancy journey.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mb-16 grid md:grid-cols-2 gap-8">
        <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">Our Mission</h2>
          <p className="text-gray-700">
            To deliver trustworthy, personalized pregnancy support to every mother, everywhere.
          </p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">Our Vision</h2>
          <p className="text-gray-700">
            A world where every pregnancy is supported by knowledge, care, and community.
          </p>
        </div>
      </section>

      {/* Our Journey Infographic Timeline */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-pink-50 p-6 rounded-lg shadow flex flex-col items-center">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">Trust</h3>
            <p className="text-gray-700 text-center">We are committed to providing accurate, reliable information and tools that families can depend on during their pregnancy journey.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg shadow flex flex-col items-center">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Support</h3>
            <p className="text-gray-700 text-center">Our platform is designed to offer guidance and encouragement, ensuring every user feels supported and empowered.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow flex flex-col items-center">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Innovation</h3>
            <p className="text-gray-700 text-center">We continuously improve our tools and resources, embracing new ideas to better serve expecting mothers and families.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 