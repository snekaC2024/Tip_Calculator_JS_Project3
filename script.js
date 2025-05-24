function calculateTip() {
  const billAmount = parseFloat(document.getElementById("billAmount").value);
  const tipPercent = parseFloat(document.getElementById("tipPercent").value);

  if (isNaN(billAmount) || billAmount <= 0) {
    alert("Please enter a valid bill amount");
    return;
  }

  const tip = billAmount * tipPercent;
  const total = billAmount + tip;

  document.getElementById("tipAmount").innerText = `Tip: $${tip.toFixed(2)}`;
  document.getElementById("totalAmount").innerText = `Total: $${total.toFixed(2)}`;
}



