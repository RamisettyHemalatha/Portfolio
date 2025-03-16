const header = document.getElementById("header");
let bounds;
let margin = 0.2 * window.innerHeight;
margin -= header.offsetHeight;
margin /= 2;
if (!header.classList.contains("lg:h-1/2") && window.innerWidth >= 976) {
  header.style.marginTop = `${margin}px`;
}
bounds = header.getBoundingClientRect().top;

document.addEventListener("scroll", () => {
  if (window.scrollY > bounds) {
    header.classList.remove("lg:pb-0");
    header.classList.add("py-8");
    header.classList.remove("lg:bg-transparent");
    header.classList.remove("lg:border-b-0");
  } else {
    header.classList.remove("py-8");
    header.classList.add("lg:pb-0");
    header.classList.add("lg:bg-transparent");
    header.classList.add("lg:border-b-0");
  }
});
