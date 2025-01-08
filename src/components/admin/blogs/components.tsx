import React, { PropsWithChildren } from "react";
import { cx, css } from "@emotion/css";

export const Button = React.forwardRef<
  HTMLSpanElement,
  PropsWithChildren<{
    className: string;
    active: boolean;
    reversed: boolean;
    [key: string]: unknown;
  }>
>(({ className, active, reversed, ...props }, ref) => (
  <span
    {...props}
    ref={ref}
    className={cx(
      className as string,
      css`
        cursor: pointer;
        color: ${reversed
          ? active
            ? "white"
            : "#aaa"
          : active
          ? "black"
          : "#ccc"};
      `
    )}
  />
));

Button.displayName = "Button";
