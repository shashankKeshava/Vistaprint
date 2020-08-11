import * as React from "react";
import classNames from "classnames";

export const Button = props => {
  const { className, variant = "secondary", ...otherProps } = props;

  return (
    <button
      className={classNames(
        "textbutton",
        {
          "textbutton-skin-secondary": variant === "secondary",
          "textbutton-skin-primary": variant === "primary"
        },
        className
      )}
      {...otherProps}
    />
  );
};
