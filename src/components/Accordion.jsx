import symbol from "../assets/icons/utility-sprite/svg/symbols.svg";

export const Accordion = () => {
  return (
    <>
      <h3 className="slds-text-heading_medium">Accordion</h3>

      <ul className="slds-accordion">
        <li className="slds-accordion__list-item">
          <section className="slds-accordion__section ">
            <div className="slds-accordion__summary">
              <h2 className="slds-accordion__summary-heading">
                <button
                  className="slds-button slds-button_reset slds-accordion__summary-action"
                  aria-controls="referenceId-42"
                  aria-expanded="true"
                  title="Accordion summary"
                >
                  <svg
                    className="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left"
                    aria-hidden="true"
                  >
                    <use xlinkHref={symbol + "#switch"}></use>
                  </svg>
                  <span className="slds-accordion__summary-content">
                    Accordion summary
                  </span>
                </button>
              </h2>
            </div>
            <div className="slds-accordion__content" id="referenceId-42">
              Accordion details - A
            </div>
          </section>
        </li>
        <li className="slds-accordion__list-item">
          <section className="slds-accordion__section">
            <div className="slds-accordion__summary">
              <h2 className="slds-accordion__summary-heading">
                <button
                  className="slds-button slds-button_reset slds-accordion__summary-action"
                  aria-controls="referenceId-43"
                  aria-expanded="false"
                  title="Accordion summary"
                >
                  <svg
                    className="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left"
                    aria-hidden="true"
                  >
                    {/* <use xlinkHref={SwitchIcon}></use> */}
                  </svg>
                  <span className="slds-accordion__summary-content">
                    Accordion summary
                  </span>
                </button>
              </h2>
            </div>
            <div
              hidden=""
              className="slds-accordion__content"
              id="referenceId-43"
            >
              Accordion details - B
            </div>
          </section>
        </li>
        <li className="slds-accordion__list-item">
          <section className="slds-accordion__section">
            <div className="slds-accordion__summary">
              <h2 className="slds-accordion__summary-heading">
                <button
                  className="slds-button slds-button_reset slds-accordion__summary-action"
                  aria-controls="referenceId-44"
                  aria-expanded="false"
                  title="Accordion summary"
                >
                  <svg
                    className="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left"
                    aria-hidden="true"
                  >
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
                  </svg>
                  <span className="slds-accordion__summary-content">
                    Accordion summary
                  </span>
                </button>
              </h2>
            </div>
            <div
              hidden=""
              className="slds-accordion__content"
              id="referenceId-44"
            >
              Accordion details - C
            </div>
          </section>
        </li>
      </ul>
    </>
  );
};
