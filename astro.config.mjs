import { defineConfig } from "astro/config";
import swup from "@swup/astro";
// https://astro.build/config
export default defineConfig({
  site: "www.etnavidros.com.br",
  base: "/",
  integrations: [
    swup({
      theme: "slide",
      animationClass: "transition-",
      containers: ["main"],
      cache: true,
      preload: true,
      accessibility: true,
      forms: false,
      morph: false,
      parallel: false,
      progress: false,
      routes: false,
      smoothScrolling: true,
      updateBodyClass: false,
      updateHead: true,
      reloadScripts: true,
      debug: false,
      loadOnIdle: true,
      globalInstance: false,
      smoothScrolling: true,
    }),
  ],
});
