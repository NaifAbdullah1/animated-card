import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // For local access within home's network
    host: "192.168.100.168", // Home's IP address.
    port: 3000, // or any other port number
  },
});
