import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css";
import "./assets/theme/affinity-design-system.scss";
import "./App.css";
import { AfdButton } from "./afd-components/AfdButton";
import {
  AfdAccordion,
  AfdAccordionContainer,
} from "./afd-components/AfdAccordion";
import { AfdIcon } from "./afd-components/AfdIcon";
import { AfdMenus } from "./afd-components/AfdMenus";
import { AfdAvatar } from "./afd-components/AfdAvatar";

function App() {
  return (
    <div className="content-box">
      <div className="">
        <h1 className="slds-text-heading_large">Components</h1>
        <AfdAvatar />
        <AfdMenus
          menuList={[
            { title: "Menus", isHeader: true },
            {
              title: "Menu A",
              icon: "search",
              iconType: "utility",
              iconPosition: "left",
            },
            {
              title: "Menu B",
              icon: "search",
              iconType: "utility",
              iconPosition: "left",
            },
            { isDivider: true },
            {
              title: "Menu C",
              icon: "search",
              iconType: "utility",
              iconPosition: "right",
            },
          ]}
        />

        <AfdButton>Base Button</AfdButton>

        <AfdAccordionContainer>
          <AfdAccordion title="Accordion A">
            <p>Accordion Details A</p>
          </AfdAccordion>
          <AfdAccordion title="Accordion B" isOpen>
            <p>Accordion Details B</p>
          </AfdAccordion>
        </AfdAccordionContainer>

        <AfdIcon
          icon="description"
          title="description Icon"
          type="action"
          size="xx-small"
          containerClasses="slds-icon_container_circle"
        />

        <h3 className="slds-text-heading_small">Heading Small</h3>
        <ol>
          <li>The quick brown fox jumps over the lazy dog.</li>
          <li>
            The quick brown fox jumps over the lazy dog.
            <ol>
              <li>The quick brown fox jumps over the lazy dog.</li>
              <li>
                The quick brown fox jumps over the lazy dog.
                <ol>
                  <li>The quick brown fox jumps over the lazy dog.</li>
                  <li>The quick brown fox jumps over the lazy dog.</li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
