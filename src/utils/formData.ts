export const formData = [
  {
    label: "Full Name",
    name: "full_name",
    place_holder: "Enter Full Name",
    error_message: "Full Name is Required",
    type: "text",
    required: true,
  },
  {
    label: "Email Address",
    name: "email_address",
    place_holder: "Enter Email Address",
    error_message: "Email Address is Required",
    type: "text",
    required: true,
  },
  {
    label: "Phone Number",
    name: "phone_number",
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

  // {
  //   label: "Are you an individual or Business Entity/Company",
  //   name: "confirmation",
  //   place_holder: "-Choose an option-",
  //   error_message: "Email Address is Required",
  //   type: "text",
  //   required: true,
  // },
  {
    label: "Account Owner’s Name",
    name: "account_owners_name",
    place_holder: "Enter full name",
    error_message: "Account Owner’s Name is Required",
    type: "text",

    info: "This is the name of the person managing this account. This is the contact name we will primarily address you with.",
    required: true,
  },
  {
    label: "Account Owner’s Phone Number",
    name: "phone_number",
    place_holder: "Enter Your Phone Number",
    error_message: "Phone Number is Required",
    type: "tel",
    info: "When we need to contact you urgently, this is the number we will reach out to.",
    required: true,
  },
  {
    label: "Additional Phone Number",
    name: "phone_number2",
    place_holder: "Enter Additional Phone Number",
    error_message: "",
    type: "tel",
    info: "Another number where we can call you.",
    required: false,
  },

  {
    label: "Email Address",
    name: "email",
    place_holder: "Enter Email Address*",
    error_message: "Email Address* is Required",
    type: "email",
    required: true,
    info: "Your account will be linked to this email address and we will use it to send all our communications.",
  },
  {
    label: "Password",
    name: "password",
    place_holder: "Enter your password",
    error_message: "Password is Required",
    type: "password",
    required: true,
  },
];

export const sellersShopInfo = [
  {
    label: "Shop Name",
    name: "shop_name",
    place_holder: "Enter Shop Name",
    error_message: "Shop Name is Required",
    type: "text",
    info: "Enter a unique name for your online store. This is the name that will appear on porker-hut! Please do not use a trademark name without brand authorization.",
    required: true,
  }
];


export const sellersBusinessformData = [
  // {
  //   label: "Are you an individual or Business Entity/Company",
  //   name: "confirmation",
  //   place_holder: "-Choose an option-",
  //   error_message: "Email Address is Required",
  //   type: "text",
  //   required: true,
  // },
  {
    label: "Company Registered Name",
    name: "company_register_name",
    place_holder: "Enter company's registered name",
    error_message: "Company Registered Name is Required",
    type: "text",
    info: "If you are a Business Entity/Company, indicate your legal name/company name.",
    required: true,
  },
  {
    label: "Address 1",
    name: "address1",
    place_holder: "Enter company address",
    error_message: "Company's Address is Required",
    type: "text",
    info: "Please indicate the official address of the entity. If you are an individual indicate your address.",
    required: true,
  },
  {
    label: "Address 2",
    name: "address2",
    place_holder: "Enter company address",
    error_message: "",
    type: "text",
    info: "",
    required: false,
  },

  {
    label: "City / Town",
    name: "city",
    place_holder: "Enter company location",
    error_message: "Company's city is Required",
    type: "text",
    required: true,
    info: "",
  },
  {
    label: "Business owner or legal representative",
    name: "business_owner_name",
    place_holder: "Enter full name ",
    error_message: "Business owner Name is Required",
    type: "text",
    info: "Please write down your own name in case you are an individual.",
    required: true,
  },
  {
    label: "Business owner date of birth",
    name: "dob",
    place_holder: "Enter your date of birth",
    error_message: "DOB is Required",
    type: "date",
    required: true,
  },
];

export const businessCac = [
  {
    label: "CAC Registration Number",
    name: "CAC_Registration_number",
    place_holder: "Enter registration number",
    error_message: "CAC Number is Required",
    type: "text",
    required: true,
  },
];
export const businessTIN = [
  {
    label: "Tax Identification Number (TIN)",
    name: "tin",
    place_holder: "Enter TIN number",
    error_message: "TIN Number is Required",
    type: "text",
    required: true,
  },
];


export const sellersBankInfo = [
  {
    label: "Bank account name",
    name: "bank_account_name",
    place_holder: "Enter full name",
    error_message: "Business owner Name is Required",
    type: "text",
    info: "Please fill in your account name as it appears on your bvn",
    required: true,
  },
  {
    label: "Bank account number",
    name: "bank_account",
    place_holder: "Enter account number ",
    error_message: "Account Number is Required",
    type: "number",
    info: "Please fill in your account number",
    required: true,
  },
];
