import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const Booking = () => {
  const [orders, setOrders] = useState([]);
  const [services, setServices] = useState([]);
  const [newOrder, setNewOrder] = useState({
    service_id: "",
    name: "",
    address: "",
    shoe_brand: "",
  });
  const [editingOrderId, setEditingOrderId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      alert("Anda harus login terlebih dahulu!");
      navigate("/login");
      return;
    }

    axios
      .get("http://localhost:3000/api/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.error("Error fetching services:", err));

    axios
      .get("http://localhost:3000/api/orders", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setOrders(res.data))
      .catch((err) => {
        console.error("Error fetching orders:", err);
        alert("Terjadi kesalahan saat mengambil pesanan.");
      });
  }, [token, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewOrder((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !newOrder.name ||
      !newOrder.address ||
      !newOrder.shoe_brand ||
      !newOrder.service_id
    ) {
      alert("Harap isi semua kolom");
      return;
    }

    const request = editingOrderId
      ? axios.put(
          `http://localhost:3000/api/orders/${editingOrderId}`,
          newOrder,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
      : axios.post("http://localhost:3000/api/orders", newOrder, {
          headers: { Authorization: `Bearer ${token}` },
        });

    request
      .then((res) => {
        const orderData = editingOrderId ? res.data.updatedOrder : res.data;
        setOrders((prev) => {
          if (editingOrderId) {
            return prev.map((order) =>
              order.id === orderData.id ? orderData : order
            );
          } else {
            return [...prev, orderData];
          }
        });
        alert(
          editingOrderId
            ? "Pesanan berhasil diperbarui!"
            : "Pesanan berhasil dibuat!"
        );
        setNewOrder({ service_id: "", name: "", address: "", shoe_brand: "" });
        setEditingOrderId(null);
      })
      .catch((err) => {
        console.error("Order error:", err);
        const message =
          err.response?.data?.error ||
          "Terjadi kesalahan saat memproses pesanan";
        alert(message);
      });
  };

  const handleDeleteOrder = (id) => {
    axios
      .delete(`http://localhost:3000/api/orders/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setOrders((prev) => prev.filter((order) => order.id !== id));
        alert("Pesanan berhasil dihapus");
        if (editingOrderId === id) {
          setEditingOrderId(null);
          setNewOrder({
            service_id: "",
            name: "",
            address: "",
            shoe_brand: "",
          });
        }
      })
      .catch((err) => {
        console.error("Error deleting order:", err);
        const message =
          err.response?.data?.error ||
          "Terjadi kesalahan saat menghapus pesanan";
        alert(message);
      });
  };

  const handleEditOrder = (id) => {
    const order = orders.find((order) => order.id === id);
    if (!order) return;
    setNewOrder({
      service_id: order.service_id,
      name: order.name,
      address: order.address,
      shoe_brand: order.shoe_brand,
    });
    setEditingOrderId(id);
  };

  const cancelEdit = () => {
    setEditingOrderId(null);
    setNewOrder({ service_id: "", name: "", address: "", shoe_brand: "" });
  };

  return (
    <div className="container mx-auto px-4 py-12 mt-20">
      <div className="bg-white p-8 rounded-2xl shadow-lg mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-700 text-center mb-6">
          {editingOrderId ? "Edit Pesanan Anda" : "Form Pemesanan Cuci Sepatu"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={newOrder.name}
            onChange={handleChange}
            placeholder="Nama Lengkap"
            className="w-full px-4 py-2 border rounded-lg shadow-sm"
            required
          />
          <input
            type="text"
            name="address"
            value={newOrder.address}
            onChange={handleChange}
            placeholder="Alamat Lengkap"
            className="w-full px-4 py-2 border rounded-lg shadow-sm"
            required
          />
          <input
            type="text"
            name="shoe_brand"
            value={newOrder.shoe_brand}
            onChange={handleChange}
            placeholder="Merk Sepatu"
            className="w-full px-4 py-2 border rounded-lg shadow-sm"
            required
          />
          <select
            name="service_id"
            value={newOrder.service_id}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg shadow-sm"
            required
          >
            <option value="">Pilih Layanan</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name} - {service.price} IDR
              </option>
            ))}
          </select>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {editingOrderId ? "Simpan Perubahan" : "Pesan Sekarang"}
            </button>
            {editingOrderId && (
              <button
                type="button"
                onClick={cancelEdit}
                className="w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500 transition"
              >
                Batal
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
          Riwayat Pemesanan Anda
        </h2>

        <div className="mb-6 max-w-lg mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Cari berdasarkan nama..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {orders.length === 0 ? (
          <p className="text-center text-gray-500">Belum ada pesanan</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {orders
              .filter((order) =>
                order.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((order) => (
                <div
                  key={order.id}
                  className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {order.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Alamat:</strong> {order.address}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Merk Sepatu:</strong> {order.shoe_brand}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Layanan ID:</strong> {order.service_id}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Waktu Pesan:</strong>{" "}
                    {new Date(order.created_at).toLocaleString()}
                  </p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditOrder(order.id)}
                      className="flex-1 bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteOrder(order.id)}
                      className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
