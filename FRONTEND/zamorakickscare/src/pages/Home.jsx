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

      <section className="w-full py-16 px-6 flex justify-center bg-white">
        <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Cara Kerja Kami
            </h2>
            <p className="text-neutral-700 mb-6">
              Tertarik untuk cuci sepatu di Zamora Kicks Care tapi bingung caranya?
            </p>
            <img
              src="blue.png"
              alt="Proses Cuci Sepatu"
              className="w-50 md:w-74 mx-auto rounded-3xl object-cover shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <a
              href="#"
              className="text-sm text-blue-600 font-semibold self-end mb-2"
            >
              Lihat Selengkapnya
            </a>

            <div className="p-4 border-2 border-blue-400 rounded-xl">
              <h4 className="font-semibold text-neutral-800 flex items-center gap-2">
                📞 Hubungi Kami
              </h4>
              <p className="text-neutral-600 text-sm mt-1">
                Hubungi tim Zamora Kicks Care dan konsultasikan tentang
                sepatumu!
              </p>
            </div>

            <div className="p-4 border rounded-xl bg-gray-50">
              <h4 className="font-semibold text-neutral-800 flex items-center gap-2">
                🚗 Penjemputan
              </h4>
              <p className="text-neutral-600 text-sm mt-1">
                Tim kami akan segera datang ke lokasi yang ditentukan, praktis
                dan tanpa repot!
              </p>
            </div>

            <div className="p-4 border rounded-xl bg-gray-50">
              <h4 className="font-semibold text-neutral-800 flex items-center gap-2">
                🧼 Proses Cuci
              </h4>
              <p className="text-neutral-600 text-sm mt-1">
                Sepatu akan dicuci dengan teknik yang sesuai dengan bahan sepatu
                agar tetap awet.
              </p>
            </div>

            <div className="p-4 border rounded-xl bg-gray-50">
              <h4 className="font-semibold text-neutral-800 flex items-center gap-2">
                📦 Siap Diambil / Antar
              </h4>
              <p className="text-neutral-600 text-sm mt-1">
                Sepatu kamu siap dipakai lagi, kamu bisa mengambil sendiri atau
                kami antarkan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
