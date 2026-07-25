// js/auth.js — mock authentication using localStorage
// Author: Person 1

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("suName").value;
      const email = document.getElementById("suEmail").value;
      const password = document.getElementById("suPassword").value;

      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      showToast("Account created! Please login");
      setTimeout(() => (window.location.href = "login.html"), 1000);
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const found = users.find((u) => u.email === email && u.password === password);

      if (found) {
        localStorage.setItem("currentUser", JSON.stringify(found));
        showToast("Login successful!");
        setTimeout(() => (window.location.href = "index.html"), 800);
      } else {
        showToast("Invalid credentials");
      }
    });
  }
});


