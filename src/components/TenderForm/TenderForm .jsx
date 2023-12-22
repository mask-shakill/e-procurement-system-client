import { MdDelete } from "react-icons/md";
import React, { useState } from "react";

const DynamicForm = () => {
  const [formData, setFormData] = useState([
    { type: "", details: [{ name: "", price: "" }] },
  ]);

  const addField = () => {
    setFormData([
      ...formData,
      { type: "", details: [{ name: "", price: "" }] },
    ]);
  };

  const addInnerField = (index) => {
    const updatedFormData = [...formData];
    updatedFormData[index].details.push({ name: "", price: "" });
    setFormData(updatedFormData);
  };

  const handleInputChange = (index, field, value) => {
    const updatedFormData = [...formData];
    updatedFormData[index][field] = value;
    setFormData(updatedFormData);
  };

  const handleInnerInputChange = (outerIndex, innerIndex, field, value) => {
    const updatedFormData = [...formData];
    updatedFormData[outerIndex].details[innerIndex][field] = value;
    setFormData(updatedFormData);
  };

  const removeField = (index) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
  };

  const removeInnerField = (outerIndex, innerIndex) => {
    const updatedFormData = [...formData];
    updatedFormData[outerIndex].details.splice(innerIndex, 1);
    setFormData(updatedFormData);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-2 mx-10 bg-slate-300 rounded-xl p-5">
      <h1 className="text-xl font-bold text-slate-800 uppercase">
        Procurement Form
      </h1>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Product Name
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Product Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Quantity
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Quantity"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Number of Criteria
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Number of Criteria"
          />
        </div>

        {formData.map((field, outerIndex) => (
          <div key={outerIndex} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">{`Criteria ${
              outerIndex + 1
            }`}</label>
            <div>
              <input
                type="text"
                value={field.type}
                onChange={(e) =>
                  handleInputChange(outerIndex, "type", e.target.value)
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                placeholder="Product Type"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {field.details.map((innerField, innerIndex) => (
                <div key={innerIndex}>
                  <label className="block text-gray-700 text-sm font-bold mb-2">{`Specification ${
                    innerIndex + 1
                  }`}</label>
                  <input
                    type="text"
                    value={innerField.name}
                    onChange={(e) =>
                      handleInnerInputChange(
                        outerIndex,
                        innerIndex,
                        "name",
                        e.target.value
                      )
                    }
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                    placeholder="Enter Option"
                  />
                  <input
                    type="text"
                    value={innerField.price}
                    onChange={(e) =>
                      handleInnerInputChange(
                        outerIndex,
                        innerIndex,
                        "price",
                        e.target.value
                      )
                    }
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                    placeholder="Enter Score"
                  />
                  <button
                    type="button"
                    onClick={() => removeInnerField(outerIndex, innerIndex)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2"
                  >
                    <MdDelete />
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => addInnerField(outerIndex)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2"
            >
              Add Options and Score
            </button>
            {/* <button
            type="button"
            onClick={() => removeField(outerIndex)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2"
          >
            Remove
          </button> */}
          </div>
        ))}

        <button
          type="button"
          onClick={addField}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Criteria
        </button>
      </div>
    </div>
  );
};

export default DynamicForm;
