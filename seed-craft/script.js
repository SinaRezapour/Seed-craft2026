const copyButtons = document.querySelectorAll(".copy-btn");

const copyMessage = document.querySelector(".copy-message");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const seed = button.dataset.seed;

    try {
      await navigator.clipboard.writeText(seed);
    } catch (error) {
      const textArea = document.createElement("textarea");

      textArea.value = seed;

      document.body.appendChild(textArea);

      textArea.select();

      document.execCommand("copy");

      textArea.remove();
    }

    copyMessage.classList.add("show");

    setTimeout(() => {
      copyMessage.classList.remove("show");
    }, 1800);
  });
});
