import React, { useMemo } from "react";
import { RenderElementProps } from "slate-react";
import { LinkElement } from "@/lib/custom-types";
import { css } from "@emotion/css";

type LinkComponentProps = {
  attributes: RenderElementProps["attributes"];
  children: React.ReactNode;
  element: LinkElement;
};

const LinkComponent: React.FC<LinkComponentProps> = ({
  attributes,
  children,
  element,
}) => {
  const allowedSchemes = ["http:", "https:", "mailto:", "tel:"];
  const safeUrl = useMemo(() => {
    let parsedUrl: URL | null = null;
    try {
      parsedUrl = new URL(element.url);
    } catch {}
    if (parsedUrl && allowedSchemes.includes(parsedUrl.protocol)) {
      return parsedUrl.href;
    }
    return "about:blank";
  }, [element.url]);

  return (
    <a {...attributes} href={safeUrl} className="text-blue-500 underline">
      <InlineChromiumBugfix />
      {children}
      <InlineChromiumBugfix />
    </a>
  );
};

const InlineChromiumBugfix = () => (
  <span
    contentEditable={false}
    className={css`
      font-size: 0;
    `}
  >
    {String.fromCodePoint(160) /* Non-breaking space */}
  </span>
);

export default LinkComponent;
