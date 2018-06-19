import React from "react";
import Input from "material-ui/TextField";

import "./UserInput.css";

const userInput = props => {
  return (
    <div className="UserInput">
      <Input
        fullWidth
        type="text"
        onChange={props.changed}
        value={props.name}
      />
    </div>
  );
};

export default userInput;
