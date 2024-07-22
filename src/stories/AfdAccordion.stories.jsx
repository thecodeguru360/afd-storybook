import {
  AfdAccordion,
  AfdAccordionContainer,
} from "../afd-components/AfdAccordion";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/AfdAccordion",
  component: AfdAccordion,
  args: {
    title: "Accordion Title",
  },
  tags: ["autodocs"],
};

export const Default = {
  // args: {
  //   children: "Accordion Details",
  //   title: "Accordion Title",
  // },
  render: (args) => {
    return (
      <AfdAccordionContainer>
        <AfdAccordion {...args}>
          <p>Accordion Details A</p>
        </AfdAccordion>
      </AfdAccordionContainer>
    );
  },
};
