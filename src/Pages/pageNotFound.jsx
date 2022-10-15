import React from "react";

const PageNotFound = () => {
  return (
    <div
      style={
        ({ position: "relative" }, { height: "100vh" }, { fontSize: "100px" })
      }
    >
      <h1
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        PAGE NOT FOUND :(
      </h1>
    </div>
  );
};

export default PageNotFound;
