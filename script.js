// Copy phone number
function copyNumber(number) {
  navigator.clipboard.writeText(number).then(() => {
    alert("Phone number copied: " + number);
  });
}
});

