//Recently Added
const elements = document.querySelectorAll(".recentlyAdded");

if (elements) {
  setTimeout(() => {
    elements.forEach((item) => {
      item.classList.toggle("recentlyAdded-end");
    });
  }, 500);
}
const projectsForObserving = document.querySelectorAll(".project");

const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((item) => {
      if (!item.target.classList.contains("project-end")) {
        item.target.classList.toggle("project-end", item.isIntersecting);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

function addDelays() {
  for (let i = 0; i < projectsForObserving.length; i++) {
    if (projectsForObserving[i].classList.contains("delay-150")) {
      projectsForObserving[i].classList.remove("delay-150");
    }
    if (projectsForObserving[i].classList.contains("delay-300")) {
      projectsForObserving[i].classList.remove("delay-300");
    }
    if (i > 2) {
      if (i % 3 === 1) {
        projectsForObserving[i].classList.toggle("delay-150");
        console.log("ITEM IS FOURTH");
      } else if (i % 3 === 2) {
        console.log("ITEM IS FIFTH");
        projectsForObserving[i].classList.toggle("delay-300");
      }
    }
  }
}

if (projectsForObserving) {
  projectsForObserving.forEach((item) => projectObserver.observe(item));
}

const reset = document.getElementById("view-less");
const opened = document.getElementById("view-more");

reset.addEventListener("click", () => {
  projectsForObserving.forEach((item) => item.classList.remove("project-end"));
  elements.forEach((item) => item.classList.remove("recentlyAdded-end"));
  if (elements) {
    setTimeout(() => {
      elements.forEach((item) => {
        item.classList.toggle("recentlyAdded-end");
      });
    }, 500);
  }
});

const recentlyAddedTitle = document.getElementById("recentlyAdded");
const allProjectsTitle = document.getElementById("allProjects");

opened.addEventListener("click", () => {
  recentlyAddedTitle.classList.toggle("titleRecentlyAdded-end");
  addDelays();
});

const smprojects = document.querySelectorAll(".smproject");

const smprojectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((item) => {
      if (!item.target.classList.contains("end-resource")) {
        item.target.classList.toggle("end-resource", item.isIntersecting);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

smprojects.forEach((item) => {
  smprojectObserver.observe(item);
});
