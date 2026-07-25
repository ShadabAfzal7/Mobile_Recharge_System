// common.js — Navbar, footer, theme toggle, toast, auth helpers
// Author: Person 1

function renderNavbar(active) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  document.getElementById("navbar-placeholder").innerHTML = `
    <nav class="navbar">
      <a href="index.html" class="logo">📱 QuickRecharge</a>
      <div class="nav-links" id="navLinks">
        <a href="index.html" class="${active==='home'?'active':''}">Home</a>
        <a href="plans.html" class="${active==='plans'?'active':''}">Plans</a>
        <a href="history.html" class="${active==='history'?'active':''}">History</a>
        <a href="profile.html" class="${active==='profile'?'active':''}">Profile</a>
        ${user ? `<a href="#" onclick="logout()">Logout</a>` : `<a href="login.html">Login</a>`}
      </div>
      <button class="theme-btn" onclick="toggleTheme()">🌓</button>
      <button class="hamburger" onclick="document.getElementById('navLinks').classList.toggle('open')">☰</button>
    </nav>
  `;
}

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

(function applySavedTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
})();

function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

function logout() {
  localStorage.removeItem("currentUser");
  showToast("Logged out successfully");
  setTimeout(() => (window.location.href = "index.html"), 800);
}

function requireLogin() {
  if (!localStorage.getItem("currentUser")) {
    window.location.href = "login.html";
  }
}

function renderFooter() {
  document.getElementById("footer-placeholder").innerHTML = `
    <footer>© 2026 QuickRecharge | Agile & DevOps Lab Project | Built by Person 1 & Person 2</footer>
  `;
}


