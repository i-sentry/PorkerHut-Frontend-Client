import React from "react";
import "../snackbar/snackbar.css";

const Snackbar = (props: any) => {
  return (
    <div
      className="snackbar"
      style={{
        backgroundColor: props.type === "success" ? "#197B30" : "#F91919",
      }}
    >
      <div className="message">{props.message}</div>
    </div>
  );
};

export default Snackbar;
