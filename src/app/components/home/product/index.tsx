import React from "react";
import Feature from "./feature";
import New from "./new";
const Product: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1440px] mt-10 p-10  mx-auto">
        <div className="flex items-center gap-8">
          <b className="flex-1 h-[2px] bg-[#D4A875]"></b>
          <h1 className="text-3xl font-bold italic uppercase text-center">
            featured products
          </h1>
          <b className="flex-1 h-[2px] bg-[#D4A875]"></b>
        </div>
        <div className="flex gap-10">
          <Feature />
          <New />
        </div>
      </div>
    </div>
  );
};

export default Product;
