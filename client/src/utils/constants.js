const ExperienceData = [
  {
    id: 1,
    name: "experience",
    inputId: "lessthanoneyear",
    value: "less than 1 year",
  },
  {
    id: 2,
    name: "experience",
    inputId: "1to3years",
    value: "1 - 3 years",
  },
  {
    id: 3,
    name: "experience",
    inputId: "3to5years",
    value: "3 - 5 years",
  },
  {
    id: 4,
    name: "experience",
    inputId: "morethan5years",
    value: "more than 5 years",
  },
];

const SkillsData = [
  {
    id: 1,
    name: "JavaScript",
    inputId: "JavaScript",
    value: "JavaScript",
  },
  {
    id: 2,
    name: "HTML",
    inputId: "HTML",
    value: "HTML",
  },
  {
    id: 3,
    name: "CSS",
    inputId: "CSS",
    value: "CSS",
  },
  {
    id: 4,
    name: "SASS",
    inputId: "SASS",
    value: "SASS",
  },
  {
    id: 5,
    name: "NodeJS",
    inputId: "NodeJS",
    value: "NodeJS",
  },
  {
    id: 6,
    name: "Java",
    inputId: "Java",
    value: "Java",
  },
  {
    id: 7,
    name: "AWS - Lambda",
    inputId: "AWSLambda",
    value: "AWS - Lambda",
  },
  {
    id: 8,
    name: "AWS - IAM",
    inputId: "AWSIAM",
    value: "AWS - IAM",
  },
  {
    id: 9,
    name: "AWS - DynamoDB",
    inputId: "AWSDynamoDB",
    value: "AWS - DynamoDB",
  },
  {
    id: 10,
    name: "AWS - S3",
    inputId: "AWSS3",
    value: "AWS - S3",
  },
];

export const formFields = [
  {
    id: "firstName",
    placeholder: "First name",
    required: true,
    type: "text",
  },
  {
    id: "lastName",
    placeholder: "Last name",
    required: true,
    type: "text",
  },
  {
    id: "email",
    placeholder: "Your Email",
    required: true,
    type: "text",
  },
  {
    id: "address1",
    placeholder: "your Address",
    type: "text",
  },
  {
    id: "city",
    placeholder: "Your City",
    type: "text",
  },
  {
    id: "state",
    placeholder: "Your State",
    type: "text",
  },
  {
    id: "zip",
    placeholder: "Your Zip",
    type: "text",
  },
  {
    id: "phone",
    placeholder: "Your Phone",
    required: true,
    type: "text",
  },
  {
    id: "jobTitle",
    name: "jobTitle",
    options: [
      "Engineer - lead",
      "Engineer - mid level",
      "Engineer - junion",
      "Engineer - front end focused",
      "Engineer - backend focused",
      "Engineer - full stack",
    ],
    placeholder: "Please select job title",
    type: "select",
  },
  {
    id: "experience",
    options: ExperienceData,
    placeholder: "Please choose number of years you've been developing",
    required: true,
    type: "radio",
  },
  {
    id: "skills",
    options: SkillsData,
    placeholder: "Please choose number of years you've been developing",
    required: true,
    type: "checkbox",
  },
  {
    id: "reason",
    placeholder:
      "Describe why you are a good fit for the job you are applying for.",
    type: "textarea",
  },
];

export const FORM_UPLOAD_REQUEST = "FORM_UPLOAD_REQUEST";
export const FORM_UPLOAD_SUCCESS = "FORM_UPLOAD_SUCCESS";
export const FORM_UPLOAD_FAIL = "FORM_UPLOAD_FAIL";
