import React from "react";

import Callout, { CalloutBody, CalloutActions, CalloutMedia } from "./Callout";
import Button from "components/atoms/Button";

import SpeedImage from "draws/Speed";

export default {
  title: "Components/Atoms/Callout",
  component: Callout,
  subcomponents: { CalloutBody, CalloutActions, CalloutMedia },
};

export const usage = () => (
  <Callout>
    <CalloutBody>
      <h6>Faça sua matrícula agora mesmo</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quidem
        vel perferendis et a, porro atque officia aliquid voluptate recusandae,
        corporis obcaecati delectus aut repellendus, doloribus aspernatur
        libero? Quasi, consequuntur?
      </p>
      <CalloutActions>
        <Button color="primary">Matricular</Button>
      </CalloutActions>
    </CalloutBody>
    <CalloutMedia>
      <SpeedImage />
    </CalloutMedia>
  </Callout>
);
