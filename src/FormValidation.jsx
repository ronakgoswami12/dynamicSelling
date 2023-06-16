import React, { useState } from "react";

import {
  validateProductColor,
  validatePricePerUnit,
  validateDiscountedPriceWithPricePerUnit,
  validateMinOrderQuantityWithMaxOrderQuantity,
  validateHSNCode,
  validateGST,
  validateProductIdType,
  validateSampleavailability,
  validateLength,
  validateWidth,
  validateHeight,
  validateSampleMinOrderQuantity,
  validateGender,
  validateFlavor,
  validateMRP,
  validatePriceofsample,
  validateUnit,
} from "./Validation";
import { Input } from "@mui/material";

const FormComponent = () => {
  const [Gender, setGender] = useState("");
  const [Flavor, setFlavor] = useState("");
  const [ProductColor, setProductColor] = useState("");
  const [MRP, setMRP] = useState("");
  const [PricePerUnit, setPricePerUnit] = useState("");
  const [DiscountedPrice, setDiscountedPrice] = useState("");
  const [MinOrderQuantity, setMinOrderQuantity] = useState("");
  const [MaxOrderQuantity, setMaxOrderQuantity] = useState("");
  const [HSN, setHSN] = useState("");
  const [GST, setGST] = useState("");
  const [ProductIdType, setProductIdType] = useState("");
  const [SampleAvailable, setSampleAvailable] = useState("");
  const [SampleMinOrderQuantity, setSampleMinOrderQuantity] = useState("");
  const [PriceOfSample, setPriceOfSample] = useState("");
  const [Unit, setUnit] = useState("");
  const [Length, setLength] = useState("");
  const [Width, setWidth] = useState("");
  const [Height, setHeight] = useState("");
  const [HeightUnits, setHeightUnits] = useState("");
  const [WidthUnits, setWidthUnits] = useState("");
  const [LengthUnits, setLengthUnits] = useState("");
  const [userData, setUserData] = useState("");

  function convertToCentimeters(value, unit) {
    let centimeters = 0;

    switch (unit) {
      case "mm":
        centimeters = value / 10;
        break;
      case "m":
        centimeters = value * 100;
        break;
      default:
        centimeters = value;
        break;
    }

    return centimeters;
  }

  const ProductVariationArray = [
    {
      name: "Gender",
      type: "dropdown",
      values: ["male", "female", "unisex"],
      state: Gender,
    },
    {
      name: "Flavor",
      type: "dropdown",
      values: ["chocolate", "vanilla", "strawberry"],
      state: Flavor,
    },
    {
      name: "ProductColor",
      type: "text",
      units: ["red", "blue", "green"],
      state: ProductColor,
    },
    {
      name: "MRP",
      type: "number",
      state: MRP,
    },
    {
      name: "PricePerUnit",
      type: "number",
      state: PricePerUnit,
    },
    {
      name: "DiscountedPrice",
      type: "number",
      state: DiscountedPrice,
    },

    {
      name: "MinOrderQuantity",
      type: "number",
      state: MinOrderQuantity,
    },

    {
      name: "MaxOrderQuantity",
      type: "number",
      state: MaxOrderQuantity,
    },

    {
      name: "HSN",
      type: "number",
      state: HSN,
    },

    {
      name: "GST",
      type: "number",
      state: GST,
    },

    {
      name: "ProductIdType",
      type: "text",
      state: ProductIdType,
    },

    {
      name: "SampleAvailable",
      type: "text",
      state: SampleAvailable,
    },

    {
      name: "SampleMinOrderQuantity",
      type: "number",
      state: SampleMinOrderQuantity,
    },

    {
      name: "PriceOfSample",
      type: "number",
      state: PriceOfSample,
    },

    {
      name: "Unit",
      type: "text",
      state: Unit,
    },
    {
      name: "Length",
      type: "number",
      units: ["cm", "m", "mm"],
      state: Length,
    },
    {
      name: "Width",
      type: "number",
      units: ["cm", "m", "mm"],
      state: Width,
    },
    {
      name: "Height",
      type: "number",
      units: ["cm", "m", "mm"],
      state: Height,
    },
  ];

  const [errors, setErrors] = useState(
    ProductVariationArray?.reduce((acc, item) => {
      return {
        ...acc,
        [item.name]: "",
      };
    }, {})
  );
  const [data, setData] = useState([]);

  const handleInputChange = (e) => {
    setUserData(e.target.value);
    const { name, value } = e.target;
    console.log("name", name, "value", value);
    if (name === "Gender") {
      setGender(value);
    }
    if (name === "Flavor") {
      setFlavor(value);
    }
    if (name === "ProductColor") {
      setProductColor(value);
    } else if (name === "PricePerUnit") {
      setPricePerUnit(value);
    }
    if (name === "MinOrderQuantity") {
      setMinOrderQuantity(value);
    }
    if (name === "MaxOrderQuantity") {
      setMaxOrderQuantity(value);
    }
    if (name === "HSN") {
      setHSN(value);
    }
    if (name === "GST") {
      setGST(value);
    }
    if (name === "ProductIdType") {
      setProductIdType(value);
    }
    if (name === "SampleAvailable") {
      setSampleAvailable(value);
    }
    if (name === "SampleMinOrderQuantity") {
      setSampleMinOrderQuantity(value);
    }
    if (name === "PriceOfSample") {
      setPriceOfSample(value);
    }
    if (name === "Unit") {
      setUnit(value);
    }
    if (name === "MRP") {
      setMRP(value);
    }
    if (name === "DiscountedPrice") {
      setDiscountedPrice(value);
    }

    if (name === "Length") {
      const centimeters = convertToCentimeters(value, LengthUnits);
      setLength(centimeters);
    } else if (name === "Width") {
      const centimeters = convertToCentimeters(value, WidthUnits);
      setWidth(centimeters);
    } else if (name === "Height") {
      const centimeters = convertToCentimeters(value, HeightUnits);
      setHeight(centimeters);
    }
  };

  let ProductVariationData = [];

  // const pushUserData = (userData) => {
  //   console.log("Pushing user data:", userData);

  //   console.log("User data pushed successfully!");
  // };
  const handleSubmit = (e) => {
    pushUserData(userData);
    e.preventDefault();

    let userData;
    setErrors({});
    if (
      Gender === "" &&
      Flavor === "" &&
      ProductColor === "" &&
      MRP === "" &&
      PricePerUnit === "" &&
      DiscountedPrice === "" &&
      MinOrderQuantity === "" &&
      MaxOrderQuantity === "" &&
      HSN === "" &&
      GST === "" &&
      ProductIdType === "" &&
      SampleAvailable === "" &&
      SampleMinOrderQuantity === "" &&
      PriceOfSample === "" &&
      Unit === "" &&
      Length === "" &&
      Width === "" &&
      Height === ""
    ) {
      alert("Please fill the form");
    } else {
      // console.log("dsfhgd", Gender, PricePerUnit);
      if (Gender) {
        if (!validateGender(Gender)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            Gender: "Invalid email format",
          }));
        }
      }
      if (ProductColor) {
        if (!validateProductColor(ProductColor)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            ProductColor: "Password should be at least 8 characters long",
          }));
        }
      }
      if (Flavor) {
        if (!validateFlavor(Flavor)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            Flavor: "Length of flavor should be greater than zero",
          }));
        }
      }
      if (MRP) {
        if (!validateMRP(MRP)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            MRP: "Length of MRP should be greater than zero",
          }));
        }
      }
      if (ProductIdType) {
        if (!validateProductIdType(ProductIdType)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            ProductIdType: "Product id type should be greater than zero",
          }));
        }
      }
      if (SampleAvailable) {
        if (!validateSampleavailability(SampleAvailable)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            SampleAvailable: "Sample availability should be greater than zero",
          }));
        }
      }
      if (SampleMinOrderQuantity) {
        if (!validateSampleMinOrderQuantity(SampleMinOrderQuantity)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            SampleMinOrderQuantity:
              "Sample minimum order quantity should be greater than zero",
          }));
        }
      }
      if (PriceOfSample) {
        if (!validatePriceofsample(PriceOfSample)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            PriceOfSample: "Price of sample should be greater than zero",
          }));
        }
      }
      if (Unit) {
        if (!validateUnit(Unit)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            Unit: "Unit should be greater than zero",
          }));
        }
      }
      if (Length) {
        if (!validateLength(Length)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            Length: "Length should be greater than zero",
          }));
        }
      }
      if (Width) {
        if (!validateWidth(Width)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            Width: "Length should be greater than zero",
          }));
        }
      }
      if (Height) {
        if (!validateHeight(Height)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            Height: "Length should be greater than zero",
          }));
        }
      }
      if (HSN) {
        if (!validateGST(HSN)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            HSN: "Length should be greater than zero",
          }));
        }
      }
      if (GST) {
        if (!validateGST(GST)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            GST: "Length should be greater than zero",
          }));
        }
      }

      if (
        MinOrderQuantity &&
        !validateMinOrderQuantityWithMaxOrderQuantity(
          MinOrderQuantity,
          MaxOrderQuantity
        )
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          MinOrderQuantity:
            "Min order quantity should be less than max order quantity",
        }));
      }
      if (
        MaxOrderQuantity &&
        !validateMinOrderQuantityWithMaxOrderQuantity(
          MinOrderQuantity,
          MaxOrderQuantity
        )
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          MaxOrderQuantity:
            "Max order quantity should be greater than min order quantity",
        }));
      }
      if (
        DiscountedPrice &&
        !validateDiscountedPriceWithPricePerUnit(DiscountedPrice, PricePerUnit)
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          DiscountedPrice:
            "Discounted price should be less than price per unit",
        }));
      }
      if (
        PricePerUnit &&
        !validateDiscountedPriceWithPricePerUnit(DiscountedPrice, PricePerUnit)
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          PricePerUnit:
            "price per unit should be greater than discounted price",
        }));
      }
    }
    userData = {
      Gender,
      Flavor,
      ProductColor,
      MRP,
      PricePerUnit,
      DiscountedPrice,
      MinOrderQuantity,
      MaxOrderQuantity,
      HSN,
      GST,
      ProductIdType,
      SampleAvailable,
      SampleMinOrderQuantity,
      PriceOfSample,
      Unit,
      Length,
      Width,
      Height,
    };

    ProductVariationData.push[{ userData: userData }];
  };

  return (
    <div>
      {ProductVariationArray?.map((item) => {
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
                <select
                  onChange={(e) => {
                    if (item?.name === "Height") {
                      setHeightUnits(e.target.value);
                      setHeight(convertToCentimeters(Height, e.target.value));
                    } else if (item?.name === "Length") {
                      setLengthUnits(e.target.value);
                      setLength(convertToCentimeters(Length, e.target.value));
                    } else if (item?.name === "Width") {
                      setWidthUnits(e.target.value);
                      setWidth(convertToCentimeters(Width, e.target.value));
                    }
                  }}
                >
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
      <button onSubmit={handleSubmit}>Submit</button>
    </div>
  );
};

export default FormComponent;
