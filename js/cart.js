// js/cart.js — Cart & Checkout module (mock payment)
// Author: Person 2

const rechargeInfo = JSON.parse(localStorage.getItem("rechargeInfo")) || {};
const selectedPlan = JSON.parse(localStorage.getItem("selectedPlan"));

function renderSummary() {
  const box = document.getElementById("orderSummary");
  if (!selectedPlan) {
    box.innerHTML = `<p>No plan selected. <a href="plans.html">Choose a plan</a></p>`;
    document.getElementById("payBtn").disabled = true;
    return;
  }
  box.innerHTML = `
    <div class="summary-row"><span>Mobile Number</span><b>${rechargeInfo.number || "-"}</b></div>
    <div class="summary-row"><span>Operator</span><b>${rechargeInfo.operator || "-"}</b></div>
    <div class="summary-row"><span>Plan Validity</span><b>${selectedPlan.validity}</b></div>
    <div class="summary-row"><span>Data</span><b>${selectedPlan.data}</b></div>
    <div class="summary-row" style="font-size:18px;"><span>Total Amount</span><b>₹${selectedPlan.price}</b></div>
  `;
}
renderSummary();

document.getElementById("payBtn").addEventListener("click", () => {
  const btn = document.getElementById("payBtn");
  btn.textContent = "Processing...";
  btn.disabled = true;

  setTimeout(() => {
    const success = Math.random() > 0.1;
    const txn = {
      id: "TXN" + Date.now(),
      number: rechargeInfo.number,
      operator: rechargeInfo.operator,
      amount: selectedPlan.price,
      date: new Date().toLocaleString(),
      status: success ? "success" : "failed",
    };
    const history = JSON.parse(localStorage.getItem("history")) || [];
    history.unshift(txn);
    localStorage.setItem("history", JSON.stringify(history));
    localStorage.removeItem("selectedPlan");

    showToast(success ? "Payment Successful ✅" : "Payment Failed ❌");
    setTimeout(() => (window.location.href = "history.html"), 1200);
  }, 1500);
});


