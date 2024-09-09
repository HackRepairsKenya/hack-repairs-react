import Footer from "@/components/mainlayout/Footer";
import Navbar from "@/components/mainlayout/Navbar";
import React, { useState } from "react";

interface BookingFormData {
  name: string;
  phone: string;
  address: string;
  repairDate: string;
}

const BookingPage: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    phone: "",
    address: "",
    repairDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally, you would send the form data to a backend or API here
    console.log("Form Data:", formData);
  };

  return (
    <div>
        <Navbar />
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book a Repair Service</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-lg">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-lg">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="repairDate" className="block text-lg">Preferred Repair Date</label>
          <input
            type="date"
            id="repairDate"
            name="repairDate"
            value={formData.repairDate}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <button type="submit" className="bg-button p-2 rounded-lg text-white">Submit Booking</button>
      </form>
    </div>
    <Footer />
    </div>
  );
};

export default BookingPage;
