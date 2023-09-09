import React from "react";
type props = {
  dropdownOption: any;
};

function Dropdown({ dropdownOption }: props) {
  //    console.log(userData)
  return (
    <div>
      <select >
        {dropdownOption?.map((item:any) => (
          <option key={item?.id}>{item?.title}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
