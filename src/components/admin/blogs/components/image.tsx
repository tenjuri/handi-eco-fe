import { Transforms } from "slate";
import {
  useSlateStatic,
  useSelected,
  useFocused,
  ReactEditor,
} from "slate-react";
import { css } from "@emotion/css";

import { ImageElement } from "@/lib/custom-types";

import { Button } from "../components";

type ImageProps = {
  attributes: React.HTMLAttributes<HTMLDivElement>;
  children: React.ReactNode;
  element: ImageElement;
};

const Image: React.FC<ImageProps> = ({ attributes, children, element }) => {
  const editor = useSlateStatic();
  const path = ReactEditor.findPath(editor, element);

  const selected = useSelected();
  const focused = useFocused();
  return (
    <div {...attributes} className="inline-flex w-max">
      {children}
      <div contentEditable={false} className="inline-flex w-max">
        <img
          src={element.url}
          className={css`
            display: block;
            max-width: 100%;
            box-shadow: ${selected && focused ? "0 0 0 3px #B4D5FF" : "none"};
          `}
          alt="image"
        />
        <Button
          active
          onClick={() => Transforms.removeNodes(editor, { at: path })}
          className={css`
            display: ${selected && focused ? "inline" : "none"};
            position: absolute;
            top: 0.5em;
            left: 0.5em;
            background-color: white;
          `}
        >
          delete
        </Button>
      </div>
    </div>
  );
};

export default Image;
