import React, { useState } from "react";
import axios from "axios";

const SendMoney = () => {
  const [recipientPhone, setRecipientPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMoney = async (e) => {
    e.preventDefault();

    // const token = localStorage.getItem('token'); // Assumes token is stored in localStorage

    try {
      const response = await axios.post(
        "http://localhost:5000/send-money",
        {
          recipientPhone,
          amount: parseFloat(amount),
          pin,
        }
        // {
        //   headers: {
        //     'x-access-token': token,
        //   },
        // }
      );

      setMessage(response.data);
    } catch (error) {
      setMessage(error.response ? error.response.data : "Error occurred");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Send Money</h2>
        <form onSubmit={handleSendMoney}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Recipient Phone Number:
            </label>
            <input
              type="text"
              value={recipientPhone}
              onChange={(e) => setRecipientPhone(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 bg-transparent rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Amount:
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 bg-transparent rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              PIN:
            </label>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 bg-transparent rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition duration-200"
          >
            Send Money
          </button>
        </form>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default SendMoney;
