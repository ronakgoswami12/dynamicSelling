// validation.js

// validateForm function
export const validateForm = (errors) => {
  let valid = true;

  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));

  return valid;
};

//  ProductName validation
export const validateProductName = (productName) => {
  return productName.length > 0;
};

// ProductType validation
export const validateProductType = (productType) => {
  return productType.length > 0;
};
//ProductSize validation
export const validateProductSize = (processedSize) => {
  return processedSize.length > 0;
};

//  ProductSubCategory validation
export const validateProductSubCategory = (productSubCategory) => {
  return productSubCategory.length > 0;
};

// ProductSubtittle validation
export const validateProductSubtittle = (productSubtittle) => {
  return productSubtittle.length > 0;
};

//  ProductDescription validation
export const validateProductDescription = (productDescription) => {
  return productDescription.length > 0;
};

// ProductColor validation
export const validateProductColor = (productColor) => {
  return productColor.length > 0;
};

// PricePerUnit
export const validatePricePerUnit = (pricePerUnit) => {
  return pricePerUnit.length > 0;
};

// DiscountedPrice validation with PricePerUnit validation
export const validateDiscountedPriceWithPricePerUnit = (
  discountedPrice,
  pricePerUnit
) => {
  // return discountedPrice.length > 0 && pricePerUnit.length > 0;
  //  discounted price should be less than price per unit and both should be greater than 0 and not empty
  return (
    discountedPrice.length > 0 &&
    pricePerUnit.length > 0 &&
    discountedPrice < pricePerUnit &&
    // pricePerUnit > discountedPrice &&
    discountedPrice > 0 &&
    pricePerUnit > 0
  );
};

// MinOrderQuantity and maxOrderQuantity validation and maxOrderQuantity should be greater than or equal to minOrderQuantity

export const validateMinOrderQuantityWithMaxOrderQuantity = (
  minOrderQuantity,
  maxOrderQuantity
) => {
  // return minOrderQuantity.length > 0 && maxOrderQuantity.length > 0;
  //  minOrderQuantity should be less than maxOrderQuantity and both should be greater than 0 and not empty
  return (
    minOrderQuantity.length > 0 &&
    maxOrderQuantity.length > 0 &&
    minOrderQuantity < maxOrderQuantity &&
    minOrderQuantity > 0 &&
    maxOrderQuantity > 0
  );
};

//  HSN Code validation
export const validateHSNCode = (hsnCode) => {
  return hsnCode.length > 5;
};

//  GST validation
export const validateGST = (gst) => {
  return gst.length > 0;
};
//  SellerCompanyName validation
export const validateSellerCompanyName = (sellerCompanyName) => {
  return sellerCompanyName.length > 0;
};

//  ProductIdType validation
export const validateProductIdType = (productIdType) => {
  return productIdType.length > 0;
};

//  Sampleavailability validation
export const validateSampleavailability = (sampleavailability) => {
  return sampleavailability.length > 0;
};

// Priceofsample validation
export const validatePriceofsample = (priceofsample) => {
  return priceofsample.length > 0;
};

//  length validation
export const validateLength = (length) => {
  return length.length > 0;
};

// width validation
export const validateWidth = (width) => {
  return width.length > 0;
};

// height validation
export const validateHeight = (height) => {
  return height.length > 0;
};

//   ProductQuantity validation
export const validateProductQuantity = (productQuantity) => {
  return productQuantity.length > 0;
};

//  SampleMinOrderQuantity validation
export const validateSampleMinOrderQuantity = (sampleMinOrderQuantity) => {
  return sampleMinOrderQuantity.length > 0;
};

// in  LocationDetails region validation , state validation , city validation , pincode validation
export const validateRegionWithStateWithCityWithPincode = (
  region,
  state,
  city,
  pincode,
  landmark,
  area
) => {
  // return region.length > 0 && state.length > 0 && city.length > 0 && pincode.length > 0;
  //  region should be less than state and state should be less than city and city should be less than pincode and all should be greater than 0 and not empty
  return (
    landmark.length > 0 &&
    region.length > 0 &&
    state.length > 0 &&
    city.length > 0 &&
    pincode.length > 0 &&
    landmark.length > 0 &&
    area.length > 0
  );
};

