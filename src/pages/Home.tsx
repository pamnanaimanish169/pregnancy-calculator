import { ArrowRight, BookOpen, Calendar, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import useSEO from "../utils/useSEO";

const Home = () => {
  useSEO({
    title: "Estimated Due Date Calculator | About Us",
    description: "Easily find your baby's due date with our free and accurate Estimated Due Date Calculator. Calculate your EDD based on your last period or conception date — quick, reliable, and doctor-recommended.",
    url: "https://js2ts.online",
    image: "/icon.png",
    siteName: "Estimated Due Date Calculator"
  });

  const features = [
    {
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      title: "Personalized Care",
      description: "Track your pregnancy journey with personalized insights.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-pink-500" />,
      title: "Due Date Calculator",
      description: "Accurately calculate your due date and track milestones.",
    },
    {
      icon: <Users className="h-8 w-8 text-pink-500" />,
      title: "Expert Guidance",
      description: "Access reliable information from medical professionals.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-pink-500" />,
      title: "Educational Resources",
      description: "Comprehensive articles for every stage of pregnancy.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 to-purple-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Pregnancy Journey
              <span className="text-pink-600"> Starts Here</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Track your pregnancy with confidence using our accurate due date
              calculator and comprehensive pregnancy resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/calculator"
                className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center"
              >
                Calculate Due Date
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need for Your Pregnancy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From due date calculation to weekly updates, we provide
              comprehensive tools and resources.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How It Works
          </h2>
          <ol className="space-y-8">
            <li className="flex items-start gap-4">
              <span className="bg-pink-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg">
                1
              </span>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  Enter Your Last Menstrual Period
                </h3>
                <p className="text-gray-700">
                  Provide the first day of your last menstrual period (LMP) in
                  the calculator.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-pink-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg">
                2
              </span>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  Get Your Estimated Due Date
                </h3>
                <p className="text-gray-700">
                  The calculator uses standard medical formulas to estimate your
                  due date.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-pink-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg">
                3
              </span>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  Explore Weekly Updates
                </h3>
                <p className="text-gray-700">
                  Learn about your baby's development and get tips for each week
                  of pregnancy.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-pink-700">
                How accurate is the due date calculator?
              </h3>
              <p className="text-gray-700">
                The calculator provides an estimate based on your last menstrual
                period. For the most accurate results, consult your healthcare
                provider and consider ultrasound dating.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-pink-700">
                Can I use this calculator if my cycles are irregular?
              </h3>
              <p className="text-gray-700">
                The calculator works best for regular cycles. If your cycles are
                irregular, the estimate may be less precise. Your doctor can
                help with a more tailored assessment.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-pink-700">
                Is my information stored?
              </h3>
              <p className="text-gray-700">
                No, your information is not stored or shared. All calculations
                are done locally in your browser for your privacy.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-pink-700">
                Where can I find more pregnancy resources?
              </h3>
              <p className="text-gray-700">
                Check our About page or consult reputable sources like the CDC,
                Mayo Clinic, or your healthcare provider for more information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Calculate your due date now and get personalized pregnancy insights.
          </p>
          <Link
            to="/calculator"
            className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
