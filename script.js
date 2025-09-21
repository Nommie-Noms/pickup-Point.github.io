// Copy phone number (with fallback for older browsers)
function copyToClipboard(number) {
  if (navigator.clipboard && window.isSecureContext) {
    // Modern method (works on HTTPS and localhost)
    navigator.clipboard.writeText(number).then(() => {
      alert("Phone number copied: " + number);
    }).catch(err => {
      console.error("Clipboard error:", err);
      fallbackCopy(number);
    });
  } else {
    // Fallback for older browsers
    fallbackCopy(number);
  }
}

// Fallback function using hidden textarea
function fallbackCopy(number) {
  const textarea = document.createElement("textarea");
  textarea.value = number;
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
    alert("Phone number copied: " + number);
  } catch (err) {
    alert("Failed to copy. Please copy manually: " + number);
  }
  document.body.removeChild(textarea);
}

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile');
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
  }
});

