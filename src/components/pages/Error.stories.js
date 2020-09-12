import React from "react";

import Error from "./Error";
import TakenImage from "draws/Taken";

export default {
  title: "Components/Pages/Error",
  component: Error,
};

export const usage = () => (
  <Error
    image={<TakenImage />}
    title="Página não encontrada"
    description="Ops! Essa página foi abduzida"
  />
);
