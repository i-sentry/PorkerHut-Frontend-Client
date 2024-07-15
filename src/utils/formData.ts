export const formData = [
  {
    label: "Full Name",
    name: "fullName",
    place_holder: "Enter Full Name",
    error_message: "Full Name is Required",
    type: "text",
    required: true,
  },
  {
    label: "Email Address",
    name: "email",
    place_holder: "Enter Email Address",
    error_message: "Email Address is Required",
    type: "text",
    required: true,
  },
  {
    label: "Phone Number",
    name: "phoneNumber",
    place_holder: "Enter Phone Number",
    error_message: "Phone Number is Required",
    type: "text",
    required: true,
  },

  {
    label: "Subject",
    name: "subject",
    place_holder: "Enter Subject",
    error_message: "Subject is Required",
    type: "text",
    required: true,
  },
];

export const sellersformData = [
  {
    label: "Account Owner’s Name",
    name: "sellerAccountInformation.accountOwnersName",
    place_holder: "Enter full name",
    error_message: "Account Owner’s Name is Required",
    type: "text",

    info: "This is the name of the person managing this account. This is the contact name we will primarily address you with.",
    required: true,
  },
  {
    label: "Account Owner’s Phone Number",
    name: "sellerAccountInformation.phoneNumber",
    place_holder: "Enter Your Phone Number",
    error_message: "Phone Number is Required",
    type: "tel",
    info: "When we need to contact you urgently, this is the number we will reach out to.",
    required: true,
  },
  {
    label: "Additional Phone Number",
    name: "sellerAccountInformation.additionalPhoneNumber",
    place_holder: "Enter Additional Phone Number",
    error_message: "",
    type: "tel",
    info: "Another number where we can call you.",
    required: false,
  },

  {
    label: "Email Address",
    name: "sellerAccountInformation.email",
    place_holder: "Enter Email Address",
    error_message: "Email Address is Required",
    type: "email",
    required: true,
    info: "Your account will be linked to this email address and we will use it to send all our communications.",
  },
  {
    label: "Password",
    name: "sellerAccountInformation.password",
    place_holder: "Enter your password",
    error_message: "Password is Required",
    type: "password",
    required: true,
  },
];

export const sellersShopInfo = [
  {
    label: "Shop Name",
    name: "sellerAccountInformation.shopName",
    place_holder: "Enter Shop Name",
    error_message: "Shop Name is Required",
    type: "text",
    info: "Enter a unique name for your online store. This is the name that will appear on porker-hut! Please do not use a trademark name without brand authorization.",
    required: true,
  },
];

export const sellersBusinessformData = [
  {
    label: "Company Registered Name",
    name: "businessInformation.companyRegisteredName",
    place_holder: "Enter company's registered name",
    error_message: "Company Registered Name is Required",
    type: "text",
    info: "If you are a Business Entity/Company, indicate your legal name/company name.",
    required: true,
  },
  {
    label: "Address 1",
    name: "businessInformation.address1",
    place_holder: "Enter company address",
    error_message: "Company's Address is Required",
    type: "text",
    info: "Please indicate the official address of the entity. If you are an individual indicate your address.",
    required: true,
  },
  {
    label: "Address 2",
    name: "businessInformation.address2",
    place_holder: "Enter company address",
    error_message: "",
    type: "text",
    info: "",
    required: false,
  },

  {
    label: "City / Town",
    name: "businessInformation.city",
    place_holder: "Enter company location",
    error_message: "Company's city is Required",
    type: "text",
    required: true,
    info: "",
  },
  {
    label: "Business owner or legal representative",
    name: "businessInformation.businessOwnerName",
    place_holder: "Enter full name ",
    error_message: "Business owner Name is Required",
    type: "text",
    info: "Please write down your own name in case you are an individual.",
    required: true,
  },
  {
    label: "Business owner date of birth",
    name: "businessInformation.dateOfBirth",
    place_holder: "Enter your date of birth",
    error_message: "DOB is Required",
    type: "date",
    required: true,
  },
];

export const businessCac = [
  {
    label: "CAC Registration Number",
    name: "businessInformation.CACRegistrationNumber",
    place_holder: "Enter registration number",
    error_message: "CAC Number is Required",
    type: "text",
    required: true,
  },
];
export const businessTIN = [
  {
    label: "Tax Identification Number (TIN)",
    name: "businessInformation.TINRegistrationNumber",
    place_holder: "Enter TIN number",
    error_message: "TIN Number is Required",
    type: "text",
    required: false,
  },
];

export const sellersBankInfo = [
  // {
  //   label: "Bank account name",
  //   name: "bank_account_name",
  //   place_holder: "Enter full name",
  //   error_message: "Business owner Name is Required",
  //   type: "text",
  //   info: "Please fill in your account name as it appears on your bvn",
  //   required: true,
  // },
  {
    label: "Bank account number",
    name: "vendorBankAccount.accountNumber",
    place_holder: "Enter account number ",
    error_message: "Account Number is Required",
    type: "number",
    info: "Please fill in your account number",
    required: true,
  },
];

export const productInfo = [
  {
    label: "Product Name",
    name: "productInformation.productName",
    place_holder: "Enter product name",
    error_message: "",
    type: "text",
    info: "Name of the product. For better listing, the name should match actual product.",
    required: "true",
  },
];

export const productDetails = [
  {
    label: "Product Weight (kg)",
    name: "productDetails.productWeight",
    place_holder: "Enter product weight (kg)",
    error_message: "",
    type: "number",
    info: "Please fill in the product weight, Any value entered is assumed to be measured in kg.",
    required: "true",
  },
  {
    label: "Product Content",
    name: "productDetails.productContent",
    place_holder: "Enter product content",
    error_message: "Product content is required",
    type: "text",
    info: "The product content should give the customer an overview of what they ordered.",
    required: "true",
  },
  {
    label: "Cooking Method",
    name: "productDetails.cookingMethod",
    place_holder: "Enter cooking method",
    error_message: "Cooking method is required",
    type: "text",
    info: "Give a brief details on how its being Cooked. Example: Fried, Roasting, Boiling, Grilling.",
    required: "false",
  },
  {
    label: "Nutritional Value",
    name: "productDetails.nutritionalValue",
    place_holder: "Enter nutritional value ",
    error_message: "Nutritional Value is required",
    type: "text",
    info: "Give a brief details on how its nutritional value . Example: Protein, Carbohydrates, vitamins, Fats.",
    required: "false",
  },
  {
    label: "Delivery Details",
    name: "productDetails.deliveryDetails",
    place_holder: "Enter delivery details",
    error_message: "Cooking method is required",
    type: "text",
    info: "Please fill in where this product can be delivered to.",
    required: "true",
  },
];

export const invoiceAccInfo = [
  {
    label: "Account Owner",
    name: "businessInformation.businessOwnerName",
    type: "text",
    info: "Please fill in the account owner’s name.",
  },
  {
    label: "Store name",
    name: "sellerAccountInformation.shopName",
    type: "text",
    info: "Enter store name.",
  },
  {
    label: "Bank account number",
    name: "vendorBankAccount.accountNumber",
    type: "number",
    info: "Please fill in account number",
  },
  {
    label: "Bank account name",
    name: "vendorBankAccount.accountName",
    type: "text",
    info: "Please fill in account name",
  },
  {
    label: "Bank name",
    name: "vendorBankAccount.bankName",
    type: "text",
    info: "Please fill in bank name",
  },
];
