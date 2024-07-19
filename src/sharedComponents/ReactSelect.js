import { React, useContext, useState } from "react";
import Select from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "1", label: "Chocolate" },
  { value: "2", label: "Strawberry" },
  { value: "3", label: "Vanilla" },
  { value: "4", label: "Chocolate" },
  { value: "6", label: "Strawberry" },
  { value: "7", label: "Vanilla" },
  { value: "8", label: "Chocolate" },
  { value: "9", label: "Strawberry" },
  { value: "00", label: "Vanilla" },
  { value: "11", label: "Chocolate" },
  { value: "22", label: "Strawberry" },
  { value: "33", label: "Vanilla" },
  { value: "44", label: "Chocolate" },
  { value: "55", label: "Strawberry" },
  { value: "66", label: "Vanilla" },
  { value: "77", label: "Chocolate" },
  { value: "88", label: "Strawberry" },
  { value: "99", label: "Vanilla" },
  { value: "10", label: "Chocolate" },
  { value: "111", label: "Strawberry" },
  { value: "222", label: "Vanilla" },
];
const ReactSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const customStyles = {
    control: (base) => ({
      ...base,
      color: "#f6efe9",
      fontSize: 14,
      borderRadius: 10,
      border: "1px solid #f6efe9",
      backgroundColor: "white",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid #f6efe9",
      },
      // This line disable the blue border
      boxShadow: "none",
    }),
  };
  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        placeholder="Select Currency"
        options={options}
        styles={customStyles}
        theme={(theme) => ({
          ...theme,

          colors: {
            ...theme.colors,
            neutral50: "rgba(156, 73, 0, 0.5)",
            primary25: "#f6efe9",
            primary: "#8f4300",
            primary75: "#4C9AFF",
            background: "#8f4300",
            color: "#8f4300",
          },
        })}
      />
    </div>
  );
};

export default ReactSelect;
