const navToggle = document.querySelector(".nav-mobile-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", navLinks.classList.contains("open"));
  });
}

const starFields = document.querySelectorAll(".hero-stars");
starFields.forEach((field) => {
  if (field.dataset.ready) return;
  field.dataset.ready = "true";
  for (let i = 0; i < 90; i += 1) {
    const star = document.createElement("span");
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty("--duration", `${1.5 + Math.random() * 3.5}s`);
    star.style.opacity = `${0.2 + Math.random() * 0.6}`;
    field.appendChild(star);
  }
});

const backToTop = document.querySelector(".back-to-top");
if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 500);
  });
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => button.closest(".faq-item").classList.toggle("open"));
});

const energyInput = document.querySelector("#energy-input");
const energyOutput = document.querySelector("#energy-output");
if (energyInput && energyOutput) {
  const updateEnergy = () => {
    const grams = Number(energyInput.value || 0);
    const joules = grams * 0.001 * 299792458 ** 2;
    const tnt = joules / 4.184e9;
    energyOutput.textContent = `${grams.toLocaleString()} g -> ${joules.toExponential(3)} J, roughly ${tnt.toLocaleString(undefined, { maximumFractionDigits: 1 })} tons of TNT`;
  };
  energyInput.addEventListener("input", updateEnergy);
  updateEnergy();
}

const rockyInput = document.querySelector("#rocky-input");
const rockyOutput = document.querySelector("#rocky-output");
if (rockyInput && rockyOutput) {
  const map = ["chime", "clack", "tone", "tick", "hum", "plink", "chirp"];
  const updateRocky = () => {
    const text = rockyInput.value.trim() || "Hello human";
    rockyOutput.textContent = text
      .toLowerCase()
      .split("")
      .filter((char) => /[a-z0-9 ]/.test(char))
      .map((char) => (char === " " ? " / " : map[char.charCodeAt(0) % map.length]))
      .join(" ");
  };
  rockyInput.addEventListener("input", updateRocky);
  updateRocky();
}

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll("[data-era]").forEach((event) => {
      event.hidden = filter !== "all" && event.dataset.era !== filter;
    });
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});
