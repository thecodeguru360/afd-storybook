import PropTypes, { string, boolean } from "prop-types";
import cn from "classnames";

export const AfdButton = (props) => {
  const { children,variant,disabled } = props;
  const classNames = cn({
    "slds-button": true,
    
    "slds-button_neutral": variant === "neutral",
    "slds-button_brand": variant === "brand",
    "slds-button_outline-brand": variant === "outline-brand",
    "slds-button_destructive": variant === "destructive",
    "slds-button_text-destructive": variant === "text-destructive",
    "slds-button_success": variant === "success",
  });
  return <button className={classNames} disabled={disabled}>{children}</button>;
};

AfdButton.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  variant: string,
  disabled: boolean,
};
