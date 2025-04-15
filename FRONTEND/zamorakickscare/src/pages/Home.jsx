import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const testimonialRef = useRef(null);

  const scrollTestimonials = (direction) => {
    const scrollAmount = direction === "left" ? -320 : 320;
    if (testimonialRef.current) {
      testimonialRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/booking");
  };

  return (
    <div className="bg-white text-gray-800 mt-40">
      <div className="bg-blue-50 px-6 py-20 max-w-7xl mx-auto rounded-[2.5rem] md:rounded-[4rem] mt-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">
              CUCI SEPATU SEPERTI BARU
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Zamora Kicks Care menyediakan layanan jasa cuci sepatu berkualitas
              dengan garansi kebersihan dan harga yang terjangkau.
            </p>
            <button
              onClick={handleNavigate}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
            >
              Jadwalkan Cuci Sepatu
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="/img.png"
              alt="Sepatu Zamora"
              className="w-80 md:w-full max-w-md object-contain rounded-[2rem] shadow-md"
            />
          </div>
        </div>
      </div>

      <section className="py-12 px-4 bg-white">
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-8">
          Galeri Pekerjaan Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <img
            src="gallery1.jpg"
            alt="Gallery 1"
            className="rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <img
            src="gallery2.jpg"
            alt="Gallery 2"
            className="rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <img
            src="gallery3.jpg"
            alt="Gallery 3"
            className="rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </section>

      <section className="bg-blue-50 py-12 px-4 relative">
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-8">
          Apa Kata Mereka?
        </h2>

        <div className="relative max-w-6xl mx-auto">
          <ChevronLeft
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-white text-blue-600 p-1 rounded-full shadow cursor-pointer"
            size={32}
            onClick={() => scrollTestimonials("left")}
          />

          <div className="overflow-x-auto">
            <div
              ref={testimonialRef}
              className="flex space-x-6 px-4 scroll-smooth"
            >
              <p className="min-w-[300px] bg-white p-4 rounded-xl shadow text-gray-700 italic">
                “Sepatuku jadi seperti baru lagi! Terima kasih Zamora.”
                <br />
                <span className="block text-right mt-4 font-semibold text-blue-600">
                  - Rafi
                </span>
              </p>
              <p className="min-w-[300px] bg-white p-4 rounded-xl shadow text-gray-700 italic">
                “Pelayanan ramah dan hasil cuci sangat memuaskan!”
                <br />
                <span className="block text-right mt-4 font-semibold text-blue-600">
                  - Alya
                </span>
              </p>
              <p className="min-w-[300px] bg-white p-4 rounded-xl shadow text-gray-700 italic">
                “Harga terjangkau dengan kualitas tinggi. Recommended!”
                <br />
                <span className="block text-right mt-4 font-semibold text-blue-600">
                  - Dimas
                </span>
              </p>
              <p className="min-w-[300px] bg-white p-4 rounded-xl shadow text-gray-700 italic">
                “Pickup dan antar cepat. Sangat membantu di waktu sibuk.”
                <br />
                <span className="block text-right mt-4 font-semibold text-blue-600">
                  - Bella
                </span>
              </p>
              <p className="min-w-[300px] bg-white p-4 rounded-xl shadow text-gray-700 italic">
                “Pengerjaan rapi, pelayanan profesional!”
                <br />
                <span className="block text-right mt-4 font-semibold text-blue-600">
                  - Yoga
                </span>
              </p>
            </div>
          </div>

          <ChevronRight
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-white text-blue-600 p-1 rounded-full shadow cursor-pointer"
            size={32}
            onClick={() => scrollTestimonials("right")}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
