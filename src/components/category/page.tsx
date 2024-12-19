import React from "react";

type PropType = {
  slug: string;
};
const Category: React.FC<PropType> = ({ slug }) => {
  return <div>Category {slug}</div>;
};

export default Category;
