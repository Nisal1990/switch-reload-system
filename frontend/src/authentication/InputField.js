import React, { useState } from "react";

function InputField(props) {
  const [focused, setFocused] = useState(false);
  const { icon, errorMessage, onChange, id, ...inputProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="field form-input">
      <div className="ui left">
          <input
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            focused={focused.toString()}
          />
          <div className="error-text">
            <p>{errorMessage}</p>
          </div>
      </div>
    </div>
  );
}

export default InputField;
