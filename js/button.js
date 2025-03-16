const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("menuOpen");
});

const btn2 = document.getElementById("view-button");
const nav2 = document.getElementById("work");
const nav3 = document.getElementById("work2");
const text = document.getElementById("view-more");
const text2 = document.getElementById("view-less");
const btn2div = document.getElementById("btn-div");
const recentlyAdded = document.getElementById("recentlyAdded");
const allProjects = document.getElementById("allProjects");
const filterMenu = document.getElementById("filterMenu");
const filterButton = document.getElementById("filterButton");
const filter = document.getElementById("filter");
const projectGrid = document.getElementById("grid");
const recentlyAddedProjects = document.getElementById("recentlyAddedProjects");

const filterJavascript = document.getElementById("filterJavascript");
const filterPython = document.getElementById("filterPython");
const filterSolidity = document.getElementById("filterSoldity");
const filterNextjs = document.getElementById("filterNextjs");
const filterHardat = document.getElementById("filterHardhat");
const filterReact = document.getElementById("filterReact");

const javascriptContent = document.getElementsByClassName("javascript");
const pythonContent = document.getElementsByClassName("python");
const solidityContent = document.getElementsByClassName("solidity");
const nextjsContent = document.getElementsByClassName("nextjs");
const hardhatContent = document.getElementsByClassName("hardhat");
const reactContent = document.getElementsByClassName("react");
const projects = document.getElementsByClassName("project");
const filterIcons = document.getElementsByClassName("filterIcon");

btn2.addEventListener("click", () => {
  recentlyAddedProjects.classList.toggle("lg:grid");
  projectGrid.classList.toggle("lg:grid");
  projectGrid.classList.toggle("lg:hidden");
  recentlyAdded.classList.toggle("hidden");
  recentlyAdded.classList.toggle("flex");
  allProjects.classList.toggle("flex");
  allProjects.classList.toggle("hidden");
  filter.classList.toggle("hidden");
  for (let i = 0; i < filterIcons.length; i++) {
    if (filterIcons[i].classList.contains("bg-white")) {
      filterIcons[i].classList.remove("bg-white");
    }
  }
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].classList.contains("hidden")) {
      projects[i].classList.remove("hidden");
    }
  }
  if (filterMenu.classList.contains("flex")) {
    filterMenu.classList.toggle("hidden");
    filterMenu.classList.toggle("flex");
    filterButton.classList.toggle("rounded-lg");
    filterButton.classList.toggle("rounded-t-lg");
    filterMenu.classList.toggle("rounded-lg");
    filterMenu.classList.toggle("rounded-b-lg");
  }
});
filterButton.addEventListener("click", () => {
  filterMenu.classList.toggle("hidden");
  filterMenu.classList.toggle("flex");
  filterButton.classList.toggle("rounded-lg");
  filterButton.classList.toggle("rounded-t-lg");
  filterMenu.classList.toggle("rounded-lg");
  filterMenu.classList.toggle("rounded-b-lg");
});
const removeButton = () => {
  btn2div.classList.remove("view-end");
};

const addDelay = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (i > 2) {
      if (i % 3 === 1) {
        array[i].classList.toggle("delay-150");
      } else if (i % 3 === 2) {
        array[i].classList.toggle("delay-300");
      }
    }
  }
};

const clearDelay = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].classList.contains("delay-150")) {
      array[i].classList.remove("delay-150");
    } else if (array[i].classList.contains("delay-300")) {
      array[i].classList.remove("delay-300");
    }
  }
};

const removeAnimation = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i].classList.add("hidden");
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i].classList.contains("project-start")) {
      array[i].classList.remove("project-start");
    }
    if (array[i].classList.contains("project-end")) {
      array[i].classList.remove("project-end");
    }
  }
};

const restartItems = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (!array[i].classList.contains("project-start")) {
      console.log("Doesnt containt!");
      array[i].classList.add("project-start");
    }
    if (array[i].classList.contains("project-end")) {
      array[i].classList.remove("project-end");
    }
    console.log(`${array[i].id} has ${array[i].classList}`);
  }
};

const addAnimation = (array) => {
  let itemCounter = 0;
  const animation = () => {
    for (let i = 0; i < array.length; i++) {
      array[i].classList.remove("hidden");
      if (itemCounter < 3) {
        array[i].classList.add("project-start");
        setTimeout(() => {
          array[i].classList.add("project-end");
        }, 1000);
        itemCounter++;
      } else {
        array[i].classList.add("project-start");
      }
    }
    btn2div.classList.add("view-end");
  };
  setTimeout(animation, 50);
};

