// import Config file
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// configure site URL for RSS
export default defineConfig({
  site: "https://sgastro.netlify.app",
  integrations: [preact()]
});