import React from "react";

function InputField({field}) {
  return (
    <div class="field">
      <div class="ui left icon input">
        <i class="user icon"></i>
        <input type="text" name={field.name} placeholder="E-mail address" />
      </div>
    </div>
  );
}

export default InputField;
