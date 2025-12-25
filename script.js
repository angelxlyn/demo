document.addEventListener("DOMContentLoaded", () => {
  const loadBtn = document.getElementById("loadBtn");
  const priceInput = document.getElementById("priceInput");
  const output = document.getElementById("output");

  function loadPrices() {
    let raw = priceInput.value;
    let clean = raw.replace(/\s+/g, " ").trim(); // sanitize pasted text
    output.textContent = `Processed prices: ${clean}`;
  }

  loadBtn.addEventListener("click", loadPrices);
  loadBtn.addEventListener("touchstart", loadPrices); // mobile support
});
