import React from "react";

const userOutput = props => {
  return (
    <div>
      <p>User Output Component</p>
      <p>Username: {props.name}</p>
    </div>
  );
};

export default userOutput;
