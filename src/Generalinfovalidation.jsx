import React, { useState, useEffect } from "react";
import {
  validateProductName,
  validateProductSubtittle,
  validateProductDescription,
  validateProductSubCategory,
} from "./Validation";
import { Input } from "@mui/material";
import axios from "axios";

const FormComponent = () => {
  const [userData, setUserData] = useState("");
  const [ProductName, setProductName] = useState("");
  const [ProductSubCategory, setProductSubCategory] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const [ProductSubtittle, setProductSubtittle] = useState("");
  const [StoreAllData, setStoreAllData] = useState([]);

  async function Fetchdata() {
    try {
      const response = await axios.get(`http://localhost:3000/users`, {
        withCredentials: true,
      });
      console.log("GET response:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  async function Adddata() {
    try {
      const response = await axios.post(`http://localhost:3000/users`, {
        // Provide the data you want to send in the request body
      }, {
        withCredentials: true,
      });
      console.log("POST response:", response.data);
    } catch (error) {
      console.error("Error adding data:", error);
    }
  }
  
  useEffect(() => {
    Fetchdata();
    Adddata();
  }, []);
  

  const GeneralVariationArray = [
    {
      name: "ProductName",
      type: "text",
      state: ProductName,
    },
    {
      name: "ProductSubCategory",
      type: "text",
      state: ProductSubCategory,
    },
    {
      name: "ProductSubtittle",
      type: "text",
      state: ProductSubtittle,
    },
    {
      name: "ProductDescription",
      type: "text",
      state: ProductDescription,
    },
  ];
  const [errors, setErrors] = useState(
    GeneralVariationArray?.reduce((acc, item) => {
      return {
        ...acc,
        [item.name]: "",
      };
    }, {})
  );
  const handleInputChange = (e) => {
    setUserData(e.target.value);
    const { name, value } = e.target;
    console.log("name", name, "value", value);
    if (name === "ProductName") {
      setProductName(value);
    }
    if (name === "ProductSubCategory") {
      setProductSubCategory(value);
    }
    if (name === "ProductSubtittle") {
      setProductSubtittle(value);
    }
    if (name === "ProductDescription") {
      setProductDescription(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // let userData;
    setErrors({});
    if (
      ProductName === "" &&
      ProductSubCategory === "" &&
      ProductSubtittle === "" &&
      ProductDescription === ""
    ) {
      alert("Please fill the form");
    } else {
      if (ProductName) {
        if (!validateProductName(ProductName)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            ProductName: "ProductName should be greater than zero",
          }));
        }
      }
      if (ProductSubCategory) {
        if (!validateProductSubCategory(ProductSubCategory)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            ProductSubCategory:
              "ProductSubCategory should be greater than zero",
          }));
        }
      }
      if (ProductSubtittle) {
        if (!validateProductSubtittle(ProductSubtittle)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            ProductSubtittle: "ProductSubtittle should be greater than zero",
          }));
        }
      }
      if (ProductDescription) {
        if (!validateProductDescription(ProductDescription)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            ProductDescription:
              "ProductDescription should be greater than zero",
          }));
        }
      }
    }

    setStoreAllData([
      ...StoreAllData,
      {
        ProductName,
        ProductDescription,
        ProductSubCategory,
        ProductSubtittle,
      },
    ]);
  };
  console.log("data", StoreAllData);

  return (
    <div>
      {GeneralVariationArray?.map((item) => {
        if (item?.type === "text") {
          return (
            <div>
              <label>{item?.name}</label>
              <Input
                value={item?.state}
                type="text"
                name={item?.name}
                onChange={handleInputChange}
              />
              {item?.units?.length > 0 && (
                <select name={item?.name} onChange={handleInputChange}>
                  {item?.values?.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              )}

              {errors[item?.name] && <span>{errors[item?.name]}</span>}
            </div>
          );
        } else if (item?.type === "number") {
          return (
            <div>
              <label>{item?.name}</label>
              <Input
                value={item?.state}
                type="number"
                name={item?.name}
                onChange={handleInputChange}
              />
              {item?.units?.length > 0 && (
                <select>
                  {item?.units?.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              )}

              {errors[item?.name] && <span>{errors[item?.name]}</span>}
            </div>
          );
        } else if (item?.type === "dropdown") {
          return (
            <div>
              <label>{item?.name}</label>
              <select name={item?.name} onChange={handleInputChange}>
                {item?.values?.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
              {item?.units?.length > 0 && (
                <select name={item?.name} onChange={handleInputChange}>
                  {item?.values?.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              )}
              {errors[item?.name] && <span>{errors[item?.name]}</span>}
            </div>
          );
        }
      })}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FormComponent;
