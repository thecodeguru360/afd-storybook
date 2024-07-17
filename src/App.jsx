import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css";
import "./assets/theme/guidewire.scss";
import "./App.css";
import { AfdButton } from "./components/Button";
import { AfdAccordion, AfdAccordionContainer } from "./components/AfdAccordion";

function App() {
  return (
    <div className="content-box">
      <div className="">
        <h1 className="slds-text-heading_large">Components</h1>

        <AfdButton>Base Button</AfdButton>

        <AfdAccordionContainer>
          <AfdAccordion title="Accordion A">
            <p>Accordion Details A</p>
          </AfdAccordion>
          <AfdAccordion title="Accordion B" isOpen>
            <p>Accordion Details B</p>
          </AfdAccordion>
        </AfdAccordionContainer>

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
