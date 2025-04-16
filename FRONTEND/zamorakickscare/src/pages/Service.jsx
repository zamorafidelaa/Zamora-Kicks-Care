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

      <section className="w-full mt-10 py-16 flex justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-start gap-10 px-6">
          <div className="w-full md:w-[35%]">
            <img
              src="rep.png"
              alt="Reparasi Sepatu"
              className="w-full rounded-3xl object-cover shadow-md"
            />
          </div>

          <div className="w-full md:w-[60%]">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Reparasi dan Perawatan Sepatu
            </h2>

            <div className="divide-y divide-neutral-300 text-neutral-800">
              <div className="flex justify-between py-3">
                <div>
                  <strong>Reglue</strong>
                  <br />
                  <span className="text-sm text-neutral-500">
                    Medium, full, double
                  </span>
                </div>
                <div className="font-semibold text-neutral-700">
                  Mulai dari Rp150K
                </div>
              </div>

              <div className="flex justify-between py-3">
                <div>
                  <strong>Repaint</strong>
                  <br />
                  <span className="text-sm text-neutral-500">
                    Midsole, Upper
                  </span>
                </div>
                <div className="font-semibold text-neutral-700">
                  Mulai dari Rp150K
                </div>
              </div>

              <div className="flex justify-between py-3">
                <strong>Sewing</strong>
                <div className="font-semibold text-neutral-700">
                  Mulai dari Rp100K
                </div>
              </div>

              <div className="flex justify-between py-3">
                <strong>Suede Restoration</strong>
                <div className="font-semibold text-neutral-700">Rp50K</div>
              </div>

              <div className="flex justify-between py-3">
                <strong>Unyellowing</strong>
                <div className="font-semibold text-neutral-700">Rp70K</div>
              </div>

              <div className="flex justify-between py-3">
                <strong>Whitening</strong>
                <div className="font-semibold text-neutral-700">Rp70K</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-10 py-16 flex justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-start gap-10 px-6">
          <div className="w-full md:w-[60%]">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Layanan Lainnya
            </h2>

            <div className="divide-y divide-neutral-300 text-neutral-800">
              <div className="flex justify-between py-3">
                <div>
                  <strong>Cuci Tas</strong>
                  <br />
                  <span className="text-sm text-neutral-500">
                    Small, Medium, Large, XL, Branded
                  </span>
                </div>
                <div className="font-semibold text-neutral-700">
                  Mulai dari Rp60K
                </div>
              </div>

              <div className="flex justify-between py-3">
                <div>
                  <strong>Cuci Helm</strong>
                  <br />
                  <span className="text-sm text-neutral-500">
                    Half Face, Full Face
                  </span>
                </div>
                <div className="font-semibold text-neutral-700">
                  Mulai dari Rp150K
                </div>
              </div>

              <div className="flex justify-between py-3">
                <strong>Cuci Topi</strong>
                <div className="font-semibold text-neutral-700">
                  Mulai dari Rp100K
                </div>
              </div>

              <div className="flex justify-between py-3">
                <strong>Cuci Koper</strong>
                <div className="font-semibold text-neutral-700">Rp50K</div>
              </div>

              <div className="flex justify-between py-3">
                <strong>Cuci Apparel</strong>
                <div className="font-semibold text-neutral-700">Rp70K</div>
              </div>

              <div className="flex justify-between py-3">
                <strong>Boots Cleaning</strong>
                <div className="font-semibold text-neutral-700">Rp90K</div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[40%]">
            <img
              src="bag.png"
              alt="Cuci Tas"
              className="w-full rounded-3xl object-cover shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