//  gender validation

export const validateGender = (gender) => {
  return gender === "male" || gender === "female" || gender === "unisex";
};

//  Warranty validation
export const validateWarranty = (warranty) => {
  return warranty.length > 0;
};

//  guarantee validation
export const validateGuarantee = (guarantee) => {
  return guarantee.length > 0;
};

//  WeightBeforePackingPerUnit validation
export const validateWeightBeforePackingPerUnit = (
  weightBeforePackingPerUnit
) => {
  return weightBeforePackingPerUnit.length > 0;
};

//  WeightAfterPackingPerUnit validation
export const validateWeightAfterPackingPerUnit = (
  weightAfterPackingPerUnit
) => {
  return weightAfterPackingPerUnit.length > 0;
};

//  PackagingAndDeliveryInstructionsIfAny validation
export const validatePackagingAndDeliveryInstructionsIfAny = (
  PackagingAndDeliveryInstructionsIfAny
) => {
  return PackagingAndDeliveryInstructionsIfAny.length > 0;
};

//  Flavor validation
export const validateFlavor = (flavor) => {
  return flavor.length > 0;
};
//  Tags validation
export const validateTags = (tags) => {
  return tags.length > 0;
};
//  Inclusions validation
export const validateInclusions = (inclusions) => {
  return inclusions.length > 0;
};
//  Exclusions validation
export const validateExclusions = (exclusions) => {
  return exclusions.length > 0;
};
//  TermsAndConditions validation
export const validateTermsAndConditions = (termsAndConditions) => {
  return termsAndConditions.length > 0;
};
//  RedemptionSteps validation
export const validateRedemptionSteps = (redemptionSteps) => {
  return redemptionSteps.length > 0;
};
//  HowCanItBeRedeemed validation
export const validateHowCanItBeRedeemed = (howCanItBeRedeemed) => {
  return howCanItBeRedeemed.length > 0;
};
//  AddressIfSingleTypeBelow validation
export const validateAddressIfSingleTypeBelow = (addressIfSingleTypeBelow) => {
  return addressIfSingleTypeBelow.length > 0;
};
//  OnlineRedemptionUrl validation
export const validateOnlineRedemptionUrl = (onlineRedemptionUrl) => {
  return onlineRedemptionUrl.length > 0;
};
//  PackagingInfoPerUnit validation
export const validatePackagingInfoPerUnit = (packagingInfoPerUnit) => {
  return packagingInfoPerUnit.length > 0;
};
//  InstructionsToUseProduct validation
export const validateInstructionsToUseProduct = (instructionsToUseProduct) => {
  return instructionsToUseProduct.length > 0;
};
//  LegalInformation validation
export const validateLegalInformation = (legalInformation) => {
  return legalInformation.length > 0;
};

// MRP validation
export const validateMRP = (mrp) => {
  return mrp.length > 0;
};

// RoomType validation
export const validateRoomType = (roomType) => {
  return roomType.length > 0;
};

// TotalValueUploaded validation
export const validateTotalValueUploaded = (totalValueUploaded) => {
  return totalValueUploaded.length > 0;
};

//  ValidityOfVoucher validation
export const validateValidityOfVoucher = (validityOfVoucher) => {
  return validityOfVoucher.length > 0;
};

// TotalPrice validation
export const validateTotalPrice = (totalPrice) => {
  return totalPrice.length > 0;
};

//  DateOfEvent validation
export const validateDateOfEvent = (dateOfEvent) => {
  return dateOfEvent.length > 0;
};

// Unit validation
export const validateUnit = (unit) => {
  return unit.length > 0;
};

//  Timeline validation
export const validateTimeline = (timeline) => {
  return timeline.length > 0;
};

//  Repetition validation
export const validateRepetition = (repetition) => {
  return repetition.length > 0;
};

