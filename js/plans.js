// js/plans.js — Recharge plans module
// Author: Person 2

const plans = [
  { price: 199, validity: "28 days", data: "1.5GB/day", calls: "Unlimited", sms: "100/day", type: "Combo", badge: "Popular" },
  { price: 299, validity: "28 days", data: "2GB/day", calls: "Unlimited", sms: "100/day", type: "Combo" },
  { price: 79,  validity: "28 days", data: "No data", calls: "Unlimited", sms: "100/day", type: "Talktime" },
  { price: 149, validity: "20 days", data: "1GB/day", calls: "Unlimited", sms: "100/day", type: "Combo" },
  { price: 49,  validity: "1 day",   data: "1GB",      calls: "-", sms: "-", type: "Data" },
  { price: 449, validity: "56 days", data: "1.5GB/day", calls: "Unlimited", sms: "100/day", type: "Combo", badge: "Best Value" },
  { price: 29,  validity: "1 day",   data: "-",         calls: "Talktime ₹29", sms: "-", type: "Talktime" },
  { price: 599, validity: "84 days", data: "1GB/day",   calls: "Unlimited", sms: "100/day", type: "Combo" },
];

let currentFilter = "all";

function renderPlans() {
  const grid = document.getElementById("planGrid");
  const filtered = currentFilter === "all" ? plans : plans.filter(p => p.type === currentFilter);

  grid.innerHTML = filtered.map(p => `
    <div class="card plan-card">
      ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
      <div class="price">₹${p.price}</div>
      <div class="validity">Validity: ${p.validity}</div>
      <ul>
        <li>📶 Data: ${p.data}</li>
        <li>📞 Calls: ${p.calls}</li>
        <li>✉️ SMS: ${p.sms}</li>
      </ul>
      <button class="btn block" onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
    </div>
  `).join("");
}

function addToCart(plan) {
  localStorage.setItem("selectedPlan", JSON.stringify(plan));
  showToast("Plan added! Redirecting to cart...");
  setTimeout(() => (window.location.href = "cart.html"), 800);
}

document.getElementById("filterBar").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    document.querySelectorAll("#filterBar button").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    currentFilter = e.target.dataset.type;
    renderPlans();
  }
});

renderPlans();


