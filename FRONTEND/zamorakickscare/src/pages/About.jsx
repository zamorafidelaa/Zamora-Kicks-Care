import React from "react";

export default function About() {
  return (
    <section className="w-full bg-white py-20 px-6 flex justify-center mt-20">
      <div className="max-w-5xl w-full text-center space-y-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-6 transition-all hover:text-blue-600">
          Tentang Zamora Kicks Care
        </h2>

        <p className="text-lg text-blue-700 leading-relaxed">
          <strong className="font-bold text-blue-900">Zamora Kicks Care</strong> hadir sebagai
          solusi perawatan sepatu yang mengutamakan kualitas, kepercayaan, dan kepuasan
          pelanggan. Kami percaya bahwa setiap sepatu punya cerita, dan tugas kami adalah
          merawatnya agar tetap nyaman, bersih, dan awet digunakan.
        </p>

        <p className="mt-4 text-lg text-blue-700 leading-relaxed">
          Berawal dari kecintaan terhadap sneakers dan fashion, Zamora Kicks Care berkembang
          menjadi layanan profesional yang menawarkan berbagai treatment mulai dari{" "}
          <strong>cleaning, repainting, restorasi suede, hingga reparasi</strong>. Kami
          menggunakan bahan premium dan teknik khusus yang disesuaikan dengan jenis serta
          material sepatu Anda.
        </p>

        <p className="mt-4 text-lg text-blue-700 leading-relaxed">
          Di Zamora, kami tidak hanya membersihkan—kami <strong>merawat dengan hati</strong>.
        </p>

        <div className="mt-12 bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-800">Mengapa Pilih Kami?</h3>
          <ul className="list-disc list-inside mt-4 text-blue-700 space-y-3">
            <li>✔ Tim profesional & berpengalaman</li>
            <li>✔ Layanan pickup & delivery</li>
            <li>✔ Garansi hasil pengerjaan</li>
            <li>✔ Harga transparan dan layanan konsultasi gratis</li>
          </ul>
        </div>

        <div className="mt-8">
          <p className="text-lg text-blue-700 leading-relaxed">
            Mari jaga sepatu kesayanganmu bersama <strong className="text-blue-900">Zamora
            Kicks Care</strong> — karena sepatumu pantas mendapat perawatan terbaik.
          </p>
        </div>
      </div>
    </section>
  );
}
