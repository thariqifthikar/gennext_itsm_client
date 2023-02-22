import React from "react";
import { Form, Select } from "antd";
import '../../src/App.css'

const { Option } = Select;

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];

const ageOptions = [
  { value: '18', label: '18' },
  { value: '25', label: '25' },
  { value: '30', label: '30' },
];

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'mx', label: 'Mexico' },
];

function Dropdown({ options, placeholder, label, name, required, }) {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={[{ required: required, message: `Please select ${label.toLowerCase()}!` }]}
    >
      <Select placeholder={placeholder} className="drop">
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
}

function DropdownList(props) {
  const { gender, age, country } = props;
  
  return (
    <div >
      {gender && (
        <Dropdown 
          options={genderOptions}
          placeholder="Select your gender"
          label="Gender"
          name="gender"
          required={gender}
          className="custom-input"
          
        />
      )}

      {age && (
        <Dropdown
          options={ageOptions}
          placeholder="Select your age"
          label="Age"
          name="age"
          required={age}
          
        
        />
      )}

      {country && (
        <Dropdown 
          options={countryOptions}
          placeholder="Select your country"
          label="Country"
          name="country"
          required={country}
          
        />
      )}
    </div>
  );
}

export default DropdownList;