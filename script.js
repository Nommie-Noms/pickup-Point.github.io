// Your Google Apps Script Web App URL
const TRACKING_URL = "https://script.google.com/macros/s/AKfycbxUcWJ5ETGD4h8Pxtl0AcKyO-wsWZbUFLbo1movia60KUJ2DXkcApihdqI2u364U1kxLw/exec";

/**
 * Load order data via JSONP
 */
function fetchOrders(callback) {
  const script = document.createElement("script");
  // Add a timestamp to avoid caching
  script.src = `${TRACKING_URL}?callback=handleResponse&_=${Date.now()}`;
  document.body.appendChild(script);

  // Global JSONP callback
  window.handleResponse = function (data) {
    if (typeof callback === "function") {
      callback(data);
    } else {
      console.error("No valid callback function provided.");
    }
    script.remove(); // clean up
  };
}

/**
 * Handle form submission
 */
function checkOrder(event) {
  event.preventDefault();

  const input = document.getElementById("order").value.trim().toLowerCase();
  const statusBox = document.getElementById("order-status");
  const resultContainer = document.getElementById("order-result");

  statusBox.innerText = "Checking...";
  resultContainer.classList.remove("hidden");

  fetchOrders((orders) => {
    console.log("Orders received:", orders);

    const order = orders.find(o => o.order.toLowerCase() === input);

    if (order) {
      statusBox.innerHTML = `
        ✅ Order <strong>${order.order}</strong><br>
        📋 Status: ${order.status}
      `;
    } else {
      statusBox.innerText = "❌ Order not found. Please check your number.";
    }
  });
}

/**
 * Attach event listener when page loads
 */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("tracking-form");
  if (form) {
    form.addEventListener("submit", checkOrder);
    console.log("Tracking form ready ✅");
  } else {
    console.error("Tracking form not found ❌");
  }
});


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


document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const banner = document.querySelector(".service-status-banner");
  
  if (navbar && banner) {
    const navHeight = navbar.offsetHeight;
    banner.style.top = navHeight + "px";
  }
});


















































