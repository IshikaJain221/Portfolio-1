/* REVEAL TEXT */
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.85) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* HORIZONTAL PROJECT SCROLL */
const wrapper = document.querySelector(".projects-wrapper");
const projects = document.querySelector(".projects");

let scrollX = 0;

wrapper.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollX += e.deltaY;
  scrollX = Math.max(0, Math.min(scrollX, projects.scrollWidth - window.innerWidth));
  projects.style.transform = `translateX(-${scrollX}px)`;
}, { passive: false });

/* CUSTOM CURSOR */
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("mouseenter", () => cursor.classList.add("link-hover"));
  link.addEventListener("mouseleave", () => cursor.classList.remove("link-hover"));
});
