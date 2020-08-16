import React from "react";

import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
};

export const usage = () => (
  <>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam veritatis
      autem reprehenderit necessitatibus laborum perspiciatis. Repellat mollitia
      minus, eum eos excepturi quos placeat culpa ea consequuntur facere vel.
      Consequatur, reiciendis.
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam veritatis
      autem reprehenderit necessitatibus laborum perspiciatis. Repellat mollitia
      minus, eum eos excepturi quos placeat culpa ea consequuntur facere vel.
      Consequatur, reiciendis.
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam veritatis
      autem reprehenderit necessitatibus laborum perspiciatis. Repellat mollitia
      minus, eum eos excepturi quos placeat culpa ea consequuntur facere vel.
      Consequatur, reiciendis.
    </Accordion>
  </>
);

export const withGroup = () => (
  <AccordionGroup>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam veritatis
      autem reprehenderit necessitatibus laborum perspiciatis. Repellat mollitia
      minus, eum eos excepturi quos placeat culpa ea consequuntur facere vel.
      Consequatur, reiciendis.
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam veritatis
      autem reprehenderit necessitatibus laborum perspiciatis. Repellat mollitia
      minus, eum eos excepturi quos placeat culpa ea consequuntur facere vel.
      Consequatur, reiciendis.
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam veritatis
      autem reprehenderit necessitatibus laborum perspiciatis. Repellat mollitia
      minus, eum eos excepturi quos placeat culpa ea consequuntur facere vel.
      Consequatur, reiciendis.
    </Accordion>
  </AccordionGroup>
);
