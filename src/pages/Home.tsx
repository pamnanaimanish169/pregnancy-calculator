import { ArrowRight, BookOpen, Calendar, Heart, Users } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import useSEO from "../utils/useSEO";
import { useTranslation } from "react-i18next";

const Home = () => {
  useSEO({
    title: "Estimated Due Date Calculator | About Us",
    description: "Easily find your baby's due date with our free and accurate Estimated Due Date Calculator. Calculate your EDD based on your last period or conception date — quick, reliable, and doctor-recommended.",
    url: "https://js2ts.online",
    image: "/icon.png",
    siteName: "Estimated Due Date Calculator"
  });

  const { lang } = useParams();
  const { t, i18n } = useTranslation();

  const features = [
    {
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      title: t('personalizedCareTitle'),
      description: t('personalizedCareDesc'),
    },
    {
      icon: <Calendar className="h-8 w-8 text-pink-500" />,
      title: t('dueDateCalculatorTitle'),
      description: t('dueDateCalculatorDesc'),
    },
    {
      icon: <Users className="h-8 w-8 text-pink-500" />,
      title: t('expertGuidanceTitle'),
      description: t('expertGuidanceDesc'),
    },
    {
      icon: <BookOpen className="h-8 w-8 text-pink-500" />,
      title: t('educationalResourcesTitle'),
      description: t('educationalResourcesDesc'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 to-purple-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('pregnancyJourney')} <span className="text-pink-600">{t('startsHere')}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('trackPregnancy')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={`/calculator/${lang || i18n.language}`}
                className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center"
              >
                {t('calculateDueDate')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to={`/about/${lang || i18n.language}`}
                className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors duration-200"
              >
                {t('learnMore')}
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
              {t('everythingYouNeed')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('everythingYouNeedDesc')}
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
            {t('howItWorks')}
          </h2>
          <ol className="space-y-8">
            <li className="flex items-start gap-4">
              <span className="bg-pink-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg">
                1
              </span>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  {t('step1Title')}
                </h3>
                <p className="text-gray-700">
                  {t('step1Desc')}
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-pink-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg">
                2
              </span>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  {t('step2Title')}
                </h3>
                <p className="text-gray-700">
                  {t('step2Desc')}
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-pink-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg">
                3
              </span>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  {t('step3Title')}
                </h3>
                <p className="text-gray-700">
                  {t('step3Desc')}
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
            {t('faq')}
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-pink-700">
                {t('faq1Title')}
              </h3>
              <p className="text-gray-700">
                {t('faq1Desc')}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-pink-700">
                {t('faq2Title')}
              </h3>
              <p className="text-gray-700">
                {t('faq2Desc')}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-pink-700">
                {t('faq3Title')}
              </h3>
              <p className="text-gray-700">
                {t('faq3Desc')}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-pink-700">
                {t('faq4Title')}
              </h3>
              <p className="text-gray-700">
                {t('faq4Desc')}
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
            to={`/calculator/${lang || i18n.language}`}
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
