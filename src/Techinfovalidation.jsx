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
  validateLegalInformation,
  validateContentUploadLink,
  validateCalender,
  validateModelName,
  validateDestination,
  validatePositionOrEditionOrPremiumOfferingCostOfTheAd,
  validateManufacturingDate,
  validateRegistrationDetails,
  validateExpiryDate,
  validateProductPickUpLocation,
  validatePickUpLocationPincode,
  validateProductUploadStatus,
  validateCostPrice,
  validateAdCostGST,
  validateAdCostHSN,
  validateAdCostApplicableOn,
  validateReasonOfCost,
  validateFeatureName,
  validateFeatureDesc,
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
  const [ContentUploadLink, setContentUploadLink] = useState("");
  const [Calender, setCalender] = useState("");
  const [Inclusions, setInclusions] = useState("");
  const [Exclusions, setExclusions] = useState("");
  const [TermsAndConditions, setTermsAndConditions] = useState("");
  const [RedemptionSteps, setRedemptionSteps] = useState("");
  const [HowCanItBeRedeemed, setHowCanItBeRedeemed] = useState("");
  const [AddressIfSingleTypeBelow, setAddressIfSingleTypeBelow] = useState("");
  const [OnlineRedemptionUrl, setOnlineRedemptionUrl] = useState("");
  const [PackagingInfoPerUnit, setPackagingInfoPerUnit] = useState("");
  const [LegalInformation, setLegalInformation] = useState("");
  const [ModelName, setModelName] = useState("");
  const [Destination, setDestination] = useState("");
  const [
    PositionOrEditionOrPremiumOfferingCostOfTheAd,
    setPositionOrEditionOrPremiumOfferingCostOfTheAd,
  ] = useState("");
  const [RegistrationDetails, setRegistrationDetails] = useState("");
  const [ManufacturingDate, setManufacturingDate] = useState("");
  const [ExpiryDate, setExpiryDate] = useState("");
  const [ProductPickUpLocation, setProductPickUpLocation] = useState("");
  const [PickUpLocationPincode, setPickUpLocationPincode] = useState("");
  const [ProductUploadStatus, setProductUploadStatus] = useState("");
  const [CostPrice, setCostPrice] = useState("");
  const [AdCostGST, setAdCostGST] = useState("");
  const [AdCostHSN, setAdCostHSN] = useState("");
  const [AdCostApplicableOn, setAdCostApplicableOn] = useState("");
  const [ReasonOfCost, setReasonOfCost] = useState("");
  const [FeatureName, setFeatureName] = useState("");
  const [FeatureDesc, setFeatureDesc] = useState("");
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
    {
      name: "ContentUploadLink",
      type: "text",
      state: ContentUploadLink,
    },
    {
      name: "Calender",
      type: "text",
      state: Calender,
    },
    {
      name: "ModelName",
      type: "text",
      state: ModelName,
    },
    {
      name: "Destination",
      type: "text",
      state: Destination,
    },
    {
      name: "PositionOrEditionOrPremiumOfferingCostOfTheAd",
      type: "text",
      state: PositionOrEditionOrPremiumOfferingCostOfTheAd,
    },
    {
      name: "RegistrationDetails",
      type: "text",
      state: RegistrationDetails,
    },
    {
      name: "ManufacturingDate",
      type: "text",
      state: ManufacturingDate,
    },
    {
      name: "ExpiryDate",
      type: "text",
      state: ExpiryDate,
    },
    {
      name: "ProductPickUpLocation",
      type: "text",
      state: ProductPickUpLocation,
    },
    {
      name: "PickUpLocationPincode",
      type: "text",
      state: PickUpLocationPincode,
    },
    {
      name: "ProductUploadStatus",
      type: "text",
      state: ProductUploadStatus,
    },
    {
      name: "CostPrice",
      type: "text",
      state: CostPrice,
    },
    {
      name: "AdCostGST",
      type: "text",
      state: AdCostGST,
    },
    {
      name: "AdCostHSN",
      type: "text",
      state: AdCostHSN,
    },
    {
      name: "AdCostApplicableOn",
      type: "text",
      state: AdCostApplicableOn,
    },
    {
      name: "ReasonOfCost",
      type: "text",
      state: ReasonOfCost,
    },
    {
      name: "FeatureName",
      type: "text",
      state: FeatureName,
    },
    {
      name: "FeatureDesc",
      type: "text",
      state: FeatureDesc,
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
    if (name === "ContentUploadLink") {
      setContentUploadLink(value);
    }
    if (name === "Calender") {
      setCalender(value);
    }
    if (name === "ModelName") {
      setModelName(value);
    }
    if (name === "Destination") {
      setDestination(value);
    }
    if (name === "PositionOrEditionOrPremiumOfferingCostOfTheAd") {
      setPositionOrEditionOrPremiumOfferingCostOfTheAd(value);
    }
    if (name === "RegistrationDetails") {
      setRegistrationDetails(value);
    }
    if (name === "ManufacturingDate") {
      setManufacturingDate(value);
    }
    if (name === "ExpiryDate") {
      setExpiryDate(value);
    }
    if (name === "ProductPickUpLocation") {
      setProductPickUpLocation(value);
    }
    if (name === "PickUpLocationPincode") {
      setPickUpLocationPincode(value);
    }
    if (name === "ProductUploadStatus") {
      setProductUploadStatus(value);
    }
    if (name === "CostPrice") {
      setCostPrice(value);
    }
    if (name === "AdCostGST") {
      setAdCostGST(value);
    }
    if (name === "AdCostHSN") {
      setAdCostHSN(value);
    }
    if (name === "AdCostApplicableOn") {
      setAdCostApplicableOn(value);
    }
    if (name === "ReasonOfCost") {
      setReasonOfCost(value);
    }
    if (name === "FeatureName") {
      setFeatureName(value);
    }
    if (name === "FeatureDesc") {
      setFeatureDesc(value);
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
      Inclusions === "" &&
      Exclusions === "" &&
      TermsAndConditions === "" &&
      RedemptionSteps === "" &&
      HowCanItBeRedeemed === "" &&
      AddressIfSingleTypeBelow === "" &&
      OnlineRedemptionUrl === "" &&
      PackagingInfoPerUnit === "" &&
      LegalInformation === "" &&
      PackagingAndDeliveryInstructionsIfAny === "" &&
      ContentUploadLink === "" &&
      Calender === "" &&
      ModelName === "" &&
      Destination === "" &&
      PositionOrEditionOrPremiumOfferingCostOfTheAd === "" &&
      ManufacturingDate === "" &&
      RegistrationDetails === "" &&
      ExpiryDate === "" &&
      ProductPickUpLocation === "" &&
      PickUpLocationPincode === "" &&
      ProductUploadStatus === "" &&
      CostPrice === "" &&
      AdCostGST === "" &&
      AdCostHSN === "" &&
      AdCostApplicableOn === "" &&
      ReasonOfCost === "" &&
      FeatureName === "" &&
      FeatureDesc
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
      if (ContentUploadLink) {
        if (!validateContentUploadLink(ContentUploadLink)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            ContentUploadLink: "Length should be greater than zero",
          }));
        }
      }
      if (Calender) {
        if (!validateCalender(Calender)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            Calender: "Length should be greater than zero",
          }));
        }
      }
      if (ModelName) {
        if (!validateModelName(ModelName)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            ModelName: "Length should be greater than zero",
          }));
        }
      }
      if (Destination) {
        if (!validateDestination(Destination)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            Destination: "Length should be greater than zero",
          }));
        }
      }
      if (PositionOrEditionOrPremiumOfferingCostOfTheAd) {
        if (
          !validatePositionOrEditionOrPremiumOfferingCostOfTheAd(
            PositionOrEditionOrPremiumOfferingCostOfTheAd
          )
        ) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            PositionOrEditionOrPremiumOfferingCostOfTheAd:
              "Length should be greater than zero",
          }));
        }
      }
      if (RegistrationDetails) {
        if (!validateRegistrationDetails(RegistrationDetails)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            RegistrationDetails: "Length should be greater than zero",
          }));
        }
      }
      if (ManufacturingDate) {
        if (!validateManufacturingDate(ManufacturingDate)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            ManufacturingDate: "Length should be greater than zero",
          }));
        }
      }
      if (ExpiryDate) {
        if (!validateExpiryDate(ExpiryDate)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            ExpiryDate: "Length should be greater than zero",
          }));
        }
      }
      if (ProductPickUpLocation) {
        if (!validateProductPickUpLocation(ProductPickUpLocation)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            ProductPickUpLocation: "Length should be greater than zero",
          }));
        }
      }
      if (PickUpLocationPincode) {
        if (!validatePickUpLocationPincode(PickUpLocationPincode)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            PickUpLocationPincode: "Length should be greater than zero",
          }));
        }
      }
      if (ProductUploadStatus) {
        if (!validateProductUploadStatus(ProductUploadStatus)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            ProductUploadStatus: "Length should be greater than zero",
          }));
        }
      }
      if (CostPrice) {
        if (!validateCostPrice(CostPrice)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            CostPrice: "Length should be greater than zero",
          }));
        }
      }
      if (AdCostGST) {
        if (!validateAdCostGST(AdCostGST)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            AdCostGST: "Length should be greater than zero",
          }));
        }
      }
      if (AdCostHSN) {
        if (!validateAdCostHSN(AdCostHSN)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            AdCostHSN: "Length should be greater than zero",
          }));
        }
      }
      if (AdCostApplicableOn) {
        if (!validateAdCostApplicableOn(AdCostApplicableOn)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            AdCostApplicableOn: "Length should be greater than zero",
          }));
        }
      }
      if (ReasonOfCost) {
        if (!validateReasonOfCost(ReasonOfCost)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            ReasonOfCost: "Length should be greater than zero",
          }));
        }
      }
      if (FeatureName) {
        if (!validateFeatureName(FeatureName)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            FeatureName: "Length should be greater than zero",
          }));
        }
      }
      if (FeatureDesc) {
        if (!validateFeatureDesc(FeatureDesc)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            FeatureDesc: "Length should be greater than zero",
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
        ContentUploadLink,
        Calender,
        ModelName,
        Destination,
        PositionOrEditionOrPremiumOfferingCostOfTheAd,
        ManufacturingDate,
        RegistrationDetails,
        ExpiryDate,
        ProductPickUpLocation,
        PickUpLocationPincode,
        ProductUploadStatus,
        CostPrice,
        AdCostGST,
        AdCostHSN,
        AdCostApplicableOn,
        ReasonOfCost,
        FeatureName,
        FeatureDesc,
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
