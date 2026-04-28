// src/pages/helpcenter/index.js
import React, { useState } from "react";
import './HelpCenter.css';

const HelpCenter = () => {
  // ---- State ----
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [message, setMessage] = useState("");
  const [responseMsg, setResponseMsg] = useState(""); // AI reply

  // ---- Submit Handler (fixed for n8n) ----
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { name, email, orderNumber, message };
    console.log("Sending payload to n8n:", payload);

    try {
      const response = await fetch("/webhook-test/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data;
      try {
        data = await response.json();
        console.log("Response from n8n:", data);
      } catch (err) {
        console.error("Failed to parse JSON:", err);
        setResponseMsg("Error: Invalid response from server.");
        return;
      }

      // Show the AI reply from n8n
      setResponseMsg(data.reply || "Message sent successfully!");

      if (response.ok) {
        // Reset form fields
        setName("");
        setEmail("");
        setOrderNumber("");
        setMessage("");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setResponseMsg("Error sending message. Check your connection or server.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-lg md:p-10">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">Help Center</h1>
        <p className="mb-8 text-gray-600">
          Welcome to our Help Center. Here you can find answers to common questions, get support, and contact our team.
        </p>

        {/* Contact Form */}
        <section className="contact-section mb-10">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Contact Support</h2>

          <form className="contact-form space-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded border p-2"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded border p-2"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              placeholder="Order Number (optional)"
              className="w-full rounded border p-2"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
            />

            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full rounded border p-2"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
              type="submit"
              className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Send Message
            </button>
          </form>

          {/* ✅ AI RESPONSE BOX */}
          {responseMsg && (
            <div className="mt-4 rounded bg-green-100 p-3 text-green-800">
              <strong>AI Reply:</strong> {responseMsg}
            </div>
          )}
        </section>

        {/* Contact Info */}
        <section className="mb-10">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Contact Us</h2>
          <p className="mb-4 text-gray-600">If you have any questions, feel free to reach out.</p>
          <div className="space-y-2 text-gray-700">
            <p><strong>Email:</strong> support@yourstore.com</p>
            <p><strong>Phone:</strong> +92 300 1234567</p>
          </div>
        </section>

        {/* Map */}
        <section className="map-section">
          <h2 className="mb-3 text-xl font-semibold text-gray-800">Our Office Location</h2>
          <iframe
            title="office-map"
            src="https://www.google.com/maps?q=Rawalpindi%20Pakistan&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </section>
      </div>
    </div>
  );
};

export default HelpCenter;