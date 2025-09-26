// Dark mode toggle
const toggleDark = document.getElementById("toggleDark");
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleDark.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
});

// Typing effect in banner
const text = "Welcome to Our Company";
let index = 0;
function typingEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typingEffect, 100);
  }
}
typingEffect();

// Welcome message with animation
function setWelcomeMessage() {
  const name = document.getElementById("nameInput").value.trim();
  const message = name ? `Hi, ${name}! Welcome 👋` : "Hi, Guest!";
  const welcomeEl = document.getElementById("welcomeMessage");

  welcomeEl.style.opacity = 0;
  setTimeout(() => {
    welcomeEl.innerText = message;
    welcomeEl.style.opacity = 1;
  }, 300);
}

// Form validation & output
// Form like Google Form
document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked')?.value;

  if (!name || !email || !message || !gender) {
    alert("⚠️ Please fill all fields before submitting.");
    return;
  }

  // tampilkan hasil input
  const resultBox = document.getElementById("formResult");
  resultBox.style.display = "block";
  resultBox.innerHTML = `
    <h3>Form Submission Result</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  // reset form
  document.getElementById("messageForm").reset();
});


// Animated counters
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

// Back to top button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
