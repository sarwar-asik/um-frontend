import React from "react";
type actionBarProps = {
  title?: string;
  children?: React.ReactElement | React.ReactNode;
};

const ActionBar = ({ title, children }: actionBarProps) => {
  return <div>

    <h1>{title}</h1>
    <div style={{display:"flex"}}>
        {children}
    </div>
  </div>;
};

export default ActionBar;
