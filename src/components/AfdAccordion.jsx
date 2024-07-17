import symbol from "../assets/icons/utility-sprite/svg/symbols.svg";
import PropTypes from "prop-types";
import cn from "classnames";
import { useEffect, useState } from "react";

export const AfdAccordion = (props) => {
  const { children, title, isOpen } = props;
  const [open, setOpen] = useState();

  useEffect(() => {
    if (isOpen) {
      setOpen(isOpen);
    }
  }, [isOpen]);

  return (
    <>
      <li className="slds-accordion__list-item">
        <section
          className={cn("slds-accordion__section", { "slds-is-open": open })}
        >
          <div className="slds-accordion__summary">
            <h2 className="slds-accordion__summary-heading">
              <button
                className="slds-button slds-button_reset slds-accordion__summary-action"
                aria-controls="referenceId-42"
                aria-expanded="true"
                title={title}
                onClick={() => setOpen(!open)}
              >
                <svg
                  className="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left"
                  aria-hidden="true"
                >
                  <use xlinkHref={symbol + "#switch"}></use>
                </svg>
                <span className="slds-accordion__summary-content">{title}</span>
              </button>
            </h2>
          </div>
          <div className="slds-accordion__content" id="referenceId-42">
            {children}
          </div>
        </section>
      </li>
    </>
  );
};

export const AfdAccordionContainer = (props) => {
  return <ul className="slds-accordion">{props.children}</ul>;
};

AfdAccordion.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  title: PropTypes.string,
  isOpen: PropTypes.bool,
};

AfdAccordionContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
