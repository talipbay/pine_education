const isProd = process.env.NODE_ENV === "production";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isProd && isGitHubPages ? "/pine_education" : "";

export function getImagePath(path: string): string {
  return `${basePath}${path}`;
}
