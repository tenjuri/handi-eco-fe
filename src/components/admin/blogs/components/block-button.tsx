import React from "react";
import { useSlate } from "slate-react";

import { isBlockActive, toggleBlock, TEXT_ALIGN_TYPES } from "@/lib/utils";

import { Button } from "../components";

type BlockButtonProps = {
  format: string;
  icon: React.ReactNode;
};

const BlockButton: React.FC<BlockButtonProps> = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
      )}
      onMouseDown={(event: React.MouseEvent) => {
        event.preventDefault();
        toggleBlock({ editor, format });
      }}
    >
      {icon && icon}
    </Button>
  );
};

export default BlockButton;
