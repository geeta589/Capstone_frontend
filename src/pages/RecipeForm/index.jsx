import { useState } from "react";
import NavBar from "../../components/NavBar";

export default function SearchRecp(searchRec) {
  const [formData, setFormData] = useState({
    searchTerm: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.Meal]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchRec(formData.searchTerm);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchTerm"
          value={formData.searchTerm}
          onChange={handleChange}
        />
        <input type="Submit" />
      </form>
    </div>
  );
}
