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
    landmark
  ) => {
    // return region.length > 0 && state.length > 0 && city.length > 0 && pincode.length > 0;
    //  region should be less than state and state should be less than city and city should be less than pincode and all should be greater than 0 and not empty
    return (
      landmark.length > 0 &&
      region.length > 0 &&
      state.length > 0 &&
      city.length > 0 &&
      pincode.length > 0 &&
      region < state &&
      state < city &&
      city < pincode &&
      region > 0 &&
      state > 0 &&
      city > 0 &&
      pincode > 0 &&
      landmark > 0
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
  
  //  Flavor validation
  export const validateFlavor = (flavor) => {
    return flavor.length > 0;
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
  