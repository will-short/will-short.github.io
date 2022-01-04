window.onload = () => {
  window.onhashchange = function () {
    const type = window.location.hash.slice(1);
    const links = document.querySelectorAll("a.nav");
    links.forEach((link) => link.classList.remove("active"));
    const active = document.getElementsByClassName(type)[0];
    active.classList.add("active");
  };
};
