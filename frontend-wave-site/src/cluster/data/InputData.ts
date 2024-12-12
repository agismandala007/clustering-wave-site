export type InputType = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
};

export default [
  {
    label: "Magnitude:",
    name: "mag",
    type: "number",
    placeholder: "2, 3.5, 6, etc",
  },
  {
    label: "Depth:",
    name: "depth",
    type: "number",
    placeholder: "10, 105, 133, etc",
  },
  {
    label: "Province:",
    name: "prov",
    type: "text",
    placeholder: "JAKARTA, SULBAR, MALUKU, etc",
  },
];
