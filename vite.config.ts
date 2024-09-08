import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: "local", // 'global' or 'local'
      globalModulePaths: [/global\.scss$/],
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables";`, // For global Sass variables
      },
    },
  },
});
