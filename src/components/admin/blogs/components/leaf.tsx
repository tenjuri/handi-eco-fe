import React from "react";

import { CustomText } from "@/lib/custom-types";

type CustomRenderLeafProps = {
  children: React.ReactNode;
  leaf: CustomText;
  text: CustomText;
  attributes: {
    "data-slate-leaf": true;
  };
};

const Leaf: React.FC<CustomRenderLeafProps> = ({
  attributes,
  children,
  leaf,
}) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return (
    <span {...attributes} style={{ color: leaf.color }}>
      {children}
    </span>
  );
};

export default Leaf;
