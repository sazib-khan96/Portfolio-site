const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
  const question = item.querySelector(".faq-question");
  const icon = item.querySelector(".faq-icon");

  question.addEventListener("click", () => {

    // close others
    items.forEach(el => {
      if (el !== item) {
        el.classList.remove("active");
        el.querySelector(".faq-icon").textContent = "+";
      }
    });

    // toggle current
    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      icon.textContent = "−";
    } else {
      icon.textContent = "+";
    }
  });
});