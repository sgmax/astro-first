// @ts-check
// import { defineConfig } from 'astro/config';

// https://astro.build/config
// export default defineConfig({});

// import Config file
import { defineConfig, fontProviders } from "astro/config";

// configure experimental.fonts object with one font
export default defineConfig({
    experimental: {
        fonts: [{
            provider: fontProviders.google(),
            name: "Roboto",
            cssVariable: "--font-roboto"
        }]
    }
});
