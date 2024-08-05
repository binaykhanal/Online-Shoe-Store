import { useState } from "react";

const CheckoutForm = ({ onCheckout }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    paymentInfo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckout(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
      />
      <input
        type="text"
        name="paymentInfo"
        value={formData.paymentInfo}
        onChange={handleChange}
        placeholder="Payment Info"
      />
      <button type="submit">Checkout</button>
    </form>
  );
};

export default CheckoutForm;
