// Show toast notification
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.className = "show";

  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 2500);
}

// Copy phone number with fallback
function copyNumber(number) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(number).then(() => {
      showToast("Copied: " + number);
    }).catch(() => {
      fallbackCopy(number);
    });
  } else {
    fallbackCopy(number);
  }
}

function fallbackCopy(number) {
  const input = document.createElement("input");
  input.value = number;
  document.body.appendChild(input);
  input.select();
  input.setSelectionRange(0, 99999); // for mobile devices

  try {
    document.execCommand("copy");
    showToast("Copied: " + number);
  } catch (err) {
    showToast("Failed to copy. Please copy manually.");
  }

  document.body.removeChild(input);
}


// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
  }

const TRACKING_URL = "https://script.google.com/macros/s/AKfycbzn98xDflVV0IjpLPFv5BqGxxD9hr8g36J52moxJOwMx6LtmvtL0Zp9tQKEr6tzkWgr4w/exec"; // replace with Apps Script URL

async function fetchOrders() {
  const res = await fetch(TRACKING_URL);
  const orders = await res.json();
  return orders;
}

async function checkOrder(event) {
  event.preventDefault();
  const input = document.getElementById("order").value.trim();
  const statusBox = document.getElementById("order-status");

  const orders = await fetchOrders();
  const order = orders.find(o => o.order === input);

  if (order) {
    statusBox.innerHTML = `
      ✅ Order <strong>${order.order}</strong> found in <em>${order.sheet}</em>
    `;
  } else {
    statusBox.innerText = "❌ Order not found. Please check your number.";
  }
}


});











