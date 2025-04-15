import React from "react";

export default function CaraKerja() {
  return (
    <section className="w-full bg-white py-20 px-4 flex justify-center mt-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center mb-12">
          Cara Kerja Kami
        </h2>

        <div className="space-y-16">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="text-blue-600 text-6xl font-bold">1.</div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-800">
                Hubungi Kami
              </h3>
              <p className="mt-2 text-blue-700">
                Hubungi tim Zamora Kicks untuk konsultasi gratis mengenai sepatu
                yang ingin kamu cuci. Tim kami akan memberikan rekomendasi
                terbaik untuk perawatan berdasarkan jenis sepatumu. Setiap
                pertanyaan dan masalah yang kamu ajukan akan kami tanggapi
                dengan profesional dengan cara hingga teknik yang tepat. Jadi
                tunggu apalagi, yuk hubungi SiBersih sekarang!
              </p>
              <a
                href="https://wa.me/6287763323044"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="text-blue-600 text-6xl font-bold">2.</div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-800">
                Pickup / Drop Barang
              </h3>
              <p className="mt-2 text-blue-700">
                Setelah konsultasi, kamu bisa request pickup sepatu atau apparel
                ke lokasi kamu. Tim kami akan memberikan informasi terkait waktu
                dan biaya tambahan jika lokasimu di luar area layanan. Kamu juga
                bisa menghitung total biaya menggunakan kalkulator kami.
              </p>
              <div className="flex flex-wrap gap-3 mt-4"></div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="text-blue-600 text-6xl font-bold">3.</div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-800">
                Proses Pengerjaan
              </h3>
              <p className="mt-2 text-blue-700">
                Proses dilakukan sesuai SOP kami dengan tahapan screening,
                pengerjaan, QC, dan finishing. Semua tahapan disesuaikan dengan
                bahan sepatu kamu agar hasilnya maksimal. Proses standar 3-4
                hari, atau lebih cepat jika express.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="text-blue-600 text-6xl font-bold">4.</div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-800">
                Pengembalian Barang
              </h3>
              <p className="mt-2 text-blue-700">
                Tim kami akan menghubungi kamu saat pengerjaan selesai. Kamu
                bisa ambil sendiri atau minta kami antar lagi ke tempatmu.
                Jangan lupa cek kembali hasilnya, dan kalau belum puas, langsung
                klaim garansi gratis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
