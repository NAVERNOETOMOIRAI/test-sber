import React from "react";
import "./styles.scss";
const Btn = (props) => {
  const { children, ...btnProps } = props;
  return (
    <button className="button" {...btnProps}>
      {children}
    </button>
  );
};
export default Btn;
