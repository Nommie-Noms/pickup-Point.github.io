// script.js (top-level, not a module)
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('status-btn');
  const status = document.getElementById('status');

  if (!btn || !status) {
    console.warn('status button or section not found');
    return;
  }

  btn.addEventListener('click', function () {
    const isHidden = getComputedStyle(status).display === 'none';
    status.style.display = isHidden ? 'block' : 'none';
    if (isHidden) status.scrollIntoView({ behavior: 'smooth' });
    // optional: change button text
    btn.textContent = isHidden ? 'Hide Service Status' : 'Check Service Status';
  });
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

  function toggleStatus() {
  const statusSection = document.getElementById("status");
  if (statusSection.style.display === "none" || statusSection.style.display === "") {
    statusSection.style.display = "block";
    statusSection.scrollIntoView({ behavior: "smooth" });
  } else {
    statusSection.style.display = "none";
  }
}
});



