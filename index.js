window.onload = () => {
  window.onhashchange = function () {
    const type = window.location.hash.slice(1);
    const links = document.querySelectorAll("a.nav");
    links.forEach((link) => link.classList.remove("active"));
    const active = document.getElementsByClassName(type)[0];
    active.classList.add("active");
  };

  const lines = document.querySelectorAll(".line");
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.animation = `anim1 2s forwards ease-out`;
      } else {
        entry.target.style.animation = "none";
      }
    });
  });
  observer2 = new IntersectionObserver((entry) => {
    if (entry[0].intersectionRatio > 0) {
      entry[0].target.style.animation = `anim2 2s forwards linear`;
    } else {
      entry[0].target.style.animation = "none";
    }
  });
  observer3 = new IntersectionObserver((entry) => {
    if (entry[0].intersectionRatio > 0) {
      entry[0].target.style.animation = `anim3 2s forwards linear`;
      setTimeout(() => {
        const items = document.querySelectorAll(".item");
        items.forEach((item, i) => {
          setTimeout(() => {
            item.style.animation = `anim4 1s forwards linear`;
          }, 100 * i);
        });
      }, 2000);
    } else {
      entry[0].target.style.animation = "none";
    }
  });
  observer3.observe(right);
  observer2.observe(left);
  lines.forEach((line) => observer.observe(line));
};
