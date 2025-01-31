// Wait for the page to load before starting animations
onload = () => {
  const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
  }, 1000);
};

// Function to check the answer for the surprise
function checkAnswer() {
  const answer = document.getElementById("answer").value.toLowerCase();
  if (answer === "honn") {
      window.location.href = "cake.html"; // Redirect to the next page
  } else {
      alert("Try again!");
  }
}
