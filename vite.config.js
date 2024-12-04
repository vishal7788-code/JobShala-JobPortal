import path from "path";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint"; // Import the ESLint plugin
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      emitWarning: false, // Disable warnings in the terminal
      emitError: false,   // Disable errors in the terminal
      failOnWarning: false, // Ensure the build doesn't fail on warnings
      failOnError: false,   // Ensure the build doesn't fail on errors
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
