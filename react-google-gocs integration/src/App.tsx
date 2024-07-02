import { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbx8kg1DetpafmvKom2NB0MlU3AikVen67RcB2X4Ot0bQLin9tEs7xNIcg4i4cd_on9Y4Q/exec"; // Replace with your Google Apps Script Web App URL

    const postData = new URLSearchParams();
    postData.append("name", formData.name);
    postData.append("email", formData.email);

    try {
      await fetch(scriptUrl, {
        method: "POST",
        body: postData,
      });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
