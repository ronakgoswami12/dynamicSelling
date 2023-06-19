import React, { useState, useEffect } from "react";

import {
  validateGuarantee,
  validateWarranty,
  validateProductColor,
  validateProductQuantity,
  validateDiscountedPriceWithPricePerUnit,
  validateMinOrderQuantityWithMaxOrderQuantity,
  validateRegionWithStateWithCityWithPincode,
  validateProductSubCategory,
  validateProductSubtittle,
  validateProductDescription,
  validateHSNCode,
  validateProductSize,
  validateGST,
  validateProductIdType,
  validateSampleavailability,
  validateLength,
  validateForm,
  validateWidth,
  validateHeight,
  validateSampleMinOrderQuantity,
  validateGender,
  validateFlavor,
  validateMRP,
  validatePriceofsample,
  validateUnit,
  validateWeightBeforePackingPerUnit,
  validateWeightAfterPackingPerUnit,
  validatePackagingAndDeliveryInstructionsIfAny,
  validateTags,
  validateInclusions,
  validateExclusions,
  validateTermsAndConditions,
  validateRedemptionSteps,
  validateHowCanItBeRedeemed,
  validateAddressIfSingleTypeBelow,
  validateOnlineRedemptionUrl,
  validatePackagingInfoPerUnit,
  validateInstructionsToUseProduct,
  validateLegalInformation,
  validateRoomType,
  validateTotalValueUploaded,
  validateValidityOfVoucher,
  validateTotalPrice,
  validateDateOfEvent,
  validateTimeline,
  validateRepetition,
  validateDisplayDimensionSize,
  validatePrice
} from "./Validation";
import { Input } from "@mui/material";

