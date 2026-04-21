import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Proxy /greenrise-api → PHP
 *
 * Par défaut (recommandé en dev) : serveur PHP intégré sur le port 8080
 *   → depuis la racine du projet : npm run php:api (dossier backend comme racine web)
 *   → pas besoin de copier dans htdocs
 *
 * Si vous utilisez XAMPP avec fichiers dans htdocs/greenrise-api/ :
 *   créez frontend/.env avec : VITE_PROXY_APACHE=1
 */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const useApache =
    env.VITE_PROXY_APACHE === "1" || env.VITE_PROXY_APACHE === "true";

  return {
    plugins: [react()],
    css: {
      postcss: {
        plugins: []
      }
    },
    server: {
      proxy: {
        "/greenrise-api": {
          target: useApache ? "http://127.0.0.1:80" : "http://127.0.0.1:8080",
          changeOrigin: true,
          // Avec PHP -S, la racine est "backend" → URL réelle /api/register.php (sans préfixe greenrise-api)
          ...(useApache
            ? {}
            : {
                rewrite: (path) => path.replace(/^\/greenrise-api/, "")
              })
        }
      }
    }
  };
});