filterJavascript.addEventListener("click", () => {
  let a = false; 
  console.log("getting javascript projects");
  for (let i = 0; i < filterIcons.length; i++) {
    if (
      filterIcons[i].classList.contains("bg-white") &&
      !filterIcons[i].classList.contains("javascript")
    ) {
      filterIcons[i].classList.remove("bg-white");
      a = true;
      console.log("a is true");
      for (let c = 0; c < projects.length; c++) {
        if (!projects[c].classList.contains("hidden")) {
          projects[c].classList.add("hidden");
        }
      }
      for (let c = 0; c < projects.length; c++) {
        if (projects[c].classList.contains("javascript")) {
          projects[c].classList.remove("hidden");
        }
      }
      for (let d = 0; d < filterIcons.length; d++) {
        if (filterIcons[d].classList.contains("javascript")) {
          filterIcons[d].classList.add("bg-white");
        }
      }
    }
  }
  if (a == false) {
    console.log("a is false");
    for (let i = 0; i < filterIcons.length; i++) {
      if (filterIcons[i].classList.contains("javascript")) {
        console.log("found the button");
        if (filterIcons[i].classList.contains("bg-white")) {
          console.log("Button was on");
          filterIcons[i].classList.remove("bg-white");
          for (let c = 0; c < projects.length; c++) {
            if (!projects[c].classList.contains("hidden")) {
              projects[c].classList.add("hidden");
            }
          }
          setTimeout(() => {
            clearDelay(projects);
            restartItems(projects);
            addDelay(projects);
            for (let c = 0; c < projects.length; c++) {
              if (projects[c].classList.contains("hidden")) {
                projects[c].classList.remove("hidden");
              }
            }
          }, 20);
          return;
        } else {
          console.log("Button was off");
          filterIcons[i].classList.add("bg-white");
          for (let c = 0; c < projects.length; c++) {
            if (!projects[c].classList.contains("javascript")) {
              projects[c].classList.add("hidden");
            }
          }
        }
      }
    }
  }
  removeButton();
  clearDelay(projects);
  let newArray = [];
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].classList.contains("javascript")) {
      newArray.push(projects[i]);
    }
  }
  addDelay(newArray);
  removeAnimation(newArray);
  addAnimation(newArray);
});

filterPython.addEventListener("click", () => {
  let a = false; 
  console.log("getting python projects");
  for (let i = 0; i < filterIcons.length; i++) {
    if (
      filterIcons[i].classList.contains("bg-white") &&
      !filterIcons[i].classList.contains("python")
    ) {
      filterIcons[i].classList.remove("bg-white");
      a = true;
      console.log("a is true");
      for (let c = 0; c < projects.length; c++) {
        if (!projects[c].classList.contains("hidden")) {
          projects[c].classList.add("hidden");
        }
      }
      for (let c = 0; c < projects.length; c++) {
        if (projects[c].classList.contains("python")) {
          projects[c].classList.remove("hidden");
        }
      }
      for (let d = 0; d < filterIcons.length; d++) {
        if (filterIcons[d].classList.contains("python")) {
          filterIcons[d].classList.add("bg-white");
        }
      }
    }
  }
  if (a == false) {
    console.log("a is false");
    for (let i = 0; i < filterIcons.length; i++) {
      if (filterIcons[i].classList.contains("python")) {
        console.log("found the button");
        if (filterIcons[i].classList.contains("bg-white")) {
          console.log("Button was on");
          filterIcons[i].classList.remove("bg-white");
          for (let c = 0; c < projects.length; c++) {
            if (!projects[c].classList.contains("hidden")) {
              projects[c].classList.add("hidden");
            }
          }
          setTimeout(() => {
            clearDelay(projects);
            restartItems(projects);
            addDelay(projects);
            for (let c = 0; c < projects.length; c++) {
              if (projects[c].classList.contains("hidden")) {
                projects[c].classList.remove("hidden");
              }
            }
          }, 20);
          console.log("IT SHOULD STOP HERE!");
          return;
        } else {
          console.log("Button was off");
          filterIcons[i].classList.add("bg-white");
          for (let c = 0; c < projects.length; c++) {
            if (!projects[c].classList.contains("python")) {
              projects[c].classList.add("hidden");
            }
          }
        }
      }
    }
  }
  console.log("THIS SHOULDNT HAPPEN");
  removeButton();
  clearDelay(projects);
  let newArray = [];
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].classList.contains("python")) {
      newArray.push(projects[i]);
    }
  }
  addDelay(newArray);
  removeAnimation(newArray);
  addAnimation(newArray);
});

