import { defineConfig } from "vite";

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
      awaitWriteFinish: { stabilityThreshold: 300 },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        work: "work.html",
        about: "about.html",
        contact: "contact.html",
        lbs: "work/lbs-play.html",
        frederick: "work/frederick-tattoo.html",
        paiva: "work/paiva-lat.html",
      },
    },
  },
});
