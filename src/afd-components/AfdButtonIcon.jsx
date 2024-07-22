import UtilitySpriteSymbol from "../assets/icons/utility-sprite/svg/symbols.svg";
import ActionSpriteSymbol from "../assets/icons/action-sprite/svg/symbols.svg";
import CustomSpriteSymbol from "../assets/icons/custom-sprite/svg/symbols.svg";
import DoctypeSpriteSymbol from "../assets/icons/doctype-sprite/svg/symbols.svg";
import StandardSpriteSymbol from "../assets/icons/standard-sprite/svg/symbols.svg";
import { PropTypes } from "prop-types";
import cn from "classnames";

export const AfdButtonIcon = ({
  type,
  icon,
  brand,
  inverse,
  color,
  iconContainer,
  size,
  description,
  title,
  disabled,
}) => {
  let iconRef = UtilitySpriteSymbol + "#" + icon;
  if (type === "action") {
    iconRef = ActionSpriteSymbol + "#" + icon;
  }
  if (type === "custom") {
    iconRef = CustomSpriteSymbol + "#" + icon;
  }
  if (type === "doctype") {
    iconRef = DoctypeSpriteSymbol + "#" + icon;
  }
  if (type === "standard") {
    iconRef = StandardSpriteSymbol + "#" + icon;
  }

  const buttonIconClassList = cn({
    "slds-button": true,
    "slds-button_icon": true,
    "slds-button_icon-container": iconContainer === "bare",
    "slds-button_icon-border-filled": iconContainer === "bordered-filled",
    "slds-button_icon-border": iconContainer === "bordered",
    "slds-button_icon-border-inverse": iconContainer === "bordered-inverse",
    "slds-button_icon-large": size === "large" && iconContainer,
    "slds-button_icon-x-small": size === "x-small" && iconContainer,
    "slds-button_icon-xx-small": size === "xx-small" && iconContainer,
    "slds-button_icon-small": size === "small" && iconContainer,
    "slds-button_icon-brand": brand,
    "slds-button_icon-inverse": inverse,
    "slds-button_icon-warning": color === "warning",
    "slds-button_icon-error": color === "error",
  });
  const iconClassList = cn({
    "slds-button__icon": true,
    "slds-button__icon_x-small": size === "x-small" && !iconContainer,
    "slds-button__icon_small": size === "small" && !iconContainer,
    "slds-button__icon_large": size === "large" && !iconContainer,
  });

  return (
    <button className={buttonIconClassList} title={title} disabled={disabled}>
      <svg className={iconClassList} aria-hidden="true">
        <use xlinkHref={iconRef}></use>
      </svg>
      <span className="slds-assistive-text">{description}</span>
    </button>
  );
};

AfdButtonIcon.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  brand: PropTypes.bool,
  inverse: PropTypes.bool,
  iconContainer: PropTypes.string,
  disabled: PropTypes.bool,
};
