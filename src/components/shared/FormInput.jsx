// components/shared/FormInput.js
import React from "react";

const FormInput = ({ name, label, placeholder, type, options, value, onChange }) => {
  return (
    <div className="my-4">
      <label className="text-[14px] font-[500]">{label}</label>

      {type === "dropdown" && (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="mt-2 p-3 border border-lightgray w-full text-xs rounded-lg"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}

      {type === "textarea" && (
        <textarea
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="mt-2 p-3 border border-lightgray w-full text-xs rounded-lg"
          rows={4}
        />
      )}

      {type === "checkbox" && options ? (
        <div className="mt-2 flex gap-4">
          {options.map((option, i) => (
            <label key={i} className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name={name}
                value={option}
                checked={value === option}
                onChange={onChange}
              />
              {option}
            </label>
          ))}
        </div>
      ) : null}

      {["text", "date"].includes(type) && (
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="mt-2 p-3 border border-lightgray w-full text-xs rounded-lg"
        />
      )}
    </div>
  );
};

export default FormInput;