import React from "react";
import { UnlinkIcon } from "lucide-react";
import { useSlate } from "slate-react";

import { isLinkActive, unwrapLink } from "@/lib/utils";

import { Button } from "../components";

const RemoveLinkButton: React.FC = () => {
  const editor = useSlate();

  return (
    <Button
      active={isLinkActive(editor)}
      onMouseDown={(event: React.MouseEvent) => {
        event.preventDefault();
        if (isLinkActive(editor)) {
          unwrapLink(editor);
        }
      }}
    >
      <UnlinkIcon className="w-5 h-5" />
    </Button>
  );
};

export default RemoveLinkButton;
