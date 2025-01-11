import { LinkIcon } from "lucide-react";
import { useSlate } from "slate-react";

import { isLinkActive, insertLink } from "@/lib/utils";

import { Button } from "../components";

const AddLinkButton: React.FC = () => {
  const editor = useSlate();
  return (
    <Button
      active={isLinkActive(editor)}
      onMouseDown={(event: React.MouseEvent) => {
        event.preventDefault();
        const url = window.prompt("Enter the URL of the link:");
        if (!url) return;
        insertLink(editor, url);
      }}
    >
      <LinkIcon className="w-5 h-5" />
    </Button>
  );
};

export default AddLinkButton;
