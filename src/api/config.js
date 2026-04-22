/**
 * URL de l'API d'inscription.
 * - Développement : chemin relatif → proxy Vite → Apache (voir vite.config.js).
 * - Production : définir VITE_REGISTER_URL dans .env si le front et le PHP ne sont pas sur le même domaine.
 */
const fromEnv = import.meta.env.VITE_REGISTER_URL;
const activitiesFromEnv = import.meta.env.VITE_ACTIVITIES_URL;
const reportsFromEnv = import.meta.env.VITE_REPORTS_URL;

const isProd = import.meta.env.PROD;

export const REGISTER_URL =
  (fromEnv && String(fromEnv).trim()) ||
  (isProd ? "/api/register.php" : "/greenrise-api/api/register.php");

export const ACTIVITIES_URL =
  (activitiesFromEnv && String(activitiesFromEnv).trim()) ||
  (isProd ? "/api/activities.php" : "/greenrise-api/api/activities.php");

export const REPORTS_URL =
  (reportsFromEnv && String(reportsFromEnv).trim()) ||
  (isProd ? "/api/activity_reports.php" : "/greenrise-api/api/activity_reports.php");
