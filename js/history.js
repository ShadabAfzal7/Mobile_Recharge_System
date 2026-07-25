// js/history.js — Transaction History module
// Author: Person 2

function renderHistory(filter = "") {
  const history = JSON.parse(localStorage.getItem("history")) || [];
  const filtered = history.filter(t => t.number && t.number.includes(filter));
  const body = document.getElementById("historyBody");

  if (filtered.length === 0) {
    body.innerHTML = `<tr><td colspan="5" style="text-align:center;color:var(--muted);">No transactions found</td></tr>`;
    return;
  }

  body.innerHTML = filtered.map(t => `
    <tr>
      <td>${t.id}</td>
      <td>${t.number}</td>
      <td>₹${t.amount}</td>
      <td>${t.date}</td>
      <td><span class="status ${t.status}">${t.status.toUpperCase()}</span></td>
    </tr>
  `).join("");
}

document.getElementById("searchBox").addEventListener("input", (e) => {
  renderHistory(e.target.value);
});

renderHistory();


