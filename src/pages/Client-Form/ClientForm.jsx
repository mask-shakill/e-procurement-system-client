import React, { useState } from "react";
const ClientForm = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [criteriaList, setCriteriaList] = useState([{ option: "", score: "" }]);

  const handleCriteriaChange = (index, key, value) => {
    const updatedCriteriaList = [...criteriaList];
    updatedCriteriaList[index][key] = value;
    setCriteriaList(updatedCriteriaList);
  };

  const handleAddCriteria = () => {
    setCriteriaList([...criteriaList, { option: "", score: "" }]);
  };

  const handleRemoveCriteria = (index) => {
    const updatedCriteriaList = [...criteriaList];
    updatedCriteriaList.splice(index, 1);
    setCriteriaList(updatedCriteriaList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { productName, quantity, criteriaList });
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-center text-2xl font-bold mb-4">Tender Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex mb-4">
          <div className="w-1/3 mr-2">
            <label className="block text-sm font-medium text-gray-600">
              Product Name
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="w-1/3 mr-2">
            <label className="block text-sm font-medium text-gray-600">
              Quantity
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="w-1/3">
            <label className="block text-sm font-medium text-gray-600">
              Criteria
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Criteria"
              // Additional logic for Criteria field, if needed
            />
          </div>
        </div>
        {criteriaList.map((criteria, index) => (
          <div key={index} className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label className="block text-sm font-medium text-gray-600">
                Option
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Option"
                value={criteria.option}
                onChange={(e) =>
                  handleCriteriaChange(index, "option", e.target.value)
                }
              />
            </div>
            <div className="w-1/2 mr-2">
              <label className="block text-sm font-medium text-gray-600">
                Score
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Score"
                value={criteria.score}
                onChange={(e) =>
                  handleCriteriaChange(index, "score", e.target.value)
                }
              />
            </div>
            <button
              type="button"
              className="bg-red-500 text-white p-2 rounded-md"
              onClick={() => handleRemoveCriteria(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="bg-green-500 text-white p-2 rounded-md"
          onClick={handleAddCriteria}
        >
          Add Criteria
        </button>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClientForm;
