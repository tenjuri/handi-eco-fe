import React from "react";
import Feature from "./feature";
import New from "./new";
import { type getDictionary } from "../../../../get-dictionary";

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
};

const Product: React.FC<Props> = async ({ dictionary }) => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1440px] xl:mt-10 p-10  mx-auto">
        <Feature dictionary={dictionary} />
        <New dictionary={dictionary} />
      </div>
    </div>
  );
};

export default Product;