filterSolidity.addEventListener("click", () => {
  let a = false; // false - no other filter is on, true - other filter is on
  console.log("getting solidity projects");
  for (let i = 0; i < filterIcons.length; i++) {
    if (
      filterIcons[i].classList.contains("bg-white") &&
      !filterIcons[i].classList.contains("solidity")
    ) {
      filterIcons[i].classList.remove("bg-white");
      a = true;
      console.log("a is true");
      for (let c = 0; c < projects.length; c++) {
        if (!projects[c].classList.contains("hidden")) {
          projects[c].classList.add("hidden");
        }
      }
      for (let c = 0; c < projects.length; c++) {
        if (projects[c].classList.contains("solidity")) {
          projects[c].classList.remove("hidden");
        }
      }
      for (let c = 0; c < filterIcons.length; c++) {
        if (filterIcons[i].classList.contains("solidity")) {
          filterIcons[i].classList.add("bg-white");
        }
      }
      for (let d = 0; d < filterIcons.length; d++) {
        if (filterIcons[d].classList.contains("solidity")) {
          filterIcons[d].classList.add("bg-white");
        }
      }
    }
  }
  if (a == false) {
    console.log("a is false");
    for (let i = 0; i < filterIcons.length; i++) {
      if (filterIcons[i].classList.contains("solidity")) {
        console.log("found the button");
        if (filterIcons[i].classList.contains("bg-white")) {
          console.log("Button was on");
          filterIcons[i].classList.remove("bg-white");
          for (let c = 0; c < projects.length; c++) {
            if (!projects[c].classList.contains("hidden")) {
              projects[c].classList.add("hidden");
            }
          }
          setTimeout(() => {
            clearDelay(projects);
            restartItems(projects);
            addDelay(projects);
            for (let c = 0; c < projects.length; c++) {
              if (projects[c].classList.contains("hidden")) {
                projects[c].classList.remove("hidden");
              }
            }
          }, 20);
          return;
        } else {
          console.log("Button was off");
          filterIcons[i].classList.add("bg-white");
          for (let c = 0; c < projects.length; c++) {
            if (!projects[c].classList.contains("solidity")) {
              projects[c].classList.add("hidden");
            }
          }
        }
      }
    }
  }
  removeButton();
  clearDelay(projects);
  let newArray = [];
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].classList.contains("solidity")) {
      newArray.push(projects[i]);
    }
  }
  addDelay(newArray);
  removeAnimation(newArray);
  addAnimation(newArray);
});

filterNextjs.addEventListener("click", () => {
  let a = false; // false - no other filter is on, true - other filter is on
  console.log("getting nextjs projects");
  for (let i = 0; i < filterIcons.length; i++) {
    if (
      filterIcons[i].classList.contains("bg-white") &&
      !filterIcons[i].classList.contains("nextjs")
    ) {
      filterIcons[i].classList.remove("bg-white");
      a = true;
      console.log("a is true");
      for (let c = 0; c < projects.length; c++) {
        if (!projects[c].classList.contains("hidden")) {
          projects[c].classList.add("hidden");
        }
      }
      for (let c = 0; c < projects.length; c++) {
        if (projects[c].classList.contains("nextjs")) {
          projects[c].classList.remove("hidden");
        }
      }
      for (let c = 0; c < filterIcons.length; c++) {
        if (filterIcons[i].classList.contains("nextjs")) {
          filterIcons[i].classList.add("bg-white");
        }
      }
      for (let d = 0; d < filterIcons.length; d++) {
        if (filterIcons[d].classList.contains("nextjs")) {
          filterIcons[d].classList.add("bg-white");
        }
      }
    }
  }
  if (a == false) {
    console.log("a is false");
    for (let i = 0; i < filterIcons.length; i++) {
      if (filterIcons[i].classList.contains("nextjs")) {
        console.log("found the button");
        if (filterIcons[i].classList.contains("bg-white")) {
          console.log("Button was on");
          filterIcons[i].classList.remove("bg-white");
          for (let c = 0; c < projects.length; c++) {
            if (!projects[c].classList.contains("hidden")) {
              projects[c].classList.add("hidden");
            }
          }
          setTimeout(() => {
            clearDelay(projects);
            restartItems(projects);
            addDelay(projects);
            for (let c = 0; c < projects.length; c++) {
              if (projects[c].classList.contains("hidden")) {
                projects[c].classList.remove("hidden");
              }
            }
          }, 20);
          return;
        } else {
          console.log("Button was off");
          filterIcons[i].classList.add("bg-white");
          for (let c = 0; c < projects.length; c++) {
            if (!projects[c].classList.contains("nextjs")) {
              projects[c].classList.add("hidden");
            }
          }
        }
      }
    }
  }
  removeButton();
  clearDelay(projects);
  let newArray = [];
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].classList.contains("nextjs")) {
      newArray.push(projects[i]);
    }
  }
  addDelay(newArray);
  removeAnimation(newArray);
  addAnimation(newArray);
});

