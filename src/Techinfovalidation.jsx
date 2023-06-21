import React, { useState, useEffect } from "react";
import {
  validateGuarantee,
  validateWarranty,
  validateOtherInformationBuyerMustKnowOrRemarks,
  validateWeightAfterPackingPerUnit,
  validateTags,
  validateInstructionsToUseProduct,
  validatePackagingAndDeliveryInstructionsIfAny,
  validateLength,
  validateWidth,
  validateHeight,
  validateWeightBeforePackingPerUnit,
  validateInclusions,
  validateExclusions,
  validateTermsAndConditions,
  validateRedemptionSteps,
  validateHowCanItBeRedeemed,
  validateAddressIfSingleTypeBelow,
  validateOnlineRedemptionUrl,
  validatePackagingInfoPerUnit,
  validateLegalInformation
} from "./Validation";
import { Input } from "@mui/material";

const FormComponent = () => {
  const [
    OtherInformationBuyerMustKnowOrRemarks,
    setOtherInformationBuyerMustKnowOrRemarks,
  ] = useState("");
  const [Guarantee, setGuarantee] = useState("");
  const [Warranty, setWarranty] = useState("");
  const [userData, setUserData] = useState("");
  const [Tags, setTags] = useState("");
  const [InstructionsToUseProduct, setInstructionsToUseProduct] = useState("");
  const [WeightBeforePackingPerUnit, setWeightBeforePackingPerUnit] =
    useState("");
  const [
    PackagingAndDeliveryInstructionsIfAny,
    setPackagingAndDeliveryInstructionsIfAny,
  ] = useState("");
  const [Length, setLength] = useState("");
  const [Width, setWidth] = useState("");
  const [Height, setHeight] = useState("");
  const [HeightUnits, setHeightUnits] = useState("");
  const [WidthUnits, setWidthUnits] = useState("");
  const [LengthUnits, setLengthUnits] = useState("");
  
  const [Inclusions, setInclusions] = useState("");
  const [Exclusions, setExclusions] = useState("");
  const [TermsAndConditions, setTermsAndConditions] = useState("");
  const [RedemptionSteps, setRedemptionSteps] = useState("");
  const [HowCanItBeRedeemed, setHowCanItBeRedeemed] = useState("");
  const [AddressIfSingleTypeBelow, setAddressIfSingleTypeBelow] = useState("");
  const [OnlineRedemptionUrl, setOnlineRedemptionUrl] = useState("");
  const [PackagingInfoPerUnit, setPackagingInfoPerUnit] = useState("");
  const [LegalInformation, setLegalInformation] = useState("");

  const [StoreAllData, setStoreAllData] = useState([]);
  const [WeightAfterPackingPerUnit, setWeightAfterPackingPerUnit] =
    useState("");

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

  const TechVariationArray = [
    {
      name: "OtherInformationBuyerMustKnowOrRemarks",
      type: "text",
      state: OtherInformationBuyerMustKnowOrRemarks,
    },
    {
      name: "PackagingAndDeliveryInstructionsIfAny",
      type: "text",
      state: PackagingAndDeliveryInstructionsIfAny,
    },
    {
      name: "Guarantee",
      type: "text",
      units: ["Years", "Month", "Days"],
      state: Guarantee,
    },
    {
      name: "Warranty",
      type: "text",
      units: ["Years", "Month", "Days"],
      state: Warranty,
    },
    {
      name: "Tags",
      type: "text",
      state: Tags,
    },
    {
      name: "InstructionsToUseProduct",
      type: "text",
      state: InstructionsToUseProduct,
    },
    {
      name: "WeightBeforePackingPerUnit",
      type: "number",
      units: ["g", "kg"],
      state: WeightBeforePackingPerUnit,
    },
    {
      name: "WeightAfterPackingPerUnit",
      type: "number",
      units: ["g", "kg"],
      state: WeightAfterPackingPerUnit,
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
      name: "LegalInformation",
      type: "text",
      state: LegalInformation,
    },
  ];
  const [errors, setErrors] = useState(
    TechVariationArray?.reduce((acc, item) => {
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
    if (name === "OtherInformationBuyerMustKnowOrRemarks") {
      setOtherInformationBuyerMustKnowOrRemarks(value);
    }
    if (name === "Guarantee") {
      setGuarantee(value);
    }
    if (name === "Warranty") {
      setWarranty(value);
    }
    if (name === "WeightAfterPackingPerUnit") {
      setWeightAfterPackingPerUnit(value);
    }
    if (name === "Tags") {
      setTags(value);
    }
    if (name === "WeightBeforePackingPerUnit") {
      setWeightBeforePackingPerUnit(value);
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
      
    if (name === "Inclusions") {
      setInclusions(value);
    }
    if (name === "Exclusions") {
      setExclusions(value);
    }
    if (name === "TermsAndConditions") {
      setTermsAndConditions(value);
    }
    if (name === "RedemptionSteps") {
      setRedemptionSteps(value);
    }
    if (name === "HowCanItBeRedeemed") {
      setHowCanItBeRedeemed(value);
    }
    if (name === "AddressIfSingleTypeBelow") {
      setAddressIfSingleTypeBelow(value);
    }
    if (name === "OnlineRedemptionUrl") {
      setOnlineRedemptionUrl(value);
    }
    if (name === "PackagingInfoPerUnit") {
      setPackagingInfoPerUnit(value);
    }
    if (name === "LegalInformation") {
      setLegalInformation(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // let userData;
    setErrors({});
    if (
      OtherInformationBuyerMustKnowOrRemarks === "" &&
      WeightBeforePackingPerUnit === "" &&
      InstructionsToUseProduct === "" &&
      Guarantee === "" &&
      Length === "" &&
      Width === "" &&
      Height === "" &&
      Warranty === "" &&
      Tags === "" &&
      WeightAfterPackingPerUnit === "" &&
      Inclusions=== ""&&
      Exclusions=== ""&&
      TermsAndConditions=== ""&&
      RedemptionSteps=== ""&&
      HowCanItBeRedeemed=== ""&&
      AddressIfSingleTypeBelow=== ""&&
      OnlineRedemptionUrl=== ""&&
      PackagingInfoPerUnit=== ""&&
      LegalInformation=== ""&&
      PackagingAndDeliveryInstructionsIfAny === ""
    ) {
      alert("Please fill the form");
    } else {
      if (OtherInformationBuyerMustKnowOrRemarks) {
        if (
          !validateOtherInformationBuyerMustKnowOrRemarks(
            OtherInformationBuyerMustKnowOrRemarks
          )
        ) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            OtherInformationBuyerMustKnowOrRemarks:
              "Length should be greater than zero",
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
      if (Guarantee) {
        if (!validateGuarantee(Guarantee)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            Guarantee: "Length should be greater than zero",
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
      if (Warranty) {
        if (!validateWarranty(Warranty)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            Warranty: "Length should be greater than zero",
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

      if (LegalInformation) {
        if (!validateLegalInformation(LegalInformation)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            LegalInformation: "Length should be greater than zero",
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

      if (PackagingAndDeliveryInstructionsIfAny) {
        if (
          !validatePackagingAndDeliveryInstructionsIfAny(
            PackagingAndDeliveryInstructionsIfAny
          )
        ) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            PackagingAndDeliveryInstructionsIfAny:
              "Length should be greater than zero",
          }));
        }
      }
    }

    setStoreAllData([
      ...StoreAllData,
      {
        OtherInformationBuyerMustKnowOrRemarks,
        Guarantee,
        Warranty,
        PackagingAndDeliveryInstructionsIfAny,
        Tags,
        WeightAfterPackingPerUnit,

        InstructionsToUseProduct,
        WeightBeforePackingPerUnit,
        Length,
        Width,
        Height,
      },
    ]);
  };
  console.log("data", StoreAllData);
  return (
    <div>
      {TechVariationArray?.map((item) => {
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
                  onChange=
                  {(e) => {
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