const FormComponent = () => {
  const [Form,setForm]=useState("");
  const [Guarantee,setGuarantee]=useState("");
  const [Warranty,setWarranty]=useState("");
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
  const [ProductSize, setProductSize] = useState("");
  const [ProductSubCategory,setProductSubCategory]=useState("");
  const [ProductDescription,setProductDescription]=useState("");
  const [ProductSubtittle,setProductSubtittle]=useState("");
  const [SampleAvailable, setSampleAvailable] = useState("");
  const [SampleMinOrderQuantity, setSampleMinOrderQuantity] = useState("");
  const [PriceOfSample, setPriceOfSample] = useState("");
  const [Unit, setUnit] = useState("");
  const [Length, setLength] = useState("");
  const [Width, setWidth] = useState("");
  const [Height, setHeight] = useState("");
  const [WeightBeforePackingPerUnit,setWeightBeforePackingPerUnit]=useState("");
  const [WeightAfterPackingPerUnit,setWeightAfterPackingPerUnit]=useState("");
  const [PackagingAndDeliveryInstructionsIfAny,setPackagingAndDeliveryInstructionsIfAny]=useState("");
  const [Tags,setTags]=useState("");
  const [Inclusions,setInclusions]=useState("");
  const [Exclusions,setExclusions]=useState("");
  const [TermsAndConditions,setTermsAndConditions]=useState("");
  const [RedemptionSteps,setRedemptionSteps]=useState("");
  const [HowCanItBeRedeemed,setHowCanItBeRedeemed]=useState("");
  const [AddressIfSingleTypeBelow,setAddressIfSingleTypeBelow]=useState(""); 
  const [OnlineRedemptionUrl,setOnlineRedemptionUrl]=useState("");
  const [PackagingInfoPerUnit,setPackagingInfoPerUnit]=useState("");
  const [InstructionsToUseProduct,setInstructionsToUseProduct]=useState("");
  const [LegalInformation,setLegalInformation]=useState("");
  const [HeightUnits, setHeightUnits] = useState("");
  const [WidthUnits, setWidthUnits] = useState("");
  const [LengthUnits, setLengthUnits] = useState("");
  const [RoomType, setRoomType] = useState("");
  const [TotalValueUploaded, setTotalValueUpload]= useState("");
  const [ValidityOfVoucher, setValidityOfVoucher]= useState("");
  const [TotalQuantity,setTotalQuantity]= useState("");
  const [Quantity,setQuantity]=useState("");
  const [TotalPrice,setTotalPrice]=useState("");
  const [DateOfEvent,setDateOfEvent]=useState("");
  const [Timeline,setTimeline]=useState("");
  const [Repetition,setRepetition]=useState("");
  const [DisplayDimensionSize,setDisplayDimensionSize]=useState("");
  const [Price,setPrice]=useState("");
  const [Region,setRegion] = useState("");
  const [State,setState]=useState("");
  const [City,setCity] = useState("");
  const [Landmark,setLandmark]=useState("");
  const [Area,setArea]= useState("");
  const [ProductQuantity,setProductQuantity]=useState("");
  const [userData, setUserData] = useState("");
  const [StoreAllData, setStoreAllData] = useState([]);
  // const [ProductVariationData, setProductVariationData] = useState([]);

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
      name: "Guarantee",
      type: "text",
      state: Guarantee,
    },
    {
      name: "Warranty",
      type: "text",
      state: Warranty,
    },
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
      name:"ProductSize",
      type:"text",
      state: ProductSize,
    },
    {
      name:"ProductSubCategory",
      type:"text",
      state: ProductSubCategory,
    },
    {
      name:"ProductSubtittle",
      type:"text",
      state: ProductSubtittle,
    },
    {
      name:"ProductDescription",
      type:"text",
      state: ProductDescription,
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
    {
      name: "WeightBeforePackingPerUnit",
      type: "number",
      units: [ "g", "kg"],
      state: WeightBeforePackingPerUnit,
    },
    {
      name: "WeightAfterPackingPerUnit",
      type: "number",
      units: [ "g", "kg"],
      state: WeightAfterPackingPerUnit,
    },
    {
      name: "PackagingAndDeliveryInstructionsIfAny",
      type: "text",
      state: PackagingAndDeliveryInstructionsIfAny,
    },
    {
      name: "Tags",
      type: "text",
      state: Tags,
    },
    {
      name: "Inclusions",
      type: "text",
      state: Inclusions,
    },
    {
      name: "Exclusions",
      type: "text",
      state: Exclusions,
    },
    {
      name: "TermsAndConditions",
      type: "text",
      state: TermsAndConditions,
    },
    {
      name: "RedemptionSteps",
      type: "text",
      state: RedemptionSteps,
    },
    {
      name: "HowCanItBeRedeemed",
      type: "text",
      state: HowCanItBeRedeemed,
    },
    {
      name: "AddressIfSingleTypeBelow",
      type: "text",
      state: AddressIfSingleTypeBelow,
    },
    {
      name: "OnlineRedemptionUrl",
      type: "text",
      state: OnlineRedemptionUrl,
    },
    {
      name: "PackagingInfoPerUnit",
      type: "text",
      state: PackagingInfoPerUnit,
    },
    {
      name: "InstructionsToUseProduct",
      type: "text",
      state: InstructionsToUseProduct,
    },
    {
      name: "LegalInformation",
      type: "text",
      state: LegalInformation,
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
      name:"Area",
      type: "text",
      state: Area,
    },
    {
      name:"ProductQuantity",
      type: "number",
      state: ProductQuantity,
    }

        

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // let userData;
    setErrors({});
    if (
      Guarantee===""&&
      Warranty==="" &&
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
      if (HSN){
        if(!validateHSNCode(HSN)){
          setErrors((prevErrors)=>({
            ...prevErrors,
            HSN:"Length should be greater than zero"
          }))
        }
      }
      if (Guarantee){
        if(!validateGuarantee(Guarantee)){
          setErrors((prevErrors)=>({
            ...prevErrors,
            Guarantee:"Length should be greater than zero"
          }))
        }
      }
      if (Warranty){
        if(!validateWarranty(Warranty)){
          setErrors((prevErrors)=>({
            ...prevErrors,
            Warranty:"Length should be greater than zero"
          }))
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
      if (ProductSubCategory) {
        if (!validateProductSubCategory(ProductSubCategory)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            ProductSubCategory: "ProductSubCategory should be greater than zero",
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
            ProductDescription: "ProductDescription should be greater than zero",
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
      if (WeightBeforePackingPerUnit) {
        if (!validateWeightBeforePackingPerUnit(WeightBeforePackingPerUnit)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            WeightBeforePackingPerUnit: "Length should be greater than zero",
          }));
        }
      }
      if (WeightAfterPackingPerUnit) {
        if (!validateWeightAfterPackingPerUnit(WeightAfterPackingPerUnit)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            WeightAfterPackingPerUnit: "Length should be greater than zero",
          }));
        }
      }
      if (PackagingAndDeliveryInstructionsIfAny) {
        if (!validatePackagingAndDeliveryInstructionsIfAny(PackagingAndDeliveryInstructionsIfAny)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            PackagingAndDeliveryInstructionsIfAny: "Length should be greater than zero",
          }));
        }
      }
      if (Tags) {
        if (!validateTags(Tags)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            Tags: "Length should be greater than zero",
          }));
        }
      }
      if (Inclusions) {
        if (!validateInclusions(Inclusions)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            Inclusions: "Length should be greater than zero",
          }));
        }
      }
      if (Exclusions) {
        if (!validateExclusions(Exclusions)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            Exclusions: "Length should be greater than zero",
          }));
        }
      }
      if (TermsAndConditions) {
        if (!validateTermsAndConditions(TermsAndConditions)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            TermsAndConditions: "Length should be greater than zero",
          }));
        }
      }
      if (RedemptionSteps) {
        if (!validateRedemptionSteps(RedemptionSteps)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            RedemptionSteps: "Length should be greater than zero",
          }));
        }
      }
      if (HowCanItBeRedeemed) {
        if (!validateHowCanItBeRedeemed(HowCanItBeRedeemed)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            HowCanItBeRedeemed: "Length should be greater than zero",
          }));
        }
      }
      if (AddressIfSingleTypeBelow) {
        if (!validateAddressIfSingleTypeBelow(AddressIfSingleTypeBelow)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            AddressIfSingleTypeBelow: "Length should be greater than zero",
          }));
        }
      }
      if (OnlineRedemptionUrl) {
        if (!validateOnlineRedemptionUrl(OnlineRedemptionUrl)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            OnlineRedemptionUrl: "Length should be greater than zero",
          }));
        }
      }
      if (PackagingInfoPerUnit) {
        if (!validatePackagingInfoPerUnit(PackagingInfoPerUnit)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            PackagingInfoPerUnit: "Length should be greater than zero",
          }));
        }
      }
      if (InstructionsToUseProduct) {
        if (!validateInstructionsToUseProduct(InstructionsToUseProduct)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            InstructionsToUseProduct: "Length should be greater than zero",
          }));
        }
      }
      if (LegalInformation) {
        if (!validateLegalInformation(LegalInformation)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            LegalInformation: "Length should be greater than zero",
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
      if (
        Region &&
        !validateRegionWithStateWithCityWithPincode(Region, City,State,Landmark)
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          Region:
            "Length of region should be greater than 0",
        }));
      }
      if (
        State &&
        !validateRegionWithStateWithCityWithPincode(Region, City,State,Landmark)
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          State:
            "Length of state should be greater than 0",
        }));
      }
      if (
        City &&
        !validateRegionWithStateWithCityWithPincode(Region, City,State,Landmark)
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          City:
            "Length of City should be greater than 0",
        }));
      }
      if (
        Landmark &&
        !validateRegionWithStateWithCityWithPincode(Region, City,State,Landmark)
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          Landmark:
            "Length of Landmark should be greater than 0",
        }));
      }
      if (
        Area &&
        !validateRegionWithStateWithCityWithPincode(Region, City,State,Landmark,Area)
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          Area:
            "Length of Area should be greater than 0",
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
        Length,
        Width,
        Height,
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
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FormComponent;
