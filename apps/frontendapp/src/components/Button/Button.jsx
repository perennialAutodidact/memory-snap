import React from "react";
import proptypes from "@/proptypes";

const Button = ({
  bgColorClass,
  text,
  textColor = "dark",
  type = "submit",
}) => {
  return (
    <button type={type} className={`btn text-${textColor} btn-${bgColorClass}`}>
      {text}
    </button>
  );
};

Button.propTypes = proptypes.App.Button;

export default Button;
