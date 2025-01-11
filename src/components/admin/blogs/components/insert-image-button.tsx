import React from "react";
import { ImageIcon } from "lucide-react";
import { useSlateStatic } from "slate-react";

import { insertImage, isImageUrl } from "@/lib/utils";

import { Button } from "../components";

const InsertImageButton: React.FC = () => {
  const editor = useSlateStatic();
  return (
    <Button
      onMouseDown={(event: React.MouseEvent) => {
        event.preventDefault();
        const url = window.prompt("Enter the URL of the image:");
        if (url && !isImageUrl(url)) {
          alert("URL is not an image");
          return;
        }
        if (url) {
          insertImage(editor, url);
        }
      }}
    >
      <ImageIcon className="w-5 h-5" />
    </Button>
  );
};

export default InsertImageButton;
