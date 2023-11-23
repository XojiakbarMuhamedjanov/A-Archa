const staffBycaseText = document.querySelectorAll(".staff__bycase_text");

staffBycaseText.forEach((el) => {
  el.addEventListener("click", () => {
    staffBycaseText.forEach((el) => {
      el.classList.remove("active");
    });
    el.classList.add("active");
  });
});
