import useSEO from "../utils/useSEO";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  useSEO({
    title: `${t('title')} | ${t('aboutUs')}`,
    description: t('aboutDescription'),
    url: "https://js2ts.online/about",
    image: "/icon.png",
    siteName: t('title'),
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Company Story */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-pink-700 mb-4">{t('ourStory')}</h1>
        <p className="text-lg text-gray-700 mb-4">
          {t('aboutWelcome')}
        </p>
        <p className="text-lg text-gray-700">
          {t('aboutGoal')}
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mb-16 grid md:grid-cols-2 gap-8">
        <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">{t('ourMission')}</h2>
          <p className="text-gray-700">
            {t('aboutMission')}
          </p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">{t('ourVision')}</h2>
          <p className="text-gray-700">
            {t('aboutVision')}
          </p>
        </div>
      </section>

      {/* Our Journey Infographic Timeline */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('ourCoreValues')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-pink-50 p-6 rounded-lg shadow flex flex-col items-center">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">{t('trust')}</h3>
            <p className="text-gray-700 text-center">{t('trustDesc')}</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg shadow flex flex-col items-center">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">{t('support')}</h3>
            <p className="text-gray-700 text-center">{t('supportDesc')}</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow flex flex-col items-center">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{t('innovation')}</h3>
            <p className="text-gray-700 text-center">{t('innovationDesc')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 