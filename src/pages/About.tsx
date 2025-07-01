const team = [
  {
    name: "Dr. Olivia Smith",
    role: "Founder & Chief Medical Officer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Obstetrician with 15+ years of experience helping mothers worldwide."
  },
  {
    name: "James Lee",
    role: "Lead Engineer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Passionate about building accessible, user-friendly health tech."
  },
  {
    name: "Priya Patel",
    role: "Content Director",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Ensures all information is accurate, clear, and supportive."
  },
  {
    name: "Carlos Gomez",
    role: "Community Manager",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    bio: "Connects with mothers and gathers feedback to improve our platform."
  }
];

const About = () => (
  <div className="max-w-5xl mx-auto px-4 py-16">
    {/* Company Story */}
    <section className="mb-16">
      <h1 className="text-4xl font-bold text-pink-700 mb-4">Our Story</h1>
      <p className="text-lg text-gray-700 mb-4">
        PregnancyCare was founded in 2020 with a simple mission: to empower expecting mothers with accurate, accessible, and compassionate pregnancy support. Our journey began when our founder, Dr. Olivia Smith, saw the need for a modern, digital-first approach to pregnancy care—one that combines medical expertise with technology and empathy.
      </p>
      <p className="text-lg text-gray-700">
        Today, we serve thousands of mothers worldwide, providing tools, resources, and a supportive community to make every pregnancy journey a little easier and a lot more joyful.
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
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Journey</h2>
      <div className="relative border-l-2 border-pink-200 pl-8 max-w-2xl mx-auto">
        <div className="mb-10 flex items-center">
          <div className="bg-pink-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4">2020</div>
          <div>
            <div className="font-semibold text-gray-900">Founded</div>
            <div className="text-gray-600 text-sm">PregnancyCare was founded with a vision to support expecting mothers everywhere.</div>
          </div>
        </div>
        <div className="mb-10 flex items-center">
          <div className="bg-pink-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4">2021</div>
          <div>
            <div className="font-semibold text-gray-900">Calculator Launched</div>
            <div className="text-gray-600 text-sm">Released our first pregnancy due date calculator tool online.</div>
          </div>
        </div>
        <div className="mb-10 flex items-center">
          <div className="bg-pink-400 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4">2022</div>
          <div>
            <div className="font-semibold text-gray-900">Mobile Support</div>
            <div className="text-gray-600 text-sm">Optimized the platform for mobile devices for easier access.</div>
          </div>
        </div>
        <div className="mb-10 flex items-center">
          <div className="bg-pink-300 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4">2023</div>
          <div>
            <div className="font-semibold text-gray-900">Educational Resources</div>
            <div className="text-gray-600 text-sm">Added a library of articles and guides for pregnancy education.</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-pink-200 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4">2024</div>
          <div>
            <div className="font-semibold text-gray-900">Continuous Improvement</div>
            <div className="text-gray-600 text-sm">Ongoing updates and new features based on user feedback.</div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About; 