filterHardat.addEventListener("click", () => {
  let a = false; // false - no other filter is on, true - other filter is on
  console.log("getting hardhat projects");
  for (let i = 0; i < filterIcons.length; i++) {
    if (
      filterIcons[i].classList.contains("bg-white") &&
      !filterIcons[i].classList.contains("hardhat")
    ) {
      filterIcons[i].classList.remove("bg-white");
      a = true;
      console.log("a is true");
      for (let c = 0; c < projects.length; c++) {
        if (!projects[c].classList.contains("hidden")) {
          projects[c].classList.add("hidden");
        }
      }
      for (let c = 0; c < projects.length; c++) {
        if (projects[c].classList.contains("hardhat")) {
          projects[c].classList.remove("hidden");
        }
      }
      for (let d = 0; d < filterIcons.length; d++) {
        if (filterIcons[d].classList.contains("hardhat")) {
          filterIcons[d].classList.add("bg-white");
        }
      }
    }
  }
  if (a == false) {
    console.log("a is false");
    for (let i = 0; i < filterIcons.length; i++) {
      if (filterIcons[i].classList.contains("hardhat")) {
        console.log("found the button");
        if (filterIcons[i].classList.contains("bg-white")) {
          console.log("Button was on");
          filterIcons[i].classList.remove("bg-white");
          for (let c = 0; c < projects.length; c++) {
            if (!projects[c].classList.contains("hidden")) {
              projects[c].classList.add("hidden");
            }
          }
          setTimeout(() => {
            clearDelay(projects);
            restartItems(projects);
            addDelay(projects);
            for (let c = 0; c < projects.length; c++) {
              if (projects[c].classList.contains("hidden")) {
                projects[c].classList.remove("hidden");
              }
            }
          }, 20);
          return;
        } else {
          console.log("Button was off");
          filterIcons[i].classList.add("bg-white");
          for (let c = 0; c < projects.length; c++) {
            if (!projects[c].classList.contains("hardhat")) {
              projects[c].classList.add("hidden");
            }
          }
        }
      }
    }
  }
  removeButton();
  clearDelay(projects);
  let newArray = [];
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].classList.contains("hardhat")) {
      newArray.push(projects[i]);
    }
  }
  addDelay(newArray);
  removeAnimation(newArray);
  addAnimation(newArray);
});

filterReact.addEventListener("click", () => {
  let a = false; // false - no other filter is on, true - other filter is on
  console.log("getting react projects");
  for (let i = 0; i < filterIcons.length; i++) {
    if (
      filterIcons[i].classList.contains("bg-white") &&
      !filterIcons[i].classList.contains("react")
    ) {
      filterIcons[i].classList.remove("bg-white");
      a = true;
      console.log("a is true");
      for (let c = 0; c < projects.length; c++) {
        if (!projects[c].classList.contains("hidden")) {
          projects[c].classList.add("hidden");
        }
      }
      for (let c = 0; c < projects.length; c++) {
        if (projects[c].classList.contains("react")) {
          projects[c].classList.remove("hidden");
        }
      }
      for (let d = 0; d < filterIcons.length; d++) {
        if (filterIcons[d].classList.contains("react")) {
          filterIcons[d].classList.add("bg-white");
        }
      }
    }
  }
  if (a == false) {
    console.log("a is false");
    for (let i = 0; i < filterIcons.length; i++) {
      if (filterIcons[i].classList.contains("react")) {
        console.log("found the button");
        if (filterIcons[i].classList.contains("bg-white")) {
          console.log("Button was on");
          filterIcons[i].classList.remove("bg-white");
          for (let c = 0; c < projects.length; c++) {
            if (!projects[c].classList.contains("hidden")) {
              projects[c].classList.add("hidden");
            }
          }
          setTimeout(() => {
            clearDelay(projects);
            restartItems(projects);
            addDelay(projects);
            for (let c = 0; c < projects.length; c++) {
              if (projects[c].classList.contains("hidden")) {
                projects[c].classList.remove("hidden");
              }
            }
          }, 20);
          return;
        } else {
          console.log("Button was off");
          filterIcons[i].classList.add("bg-white");
          for (let c = 0; c < projects.length; c++) {
            if (!projects[c].classList.contains("react")) {
              projects[c].classList.add("hidden");
            }
          }
        }
      }
    }
  }
  removeButton();
  clearDelay(projects);
  let newArray = [];
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].classList.contains("react")) {
      newArray.push(projects[i]);
    }
  }
  addDelay(newArray);
  removeAnimation(newArray);
  addAnimation(newArray);
});
