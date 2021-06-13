const upIcon = document.querySelector(".up");
const stack = document.querySelector(".stack");
const stackContainer = document.querySelector(".stack-container");
const data = [
  { name: "pcloud", icon: "icons/stackIcons/pcloud.svg" },
  {
    name: "Polari",
    icon: "icons/stackIcons/polari.svg",
  },
  {
    name: "pomidor",
    icon: "icons/stackIcons/pomidor.svg",
  },
  {
    name: "popcorn time",
    icon: "icons/stackIcons/popcorntime.svg",
  },
  {
    name: "postman",
    icon: "icons/stackIcons/postman.svg",
  },
];

const renderStack = (name, icon, rota, trans) => {
  const stackElem = `
              <span>${name}</span>
              <img
                class="stack-icon"
                src=${icon}
                alt=""/>
    `;
  const stackBlock = document.createElement("div");
  stackBlock.classList.add(`stack-block`);
  stackBlock.innerHTML = stackElem;
  stackBlock.style.transform = `rotate(${rota}deg) translateY(-${trans}px)`;
  stackContainer.insertAdjacentElement("beforeend", stackBlock);
};
const clearElem = () => {
  stackContainer.innerHTML = "";
};

const stackIteration = () => {
  let rotaNum = 0;
  let transNum = 0;
  data.forEach((el) => {
    rotaNum = rotaNum + 2;
    transNum = transNum + 70;
    renderStack(el.name, el.icon, rotaNum, transNum);
  });
};

upIcon.addEventListener("click", () => {
  if (document.querySelector(".stack-block")) {
    clearElem();
  } else {
    stackIteration();
  }
});
