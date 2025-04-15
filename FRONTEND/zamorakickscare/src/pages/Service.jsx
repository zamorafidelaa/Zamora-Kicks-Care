import React from "react";

export default function Service() {
  return (
    <div className="pt-20 flex justify-center flex-col items-center">
      <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-[250px] sm:h-[300px] md:h-[350px] rounded-xl overflow-hidden shadow-lg mt-8">
        <img
          src="imgg.png" 
          alt="Service Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            Layanan
          </h1>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">
          Cuci dan Treatment Sepatu
        </h2>
        <p className="mt-4 text-lg text-blue-600">Daftar Harga</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 px-4">
        <div className="border border-blue-300 p-4 rounded-lg shadow-lg text-center bg-white max-w-[260px] mx-auto transition-all transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="mb-4">
            <img
              src="fast.jpg"
              alt="Fast Clean"
              className="w-full h-[180px] object-cover rounded-lg transition-transform duration-300 ease-in-out"
            />
          </div>
          <h3 className="text-xl font-semibold text-blue-800">
            Fast Clean Zamora
          </h3>
          <p className="mt-2 text-lg text-blue-600">Mulai dari Rp 40.000</p>
        </div>

        <div className="border border-blue-300 p-4 rounded-lg shadow-lg text-center bg-white max-w-[260px] mx-auto transition-all transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="mb-4">
            <img
              src="deep.jpg"
              alt="Deep Clean"
              className="w-full h-[180px] object-cover rounded-lg transition-transform duration-300 ease-in-out"
            />
          </div>
          <h3 className="text-xl font-semibold text-blue-800">
            Deep Clean Zamora
          </h3>
          <p className="mt-2 text-lg text-blue-600">Mulai dari Rp 70.000</p>
        </div>

        <div className="border border-blue-300 p-4 rounded-lg shadow-lg text-center bg-white max-w-[260px] mx-auto transition-all transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="mb-4">
            <img
              src="heavy.jpg"
              alt="Heavy Clean"
              className="w-full h-[180px] object-cover rounded-lg transition-transform duration-300 ease-in-out"
            />
          </div>
          <h3 className="text-xl font-semibold text-blue-800">
            Heavy Clean Zamora
          </h3>
          <p className="mt-2 text-lg text-blue-600">Mulai dari Rp 80.000</p>
        </div>
      </div>

      <section className="w-full mt-10 bg-blue-50 py-16 flex justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 px-6">
          <div className="w-full md:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
            <img
              src="rep.png" 
              alt="Reparasi Sepatu"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Reparasi Sepatu dan Perawatan
            </h2>
            <p className="text-blue-700 mb-6 text-lg">
              Reparasi dan Perawatan Sepatu terbaik untuk menjaga sepatu kamu
              tetap awet dan tampil keren.
            </p>

            <ul className="space-y-3 text-blue-800 text-base">
              <li>
                <span className="font-semibold">🔧 Reglue:</span> Medium, Full,
                Double –{" "}
                <span className="text-blue-600">Mulai dari Rp150K</span>
              </li>
              <li>
                <span className="font-semibold">🎨 Repaint:</span> Midsole,
                Upper – <span className="text-blue-600">Mulai dari Rp150K</span>
              </li>
              <li>
                <span className="font-semibold">🧵 Sewing:</span>{" "}
                <span className="text-blue-600">Mulai dari Rp100K</span>
              </li>
              <li>
                <span className="font-semibold">🧽 Suede Restoration:</span>{" "}
                <span className="text-blue-600">Rp50K</span>
              </li>
              <li>
                <span className="font-semibold">☀️ Unyellowing:</span>{" "}
                <span className="text-blue-600">Rp70K</span>
              </li>
              <li>
                <span className="font-semibold">🤍 Whitening:</span>{" "}
                <span className="text-blue-600">Rp70K</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
