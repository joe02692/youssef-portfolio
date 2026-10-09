// Light is the default theme. Only an explicit switch to dark is stored, so
// clearing it returns the visitor to the default.
export const THEME_STORAGE_KEY = "theme";

export const THEME_COLORS = { light: "#f5f7fc", dark: "#05070f" } as const;

// Runs inline in <head> before first paint so a saved dark preference never
// flashes light. Keep it tiny and dependency-free.
export const themeInitScript = `(function(){try{if(localStorage.getItem("${THEME_STORAGE_KEY}")==="dark"){document.documentElement.setAttribute("data-theme","dark")}}catch(e){}})()`;
