import React from "react";
import AccordionComponent from "./Accordion";

export default {
  title: "ReactComponentLibrary/Accordion",
  component: AccordionComponent,
};

const Template = (args) => <AccordionComponent {...args}>Button</AccordionComponent>;

export const Accordion = Template.bind({});

Accordion.args = {
  title: "Collapsible Item 1",
  content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        explicabo eligendi molestiae cumque delectus quis, ut error itaque
        soluta sed ducimus cupiditate dignissimos atque et quod quaerat
        corporis. Doloremque, culpa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        explicabo eligendi molestiae cumque delectus quis, ut error itaque
        soluta sed ducimus cupiditate dignissimos atque et quod quaerat
        corporis. Doloremque, culpa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        explicabo eligendi molestiae cumque delectus quis, ut error itaque
        soluta sed ducimus cupiditate dignissimos atque et quod quaerat
        corporis. Doloremque, culpa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        explicabo eligendi molestiae cumque delectus quis, ut error itaque
        soluta sed ducimus cupiditate dignissimos atque et quod quaerat
        corporis. Doloremque, culpa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        explicabo eligendi molestiae cumque delectus quis, ut error itaque
        soluta sed ducimus cupiditate dignissimos atque et quod quaerat
        corporis. Doloremque, culpa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        explicabo eligendi molestiae cumque delectus quis, ut error itaque
        soluta sed ducimus cupiditate dignissimos atque et quod quaerat
        corporis. Doloremque, culpa!`,
};
