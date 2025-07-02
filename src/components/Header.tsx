import { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Menu, X, Calculator } from "lucide-react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { lang } = useParams();
  const { t } = useTranslation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Calculator", href: "/calculator" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getNewPath = (newLang: string) => {
    console.log('getNewPath newLang', newLang, location.pathname)
    // Home
    if (location.pathname === `/${lang}`) return `/${newLang}`;
    // About
    if (location.pathname.includes('/about/')) return `/about/${newLang}`;
    // Contact
    if (location.pathname.includes('/contact/')) return `/contact/${newLang}`;
    // Calculator
    if (location.pathname.includes('/calculator/')) return `/calculator/${newLang}`;
    // Default fallback
    return `/${newLang}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Calculator className="h-8 w-8 text-pink-500" />
              <span className="text-xl font-bold text-gray-900">
                Estimated Due Date Calculator
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={
                  item.href === "/"
                    ? `/${lang || i18n.language}`
                    : `${item.href}/${lang || i18n.language}`
                }
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(
                    item.href === "/"
                      ? `/${lang || i18n.language}`
                      : `${item.href}/${lang || i18n.language}`
                  )
                    ? "text-pink-600 bg-pink-50"
                    : "text-gray-700 hover:text-pink-600 hover:bg-pink-50"
                }`}
              >
                {t(item.name)}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-pink-600 focus:outline-none focus:text-pink-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          <select
            value={i18n.language}
            onChange={e => {
              const newLang = e.target.value;
              navigate(getNewPath(newLang));
              i18n.changeLanguage(newLang);
            }}
            className="ml-4 border rounded px-2 py-1"
            aria-label="Select language"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="zh">中文</option>
            <option value="it">Italiano</option>
          </select>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={
                    item.href === "/"
                      ? `/${lang || i18n.language}`
                      : `${item.href}/${lang || i18n.language}`
                  }
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(
                      item.href === "/"
                        ? `/${lang || i18n.language}`
                        : `${item.href}/${lang || i18n.language}`
                    )
                      ? "text-pink-600 bg-pink-50"
                      : "text-gray-700 hover:text-pink-600 hover:bg-pink-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
