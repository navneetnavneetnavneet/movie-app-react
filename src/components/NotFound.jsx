import React from "react";
import notfound from "/notfound.gif"

const NotFound = () => {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <img className="h-1/2 object-cover" src={notfound} alt="" />
    </div>
  );
};

export default NotFound;
