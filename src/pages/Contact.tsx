import { useState } from "react";
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setSubmitted(true);
    // Here you would handle sending the form data to your backend or email service
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-4xl mx-auto px-4 py-16 w-full flex flex-col">
        <h1 className="text-4xl font-bold text-pink-700 mb-8 text-center">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12 flex-1">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-8 flex flex-col gap-4">
            <label className="font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
              aria-label="Name"
            />
            <label className="font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
              aria-label="Email"
            />
            <label className="font-semibold text-gray-700">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              rows={5}
              required
              aria-label="Message"
            />
            {error && <div className="text-red-500 text-sm">{error}</div>}
            {submitted ? (
              <div className="text-green-600 font-semibold">Thank you for contacting us!</div>
            ) : (
              <button
                type="submit"
                className="bg-pink-600 text-white px-6 py-2 rounded font-semibold hover:bg-pink-700 transition-colors duration-200"
              >
                Send Message
              </button>
            )}
          </form>

          {/* Company Details */}
          <div className="flex flex-col gap-8 justify-between">
            <div className="bg-pink-50 rounded-lg p-6 shadow flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-pink-600" />
                <span>123 Wellness Ave, Suite 100, New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-pink-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-pink-600" />
                <span>support@pregnancycare.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Social Links at the bottom */}
      <div className="flex gap-6 justify-center mb-8">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <Facebook className="h-6 w-6 text-pink-600 hover:text-pink-800 transition-colors" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <Twitter className="h-6 w-6 text-pink-600 hover:text-pink-800 transition-colors" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram className="h-6 w-6 text-pink-600 hover:text-pink-800 transition-colors" />
        </a>
      </div>
    </div>
  );
};

export default Contact; 