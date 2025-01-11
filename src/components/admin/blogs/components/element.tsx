import React from "react";
import { RenderElementProps } from "slate-react";

import { ImageElement, LinkElement, CustomElement } from "@/lib/custom-types";

import Image from "./image";
import LinkComponent from "./link-component";

type TextAlign = "left" | "center" | "right" | "justify";
type ElementWithAlign = CustomElement & { align?: TextAlign };

const Element: React.FC<RenderElementProps & { element: CustomElement }> = (
  props
) => {
  const { attributes, children, element } = props;
  const style = { textAlign: (element as ElementWithAlign).align };

  switch (element.type) {
    case "image":
      return (
        <Image {...(props as RenderElementProps & { element: ImageElement })} />
      );

    case "block-quote":
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      );
    case "bulleted-list":
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );
    case "heading":
      return (
        <h1 style={style} {...attributes} className="font-bold text-4xl">
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2 style={style} {...attributes} className="font-bold text-3xl">
          {children}
        </h2>
      );
    case "heading-three":
      return (
        <h3 style={style} {...attributes} className="font-bold text-2xl">
          {children}
        </h3>
      );
    case "heading-four":
      return (
        <h4 style={style} {...attributes} className="font-bold text-xl">
          {children}
        </h4>
      );
    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case "check-list-item":
      return (
        <div style={style} {...attributes}>
          {children}
        </div>
      );
    case "link":
      return <LinkComponent {...props} element={element as LinkElement} />;
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};

export default Element;
