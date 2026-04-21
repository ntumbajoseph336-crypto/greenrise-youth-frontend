/**
 * URL de l'API d'inscription.
 * - Développement : chemin relatif → proxy Vite → Apache (voir vite.config.js).
 * - Production : définir VITE_REGISTER_URL dans .env si le front et le PHP ne sont pas sur le même domaine.
 */
const fromEnv = import.meta.env.VITE_REGISTER_URL;
const activitiesFromEnv = import.meta.env.VITE_ACTIVITIES_URL;
const reportsFromEnv = import.meta.env.VITE_REPORTS_URL;

export const REGISTER_URL =
  (fromEnv && String(fromEnv).trim()) ||
  "/greenrise-api/api/register.php";

export const ACTIVITIES_URL =
  (activitiesFromEnv && String(activitiesFromEnv).trim()) ||
  "/greenrise-api/api/activities.php";

export const REPORTS_URL =
  (reportsFromEnv && String(reportsFromEnv).trim()) ||
  "/greenrise-api/api/activity_reports.php";
