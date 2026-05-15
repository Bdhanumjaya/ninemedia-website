// src/App.jsx

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import {
  Megaphone,
  Globe,
  Search,
  PenTool,
  Video,
  BarChart3,
  Menu,
  X,
} from "lucide-react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "portfolio",
        "contact",
      ];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop - 150;
          const height = element.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Branding",
      icon: <Megaphone size={40} />,
    },
    {
      title: "SEO Optimization",
      icon: <Search size={40} />,
    },
    {
      title: "Web Development",
      icon: <Globe size={40} />,
    },
    {
      title: "Creative Design",
      icon: <PenTool size={40} />,
    },
    {
      title: "Video Production",
      icon: <Video size={40} />,
    },
    {
      title: "Marketing Analytics",
      icon: <BarChart3 size={40} />,
    },
  ];

  return (
    <div className="bg-[#f8f8f8] text-black overflow-x-hidden">

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 px-3 md:px-4 py-3">

        <div className="max-w-7xl mx-auto bg-white rounded-[24px] md:rounded-[30px] border border-gray-200 shadow-sm px-5 md:px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <h1 className="text-2xl md:text-3xl font-black gradient-text">
            NineMedia
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 text-[17px] font-medium text-black">

            <a
              href="#home"
              className={`transition ${
                activeSection === "home"
                  ? "text-orange-500"
                  : "hover:text-orange-500"
              }`}
            >
              Home
            </a>

            <a
              href="#about"
              className={`transition ${
                activeSection === "about"
                  ? "text-orange-500"
                  : "hover:text-orange-500"
              }`}
            >
              About
            </a>

            <a
              href="#services"
              className={`transition ${
                activeSection === "services"
                  ? "text-orange-500"
                  : "hover:text-orange-500"
              }`}
            >
              Services
            </a>

            <a
              href="#portfolio"
              className={`transition ${
                activeSection === "portfolio"
                  ? "text-orange-500"
                  : "hover:text-orange-500"
              }`}
            >
              Portfolio
            </a>

            <a
              href="#contact"
              className={`transition ${
                activeSection === "contact"
                  ? "text-orange-500"
                  : "hover:text-orange-500"
              }`}
            >
              Contact
            </a>

          </nav>

          {/* Right Button */}
          <div className="hidden lg:flex items-center">

            <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold hover:scale-105 transition">

              Get Started

            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

        {/* Mobile Navbar */}
        {menuOpen && (
          <div className="lg:hidden max-w-7xl mx-auto mt-3 bg-white rounded-[24px] border border-gray-200 shadow-xl px-6 py-6 flex flex-col gap-5 text-lg font-semibold">

            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>

            <a href="#portfolio" onClick={() => setMenuOpen(false)}>
              Portfolio
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <button className="mt-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold">

              Get Started

            </button>

          </div>
        )}

      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center relative overflow-hidden pt-32 md:pt-36"
      >

        {/* Glow */}
        <div className="absolute w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-yellow-300/40 blur-[120px] rounded-full top-[-100px] right-[-100px]" />

        <div className="max-w-7xl mx-auto px-5 md:px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-[-2px]">

              We Build
              <span className="gradient-text"> Brands </span>
              That Sell More

            </h1>

            {/* <p className="mt-6 text-gray-500 text-base md:text-lg leading-relaxed max-w-xl font-medium">

              Premium Digital Marketing Agency helping businesses grow with branding, SEO, web development and social media marketing.

            </p> */}

            <div className="mt-10 flex gap-4 flex-wrap">

              <button className="px-7 md:px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold shadow-xl hover:scale-105 transition duration-300">

                Get Started

              </button>

              <button className="px-7 md:px-8 py-4 rounded-full border border-orange-400 text-orange-500 font-semibold hover:bg-orange-50 transition">

                View Portfolio

              </button>

            </div>

          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >

            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
              alt="Agency"
              className="w-full max-w-[550px] rounded-[30px] md:rounded-[40px] shadow-2xl"
            />

          </motion.div>

        </div>

      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-24">

        <div className="max-w-7xl mx-auto px-5 md:px-6 grid md:grid-cols-2 gap-16 items-center">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
            alt="About"
            className="rounded-[30px] md:rounded-[40px] shadow-2xl"
          />

          <div>

            <h2 className="text-4xl md:text-5xl font-black gradient-text">
              About Us
            </h2>

            <p className="mt-6 text-gray-600 leading-loose text-base md:text-lg">

              We are a premium creative digital agency delivering branding, marketing, SEO and modern web experiences that elevate businesses in the digital world.

            </p>

            <div className="grid grid-cols-3 gap-4 md:gap-6 mt-10">

              <div className="bg-white p-5 rounded-3xl border border-orange-100 shadow-xl text-center">

                <h3 className="text-3xl md:text-4xl font-black text-orange-500">
                  120+
                </h3>

                <p className="text-gray-500 mt-2 text-sm md:text-base">
                  Clients
                </p>

              </div>

              <div className="bg-white p-5 rounded-3xl border border-orange-100 shadow-xl text-center">

                <h3 className="text-3xl md:text-4xl font-black text-orange-500">
                  300+
                </h3>

                <p className="text-gray-500 mt-2 text-sm md:text-base">
                  Projects
                </p>

              </div>

              <div className="bg-white p-5 rounded-3xl border border-orange-100 shadow-xl text-center">

                <h3 className="text-3xl md:text-4xl font-black text-orange-500">
                  5+
                </h3>

                <p className="text-gray-500 mt-2 text-sm md:text-base">
                  Years
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Services */}
      <section
        id="services"
        className="py-20 md:py-24 bg-[#fff8f1]"
      >

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          <h2 className="text-4xl md:text-5xl font-black text-center gradient-text">
            Our Services
          </h2>

          <p className="text-center text-gray-600 mt-6 max-w-2xl mx-auto">
            We provide premium digital marketing solutions for modern businesses.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 md:mt-20">

            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white border border-orange-100 shadow-xl p-8 md:p-10 rounded-[30px] hover:shadow-2xl transition duration-300"
              >

                <div className="text-orange-500">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {service.title}
                </h3>

                <p className="text-gray-500 mt-4 leading-relaxed">
                  Premium quality solutions designed to grow your business online.
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 md:py-24">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          <h2 className="text-4xl md:text-5xl font-black text-center gradient-text">
            Portfolio
          </h2>

          <p className="text-center text-gray-600 mt-6 max-w-2xl mx-auto">
            Explore some of our latest branding and creative projects.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 md:mt-20">

            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-[30px] group relative shadow-xl"
              >

                <img
                  src={`https://picsum.photos/600/600?random=${item}`}
                  alt="portfolio"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                  <button className="px-6 py-3 bg-orange-500 text-white rounded-full font-bold">
                    View Project
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 md:py-24 bg-gradient-to-r from-orange-500 to-yellow-400"
      >

        <div className="max-w-5xl mx-auto px-5 md:px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-black text-white">
            Let’s Build Your Brand
          </h2>

          <p className="mt-6 text-base md:text-lg text-white/90">
            Ready to grow your business with premium digital marketing solutions?
          </p>

          <form className="mt-12 grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="p-5 rounded-2xl outline-none bg-white"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="p-5 rounded-2xl outline-none bg-white"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="md:col-span-2 p-5 rounded-2xl outline-none bg-white"
            />

            <button className="md:col-span-2 py-5 rounded-2xl bg-black text-white font-bold text-lg hover:scale-105 transition duration-300">

              Send Message

            </button>

          </form>

        </div>

      </section>

    </div>
  );
}

export default App;