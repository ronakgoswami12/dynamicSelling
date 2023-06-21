import React, { useState, useEffect } from "react";

import {
  validateProductColor,
  validateBrandName,
  validateOfferingThisBrandingAt,
  validateOfferingAT,
  validateTotalQuantity,
  validateShelfLife,
  validateProductQuantity,
  validateDiscountedPriceWithPricePerUnit,
  validateMinOrderQuantityWithMaxOrderQuantity,
  validateRegionWithStateWithCityWithPincode,
  validateHSNCode,
  validateProductSize,
  validateGST,
  validateProductIdType,
  validateSampleavailability,
  validateSampleMinOrderQuantity,
  validateGender,
  validateFlavor,
  validateMRP,
  validatePriceofsample,
  validateUnit,
  validateRoomType,
  validateTotalValueUploaded,
  validateValidityOfVoucher,
  validateTotalPrice,
  validateDateOfEvent,
  validateTimeline,
  validateRepetition,
  validateDisplayDimensionSize,
  validatePrice,
  validateSellerCompanyName,
  validateQuantity,
  validateLocation
} from "./Validation";
import { Input } from "@mui/material";

const FormComponent = () => {
  const [Form, setForm] = useState("");

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
  const [SellerCompanyName, setSellerCompanyName] = useState("");
  const [ProductIdType, setProductIdType] = useState("");
  const [ProductSize, setProductSize] = useState("");

  const [SampleAvailable, setSampleAvailable] = useState("");
  const [SampleMinOrderQuantity, setSampleMinOrderQuantity] = useState("");
  const [PriceOfSample, setPriceOfSample] = useState("");
  const [Unit, setUnit] = useState("");

  const [RoomType, setRoomType] = useState("");
  const [TotalValueUploaded, setTotalValueUpload] = useState("");
  const [ValidityOfVoucher, setValidityOfVoucher] = useState("");
  const [TotalQuantity, setTotalQuantity] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [TotalPrice, setTotalPrice] = useState("");
  const [DateOfEvent, setDateOfEvent] = useState("");
  const [Timeline, setTimeline] = useState("");
  const [Repetition, setRepetition] = useState("");
  const [DisplayDimensionSize, setDisplayDimensionSize] = useState("");
  const [Price, setPrice] = useState("");
  const [Region, setRegion] = useState("");
  const [State, setState] = useState("");
  const [City, setCity] = useState("");
  const [Landmark, setLandmark] = useState("");
  const [Sampleavailability, setSampleavailability] = useState("");
  const [Area, setArea] = useState("");
  const [BrandName, setBrandName] = useState("");
  const [OfferingThisBrandingAt, setOfferingThisBrandingAt] = useState("");
  const [OfferingAT, setOfferingAT] = useState("");
  const [ShelfLife, setShelfLife] = useState("");
  const [ProductQuantity, setProductQuantity] = useState("");
  const [Location,setLocation] = useState("");
  const [userData, setUserData] = useState("");
  const [StoreAllData, setStoreAllData] = useState([]);
  // const [ProductVariationData, setProductVariationData] = useState([]);

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
      name: "SellerCompanyName",
      type: "number",
      state: SellerCompanyName,
    },

    {
      name: "ProductIdType",
      type: "text",
      state: ProductIdType,
    },
    {
      name: "PriceOfSample",
      type: "text",
      state: PriceOfSample,
    },
    {
      name: "ProductSize",
      type: "text",
      state: ProductSize,
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
      name: "Unit",
      type: "text",
      state: Unit,
    },

    {
      name: "RoomType",
      type: "text",
      state: RoomType,
    },
    {
      name: "TotalValueUploaded",
      type: "number",
      state: TotalValueUploaded,
    },
    {
      name: "ValidityOfVoucher",
      type: "text",
      state: ValidityOfVoucher,
    },
    {
      name: "TotalQuantity",
      type: "number",
      state: TotalQuantity,
    },
    {
      name: "Quantity",
      type: "number",
      state: Quantity,
    },
    {
      name: "Location",
      type: "number",
      state: Location,
    },
    {
      name: "TotalPrice",
      type: "number",
      state: TotalPrice,
    },
    {
      name: "DateOfEvent",
      type: "date",
      state: DateOfEvent,
    },
    {
      name: "Timeline",
      type: "text",
      state: Timeline,
    },
    {
      name: "Repetition",
      type: "text",
      state: Repetition,
    },
    {
      name: "DisplayDimensionSize",
      type: "text",
      state: DisplayDimensionSize,
    },
    {
      name: "Price",
      type: "number",
      state: Price,
    },
    {
      name: "Region",
      type: "text",
      units: ["West", "East", "North", "South"],
      state: Region,
    },
    {
      name: "State",
      type: "text",
      state: State,
    },
    {
      name: "City",
      type: "text",
      state: City,
    },
    {
      name: "Landmark",
      type: "text",
      state: Landmark,
    },
    {
      name: "Area",
      type: "text",
      state: Area,
    },
    {
      name: "ProductQuantity",
      type: "number",
      state: ProductQuantity,
    },
    {
      name: "BrandName",
      type: "number",
      state: BrandName,
    },
    {
      name: "OfferingThisBrandingAt",
      type: "number",
      state: OfferingThisBrandingAt,
    },
    {
      name: "OfferingAT",
      type: "number",
      state: OfferingAT,
    },
    {
      name: "ShelfLife",
      type: "number",
      state: ShelfLife,
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
  // const [data, setData] = useState([]);

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
    if (name === "BrandName") {
      setBrandName(value);
    }
    if (name === "OfferingThisBrandingAt") {
      setOfferingThisBrandingAt(value);
    }
    if (name === "OfferingAt") {
      setOfferingAT(value);
    }
    if (name === "TotalQuantity") {
      setTotalQuantity(value);
    }
    if (name === "ShelfLife") {
      setShelfLife(value);
    }
    if (name === "ProductQuantity") {
      setProductQuantity(value);
    }
    if (name === "Region") {
      setRegion(value);
    }
    if (name === "Area") {
      setArea(value);
    }
    if (name === "State") {
      setState(value);
    }
    if (name === "City") {
      setCity(value);
    }
    if (name === "Landmark") {
      setLandmark(value);
    }
    if (name === "ProductSize") {
      setProductSize(value);
    }
    if (name === "ProductIdType") {
      setProductIdType(value);
    }
    if (name === "SampleAvailability") {
      setSampleavailability(value);
    }

    if (name === "RoomType") {
      setRoomType(value);
    }
    if (name === "TotalValueUploaded") {
      setTotalValueUpload(value);
    }
    if (name === "TotalPrice") {
      setTotalPrice(value);
    }
    if (name === "DateOfEvent") {
      setDateOfEvent(value);
    }
    if (name === "Timeline") {
      setTimeline(value);
    }
    if (name === "Repetition") {
      setRepetition(value);
    }
    if (name === "DisplayDimensionsize") {
      setDisplayDimensionSize(value);
    }
    if (name === "Price") {
      setPrice(value);
    }
    if (name === "SellerCompanyName") {
      setSellerCompanyName(value);
    }
    if (name === "Quantity") {
      setQuantity(value);
    }
    if (name === "Location") {
      setLocation(value);
    }
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // let userData;
    setErrors({});
    if (
      ProductColor === "" &&
      BrandName === "" &&
      OfferingThisBrandingAt === "" &&
      OfferingAT === "" &&
      TotalQuantity === "" &&
      ShelfLife === "" &&
      ProductQuantity === "" &&
      DiscountedPrice === "" &&
      PricePerUnit === "" &&
      MinOrderQuantity === "" &&
      MaxOrderQuantity === "" &&
      Region === "" &&
      City === "" &&
      Area === "" &&
      State === "" &&
      HSN === "" &&
      ProductSize === "" &&
      GST === "" &&
      ProductIdType === "" &&
      Sampleavailability === "" &&
      SampleMinOrderQuantity === "" &&
      Gender === "" &&
      Flavor === "" &&
      MRP === "" &&
      PriceOfSample === "" &&
      Unit === "" &&
      RoomType === "" &&
      TotalValueUploaded === "" &&
      ValidityOfVoucher === "" &&
      TotalPrice === "" &&
      DateOfEvent === "" &&
      Timeline === "" &&
      Repetition === "" &&
      DisplayDimensionSize === "" &&
      Price === "" &&
      SellerCompanyName === "" &&
      Quantity === "" &&
      Location === "" 
    ) {
      alert("Please fill the form");
    } else {
      if (HSN) {
        if (!validateHSNCode(HSN)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            HSN: "Length should be greater than zero",
          }));
        }
      }

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
      if (ProductSize) {
        if (!validateProductSize(ProductSize)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            ProductSize: "Product size should be greater than zero",
          }));
        }
      }

      if (ProductQuantity) {
        if (!validateProductQuantity(ProductQuantity)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            ProductQuantity: "Product quality should be greater than zero",
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

      if (RoomType) {
        if (!validateRoomType(RoomType)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            RoomType: "Length should be greater than zero",
          }));
        }
      }
      if (TotalValueUploaded) {
        if (!validateTotalValueUploaded(TotalValueUploaded)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            TotalValueUploaded: "Length should be greater than zero",
          }));
        }
      }
      if (ValidityOfVoucher) {
        if (!validateValidityOfVoucher(ValidityOfVoucher)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            ValidityOfVoucher: "Length should be greater than zero",
          }));
        }
      }
      if (TotalPrice) {
        if (!validateTotalPrice(TotalPrice)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            TotalPrice: "Length should be greater than zero",
          }));
        }
      }
      if (DateOfEvent) {
        if (!validateDateOfEvent(DateOfEvent)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            DateOfEvent: "Length should be greater than zero",
          }));
        }
      }
      if (TotalQuantity) {
        if (!validateTotalQuantity(TotalQuantity)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            TotalQuantity: "Length should be greater than zero",
          }));
        }
      }
      if (Timeline) {
        if (!validateTimeline(Timeline)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            Timeline: "Length should be greater than zero",
          }));
        }
      }
      if (Repetition) {
        if (!validateRepetition(Repetition)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            Repetition: "Length should be greater than zero",
          }));
        }
      }
      if (DisplayDimensionSize) {
        if (!validateDisplayDimensionSize(DisplayDimensionSize)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            DisplayDimensionSize: "Length should be greater than zero",
          }));
        }
      }
      if (Price) {
        if (!validatePrice(Price)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            Price: "Length should be greater than zero",
          }));
        }
      }
      if (Quantity) {
        if (!validateQuantity(Quantity)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            Quantity: "Length should be greater than zero",
          }));
        }
      }
      if (HSN) {
        if (!validateHSNCode(HSN)) {
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
      if (SellerCompanyName) {
        if (!validateSellerCompanyName(SellerCompanyName)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            SellerCompanyName: "Length should be greater than zero",
          }));
        }
      }
      if (BrandName) {
        if (!validateBrandName(BrandName)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            BrandName: "Length should be greater than zero",
          }));
        }
      }
      if (OfferingThisBrandingAt) {
        if (!validateOfferingThisBrandingAt(OfferingThisBrandingAt)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            OfferingThisBrandingAt: "Length should be greater than zero",
          }));
        }
      }
      if (OfferingAT) {
        if (!validateOfferingAT(OfferingAT)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            OfferingAT: "Length should be greater than zero",
          }));
        }
      }
      if (ShelfLife) {
        if (!validateShelfLife(ShelfLife)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            ShelfLife: "Length should be greater than zero",
          }));
        }
      }
      if (Location) {
        if (!validateLocation(Location)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            Location: "Length should be greater than zero",
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
      if (
        Region &&
        !validateRegionWithStateWithCityWithPincode(
          Region,
          City,
          State,
          Landmark
        )
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          Region: "Length of region should be greater than 0",
        }));
      }
      if (
        State &&
        !validateRegionWithStateWithCityWithPincode(
          Region,
          City,
          State,
          Landmark
        )
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          State: "Length of state should be greater than 0",
        }));
      }
      if (
        City &&
        !validateRegionWithStateWithCityWithPincode(
          Region,
          City,
          State,
          Landmark
        )
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          City: "Length of City should be greater than 0",
        }));
      }
      if (
        Landmark &&
        !validateRegionWithStateWithCityWithPincode(
          Region,
          City,
          State,
          Landmark
        )
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          Landmark: "Length of Landmark should be greater than 0",
        }));
      }
      if (
        Area &&
        !validateRegionWithStateWithCityWithPincode(
          Region,
          City,
          State,
          Landmark,
          Area
        )
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          Area: "Length of Area should be greater than 0",
        }));
      }
    }

    setStoreAllData([
      ...StoreAllData,
      {
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
        Location,
      },
    ]);
  };

  console.log("data", StoreAllData);

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
