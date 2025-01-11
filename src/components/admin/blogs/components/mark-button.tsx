import React from "react";
import { useSlate } from "slate-react";

import { isMarkActive, toggleMark } from "@/lib/utils";

import { Button } from "../components";

type MarkButtonProps = { format: string; icon: React.ReactNode };
const MarkButton: React.FC<MarkButtonProps> = (props) => {
  const editor = useSlate();
  const { format, icon } = props;

  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event: React.MouseEvent) => {
        event.preventDefault();
        toggleMark({ editor, format });
      }}
    >
      {icon && icon}
    </Button>
  );
};

export default MarkButton;
