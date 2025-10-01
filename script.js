const TRACKING_URL = "https://script.google.com/macros/s/AKfycbyZGdYbgnk1cbMz6l_9gBPb-nksk8R0Jk56RG1WEXlHqvWz2zQCRhdbWWVZXA71h_KX4w/exec";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("tracking-form");
  if (form) {
    form.addEventListener("submit", checkOrder);
  }
});

async function fetchOrders() {
  const res = await fetch(TRACKING_URL);
  if (!res.ok) throw new Error("Failed to fetch order data");
  return await res.json();
}

async function checkOrder(event) {
  event.preventDefault();

  const input = document.getElementById("order").value.trim();
  const statusBox = document.getElementById("order-status");
  statusBox.innerText = "Checking...";

  try {
    const orders = await fetchOrders();
    const order = orders.find(o => o.order === input);

    if (order) {
      console.log("Order found:", order);
      statusBox.innerHTML = `
        ✅ Order <strong>${order.order}</strong><br>
        📋 Status: ${order.status}
      `;
    } else {
      statusBox.innerText = "❌ Order not found. Please check your number.";
    }
  } catch (err) {
    console.error("Error fetching orders:", err);
    statusBox.innerText = "⚠️ Unable to check status. Please try again later.";
  }
}

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

});




























