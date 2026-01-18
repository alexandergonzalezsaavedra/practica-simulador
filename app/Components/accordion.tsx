'use client';

import { Accordion, AccordionItem } from '@heroui/react';

const accordionComponent = () => {
  return (
    <Accordion>
      <AccordionItem
        key='1'
        title='Accordion 1'
      >
        Contenido
      </AccordionItem>
      <AccordionItem
        key='2'
        title='Accordion 2'
      >
        Contenido
      </AccordionItem>
    </Accordion>
  );
};

export default accordionComponent;
