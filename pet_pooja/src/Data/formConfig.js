const formConfig = [
  {
    name: "name",
    label: "Name",
    type: "text",
    validation: { required: true },
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    validation: { required: true },
  },
  {
    name: "feedback",
    label: "Feedback",
    type: "textarea",
    validation: { required: true },
  },
  {
    name: "gender",
    label: "Gender",
    type: "radio",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
    ],
    validation: { required: true },
  },
  {
    name: "languages",
    label: "Languages",
    type: "checkbox",
    options: [
      { value: "english", label: "English" },
      { value: "french", label: "French" },
    ],
  },
  {
    name: "country",
    label: "Country",
    type: "select",
    options: [
      { value: "us", label: "United States" },
      { value: "uk", label: "United Kingdom" },
    ],
    validation: { required: true },
  },
];

export default formConfig;
