# Zamora Kicks Care 👟🧼

Zamora Kicks Care adalah website layanan cuci sepatu modern yang dirancang khusus untuk pengguna yang ingin memesan layanan pencucian sepatu secara online dengan mudah dan cepat.

---

## 📝 Deskripsi

Zamora Kicks Care membantu pelanggan untuk:
- Mendaftar dan login sebagai user
- Memilih layanan cuci sepatu
- Mengisi detail pesanan

---

## ✨ Fitur

### Untuk User:
- Registrasi dan login
- Melihat daftar layanan cuci sepatu
- Melakukan pemesanan dengan data lengkap


## 🗂 Entity Relationship Diagram (ERD)

Berikut adalah ERD dari aplikasi Zamora Kicks Care:

![ERD Zamora Kicks Care](./image.png)

**Tabel:**

- `users`
  - `id` (PK)
  - `name`
  - `email`
  - `password`
  - `role`

- `services`
  - `id` (PK)
  - `name`
  - `description`
  - `price`

- `orders`
  - `id` (PK)
  - `user_id` (FK → users.id)
  - `service_id` (FK → services.id)
  - `name`
  - `address`
  - `shoe_brand`
  - `created_at`

---

## 🛠 Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- Axios

**Backend:**
- Node.js + Express.js
- JSON Web Token (JWT) untuk autentikasi

**Database:**
- PostgreSQL
- Supabase 

**Tools:**
- DBeaver (untuk manajemen database)
- Postman (untuk testing API)
- Git & GitHub (versi kontrol)

---

> Dibuat oleh Mora Fidela ❤️
