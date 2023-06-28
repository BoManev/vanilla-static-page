const toggleTheme = () => {
  const btns = document.querySelectorAll("#theme-toggle");

  const theme = localStorage.getItem("light-mode");

  theme === "true" && document.body.classList.add("light-mode");

  const handlers = () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("light-mode", true);
    } else {
      localStorage.setItem("light-mode", false);
      document.body.removeAttribute('class');
    }
  };

  btns.forEach((btn) => btn.addEventListener("click", handlers));
};

export default toggleTheme;
