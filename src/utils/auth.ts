// src/utils/auth.ts
export function isAuthenticated() {
  return localStorage.getItem("auth") === "true";
}

export function loginUser() {
  localStorage.setItem("auth", "true");
}

export function logoutUser() {
  localStorage.removeItem("auth");
}
