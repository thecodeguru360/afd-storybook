import UtilitySpriteSymbol from "../assets/icons/utility-sprite/svg/symbols.svg";
import ActionSpriteSymbol from "../assets/icons/action-sprite/svg/symbols.svg";
import CustomSpriteSymbol from "../assets/icons/custom-sprite/svg/symbols.svg";
import DoctypeSpriteSymbol from "../assets/icons/doctype-sprite/svg/symbols.svg";
import StandardSpriteSymbol from "../assets/icons/standard-sprite/svg/symbols.svg";
import { PropTypes } from "prop-types";
import cn from "classnames";

export const AfdIcon = ({
  type,
  icon,
  color,
  size,
  flip,
  currentColor,
  containerClasses,
  iconClasses,
  title,
  description,
}) => {
  const sldsIconClass = `slds-icon-${type}-${icon}`;
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
  const containerClassList = cn({
    "slds-icon_container": true,
    [containerClasses]: true,
    [sldsIconClass]: true,
    "slds-current-color": currentColor,
    "slds-icon_flip": flip,
  });
  const iconClassList = cn({
    "slds-icon": true,
    [iconClasses]: true,
    "slds-icon-text-success": color === "success",
    "slds-icon-text-warning": color === "warning",
    "slds-icon-text-error": color === "error",
    "slds-icon-text-light": color === "light",
    "slds-icon-text-default": color === "default",
    "slds-icon_xx-small": size === "xx-small",
    "slds-icon_x-small": size === "x-small",
    "slds-icon_small": size === "small",
    "slds-icon_medium": size === "medium",
    "slds-icon_large": size === "large",
  });
  return (
    <span className={containerClassList} title={title}>
      <svg className={iconClassList} aria-hidden="true">
        <use xlinkHref={iconRef}></use>
      </svg>
      <span className="slds-assistive-text">{description}</span>
    </span>
  );
};

AfdIcon.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  containerClasses: PropTypes.string,
  iconClasses: PropTypes.string,
  title: PropTypes.string,
  currentColor: PropTypes.bool,
  flip: PropTypes.bool,
  description: PropTypes.string,
};
