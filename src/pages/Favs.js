import React from "react";
import { FavsWithQuery } from "../container/GetFavorites";

import { Layout } from "../components/layout";

export default () => (
  <Layout title="Tus favoritos" subtitle="aqui encontraras  tus favoritos">
    <FavsWithQuery />
  </Layout>
);
