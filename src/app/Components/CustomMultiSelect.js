import React, { useState } from 'react';

const CustomMultiSelect = ({ data,valueHandler }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
      valueHandler(selectedOptions.filter((item) => item !== option))
    } else {
      setSelectedOptions([...selectedOptions, option]);
      valueHandler([...selectedOptions, option])
    }
  };

  return (
    <div className="custom-multiselect">
      <div className="selected-values form-control" onClick={toggleDropdown}>
        {selectedOptions.length === 0 ? 'Select Reason' : selectedOptions.join(', ')}
      </div>
      {isDropdownOpen && (
        <div className="dropdown form-control">
          {data.map((group) => (
            <div key={group.label}>
              <div className="group-label">{group.label}</div>
              {group.children.map((option) => (
                <div
                  key={option.value}
                  className={`option ${selectedOptions.includes(option.value) ? 'selected' : ''}`}
                  onClick={() => toggleOption(option.value)}
                >
                  <span className="checkmark"></span>
                  {option.value}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomMultiSelect;