// DisplayDimensionSize validation
export const validateDisplayDimensionSize = (displayDimensionSize) => {
  return displayDimensionSize.length > 0;
};

//  Price validation

export const validatePrice = (price) => {
  return price.length > 0;
};
//  BrandName validation

export const validateBrandName = (brandName) => {
  return brandName.length > 0;
};
//  OfferingThisBrandingAt validation

export const validateOfferingThisBrandingAt = (offeringThisBrandingAt) => {
  return offeringThisBrandingAt.length > 0;
};
//  OfferingAT validation

export const validateOfferingAT = (offeringAT) => {
  return offeringAT.length > 0;
};
//  ShelfLife validation

export const validateShelfLife = (shelfLife) => {
  return shelfLife.length > 0;
};
//  TotalQuantity validation

export const validateTotalQuantity = (totalQuantity) => {
  return totalQuantity.length > 0;
};

//  TotalQuantity validation

export const validateQuantity = (quantity) => {
  return quantity.length > 0;
};
//  OtherInformationBuyerMustKnowOrRemarks validation

export const validateOtherInformationBuyerMustKnowOrRemarks = (
  otherInformationBuyerMustKnowOrRemarks
) => {
  return otherInformationBuyerMustKnowOrRemarks.length > 0;
};

//  ContentUploadLink validation

export const validateContentUploadLink = (
  contentUploadLink
) => {
  return contentUploadLink.length > 0;
};
//  Calender validation

export const validateCalender = (
  calender
) => {
  return calender.length > 0;
};

//  ModelName validation
export const validateModelName = (
  modelName
) => {
  return modelName.length > 0;
};
//  Destination validation
export const validateDestination = (
  destination
) => {
  return destination.length > 0;
};
//  PositionOrEditionOrPremiumOfferingCostOfTheAd validation
export const validatePositionOrEditionOrPremiumOfferingCostOfTheAd = (
  positionOrEditionOrPremiumOfferingCostOfTheAd
) => {
  return positionOrEditionOrPremiumOfferingCostOfTheAd.length > 0;
};
//  ManufacturingDate validation
export const validateManufacturingDate = (
  manufacturingDate
) => {
  return manufacturingDate.length > 0;
};
//  RegistrationDetails validation
export const validateRegistrationDetails = (
  registrationDetails
) => {
  return registrationDetails.length > 0;
};
//  ExpiryDate validation
export const validateExpiryDate = (
  expiryDate
) => {
  return expiryDate.length > 0;
};
//  ProductPickUpLocation validation
export const validateProductPickUpLocation = (
  productPickUpLocation
) => {
  return productPickUpLocation.length > 0;
};
//  PickUpLocationPincode validation
export const validatePickUpLocationPincode = (
  pickUpLocationPincode
) => {
  return pickUpLocationPincode.length > 0;
};
//  ProductUploadStatus validation
export const validateProductUploadStatus = (
  productUploadStatus
) => {
  return productUploadStatus.length > 0;
};
//  CostPrice validation
export const validateCostPrice = (
  costPrice
) => {
  return costPrice.length > 0;
};
//  AdCostGST validation
export const validateAdCostGST = (
  adCostGST
) => {
  return adCostGST.length > 0;
};
//  AdCostHSN validation
export const validateAdCostHSN = (
  adCostHSN
) => {
  return adCostHSN.length > 0;
};
//  AdCostApplicableOn validation
export const validateAdCostApplicableOn = (
  adCostApplicableOn
) => {
  return adCostApplicableOn.length > 0;
};
//  ReasonOfCost validation
export const validateReasonOfCost = (
  reasonOfCost
) => {
  return reasonOfCost.length > 0;
};
//  FeatureName validation
export const validateFeatureName = (
  featureName
) => {
  return featureName.length > 0;
};
//  FeatureDesc validation
export const validateFeatureDesc = (
  featureDesc
) => {
  return featureDesc.length > 0;
};
//  Location validation
export const validateLocation = (
  location
) => {
  return location.length > 0;
};

