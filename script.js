// Select elements
const domainBoxes = document.querySelectorAll(".domain-box");
const sections = document.querySelectorAll(".club-section");
const backBtns = document.querySelectorAll(".back-btn");
const domainSelection = document.getElementById("domain-selection");

// When a domain is clicked
domainBoxes.forEach(box => {
  box.addEventListener("click", () => {
    const target = document.getElementById(box.dataset.target);
    domainSelection.classList.add("hidden");
    target.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Back button
backBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    sections.forEach(sec => sec.classList.add("hidden"));
    domainSelection.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
