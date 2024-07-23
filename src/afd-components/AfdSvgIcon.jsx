import UtilitySpriteSymbol from "../assets/icons/utility-sprite/svg/symbols.svg";
import ActionSpriteSymbol from "../assets/icons/action-sprite/svg/symbols.svg";
import CustomSpriteSymbol from "../assets/icons/custom-sprite/svg/symbols.svg";
import DoctypeSpriteSymbol from "../assets/icons/doctype-sprite/svg/symbols.svg";
import StandardSpriteSymbol from "../assets/icons/standard-sprite/svg/symbols.svg";
import { PropTypes } from "prop-types";
import cn from "classnames";

export const AfdSvgIcon = ({
  icon,
  type = "utility",
  position = "left",
  color = "default",
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
  const iconClassList = cn({
    "slds-icon": true,
    "slds-icon_x-small": true,
    "slds-m-right_x-small": position === "left",
    "slds-m-left_x-small": position === "right",
    " slds-shrink-none": position === "right",
    "slds-icon-text-default": color === "default",
  });

  return (
    <svg className={iconClassList} aria-hidden="true">
      <use xlinkHref={iconRef}></use>
    </svg>
  );
};

AfdSvgIcon.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string,
  position: PropTypes.string,
  color: PropTypes.string,
};
