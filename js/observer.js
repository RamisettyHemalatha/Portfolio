const resources = document.querySelectorAll(".resource");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((item) => {
      item.target.classList.toggle("end-resource", item.isIntersecting);
    });
  },
  {
    threshold: 0.3,
  }
);

resources.forEach((item) => {
  observer.observe(item);
});
