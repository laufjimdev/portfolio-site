export function getThemeByTime() {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 17 ? "day" : "dark";
}

export function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}