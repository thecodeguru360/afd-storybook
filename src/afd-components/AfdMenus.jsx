import UtilitySpriteSymbol from "../assets/icons/utility-sprite/svg/symbols.svg";

import { PropTypes } from "prop-types";
import cn from "classnames";
import { useState } from "react";
import { AfdSvgIcon } from "./AfdSvgIcon";

export const AfdMenus = ({
  isOpen,
  menuList,
  position = "left",
  length = 5,
  width = "x-small",
}) => {
  const [open, setOpen] = useState(isOpen);

  const triggerClassList = cn({
    "slds-dropdown-trigger": true,
    "slds-dropdown-trigger_click": true,
    "slds-is-open": open,
  });

  const dropdownClassList = cn({
    "slds-dropdown": true,
    "slds-dropdown_left": position === "left",
    "slds-dropdown_right": position === "right",
    "slds-dropdown_bottom": position === "bottom",
    "slds-dropdown_top": position === "top",
    "slds-dropdown_length-5": length === 5,
    "slds-dropdown_length-7": length === 7,
    "slds-dropdown_length-10": length === 10,
    "slds-dropdown_xx-small": width === "xx-small",
    "slds-dropdown_x-small": width === "x-small",
    "slds-dropdown_small": width === "small",
    "slds-dropdown_medium": width === "medium",
    "slds-dropdown_large": width === "large",
  });

  return (
    <div className={triggerClassList}>
      <button
        className="slds-button slds-button_icon slds-button_icon-border-filled"
        aria-haspopup="true"
        aria-expanded={open}
        title="Show More"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <svg className="slds-button__icon" aria-hidden="true">
          <use xlinkHref={UtilitySpriteSymbol + "#down"}></use>
        </svg>
        <span className="slds-assistive-text">Show More</span>
      </button>
      <div className={dropdownClassList}>
        <ul className="slds-dropdown__list" role="menu" aria-label="Show More">
          {menuList.map((menu, i) => renderMenuItem(menu, i))}
        </ul>
      </div>
    </div>
  );
};

const renderMenuItem = (menu, i) => {
  let item = (
    <li key={i} className="slds-dropdown__item" role="presentation">
      <a href="#" role="menuitem" tabIndex="-1">
        <span className="slds-truncate" title={menu.title}>
          {menu.title}
        </span>
      </a>
    </li>
  );

  if (menu.isDivider) {
    item = (
      <li key={i} className="slds-has-divider_top-space" role="separator"></li>
    );
  }
  if (menu.isHeader) {
    item = (
      <li
        key={i}
        className="slds-dropdown__header slds-truncate"
        title={menu.title}
        role="separator"
      >
        <span>{menu.title}</span>
      </li>
    );
  }
  if (menu.icon) {
    item = (
      <li key={i} className="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabIndex="-1">
          <span className="slds-truncate" title={menu.title}>
            {menu.iconPosition === "left" && (
              <AfdSvgIcon
                icon={menu.icon}
                type={menu.iconType}
                position={menu.iconPosition}
              />
            )}
            {menu.title}
            {menu.iconPosition === "right" && (
              <AfdSvgIcon
                icon={menu.icon}
                type={menu.iconType}
                position={menu.iconPosition}
              />
            )}
          </span>
        </a>
      </li>
    );
  }
  return item;
};

AfdMenus.propTypes = {
  isOpen: PropTypes.bool,
  menuList: PropTypes.arrayOf({
    title: PropTypes.string,
    icon: PropTypes.string,
    iconType: PropTypes.string,
    isDivider: PropTypes.bool,
    iconPosition: PropTypes.string,
    isHeader: PropTypes.bool,
  }),
  position: PropTypes.string,
  length: PropTypes.number,
  width: PropTypes.string,
};
