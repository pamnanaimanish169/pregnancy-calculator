import { Facebook, Instagram, Twitter } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import useSEO from "../utils/useSEO";

const Contact = () => {
  const { lang } = useParams();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);
  useSEO({
    title: `${t("title")} | ${t("contact")}`,
    description: t("description"),
    url: "https://js2ts.online",
    image: "/icon.png",
    siteName: t("title"),
  });

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-4xl mx-auto px-4 py-16 w-full flex flex-col">
        <h1 className="text-4xl font-bold text-pink-700 mb-8 text-center">
          {t("contact")}
        </h1>
        <div className="flex-1 w-full">
          {/* Contact Form */}
          <form
            action="https://formsubmit.co/javscript2typescript@gmail.com"
            method="POST"
            className="bg-white rounded-lg shadow p-8 flex flex-col gap-4 max-w-2xl mx-auto"
          >
            {/* Prevent spam */}
            <input type="hidden" name="_captcha" value="false" />
            {/* <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}
            <label className="font-semibold text-gray-700">{t("name")}</label>
            <input
              type="text"
              name="name"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
              aria-label={t("name")}
            />
            <label className="font-semibold text-gray-700">{t("email")}</label>
            <input
              type="email"
              name="email"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
              aria-label={t("email")}
            />
            <label className="font-semibold text-gray-700">
              {t("message")}
            </label>
            <textarea
              name="message"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              rows={5}
              required
              aria-label={t("message")}
            />
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-2 rounded font-semibold hover:bg-pink-700 hover:cursor-pointer transition-colors duration-200"
            >
              {t("send")}
            </button>
          </form>
        </div>
      </div>
      {/* Social Links at the bottom */}
      <div className="flex gap-6 justify-center mb-8">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <Facebook className="h-6 w-6 text-pink-600 hover:text-pink-800 transition-colors" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Twitter className="h-6 w-6 text-pink-600 hover:text-pink-800 transition-colors" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram className="h-6 w-6 text-pink-600 hover:text-pink-800 transition-colors" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
