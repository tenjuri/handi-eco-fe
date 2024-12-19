import React from "react";
import Feature from "./feature";
import New from "./new";

const Product: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1440px] xl:mt-10 p-10  mx-auto">
        <Feature />
        <New />
      </div>
    </div>
  );
};

export default Product;
