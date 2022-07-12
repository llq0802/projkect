const qiuEl = document.querySelector(".qiu");
let x = 0;
const run = function () {
  x += 1;
  requestAnimationFrame(() => {
    if (x === 1000) x = 0;
    // qiuEl.style.left = x + 'px';
    qiuEl.style.transform = "translateX(" + x + "px)";
    run();
  });
};
run();

/**
 * 原生走马灯
 */

let canIndex = 0;
function moveTo(index) {
  document.querySelector(".caul").style.transition = "0.5s";
  document.querySelector(".caul").style.transform =
    "translateX(-" + index + "00%)";
  document.querySelector(".dian>span.active")?.classList.remove("active");
  document.querySelectorAll(".dian>span")[index]?.classList.add("active");
  canIndex = index;
}
document.querySelectorAll(".dian>span").forEach((item, index) => {
  item.onclick = function () {
    moveTo(index);
  };
});

function always() {
  setInterval(() => {
    if (canIndex === document.querySelectorAll(".dian>span").length - 1) {
      document.querySelector(".caul").style.transform = "translateX(100%)";
      document.querySelector(".caul").style.transition = "none";
      document.querySelector(".caul").clientHeight;
      moveTo(0);
    } else {
      moveTo(canIndex + 1);
    }
  }, 3000);
}

document.querySelector(".left").onclick = function () {
  console.log("left");
  if (canIndex === 0) {
    document.querySelector(".caul").style.transform =
      "translateX(-" + document.querySelectorAll(".dian>span").length + "00%)";
    document.querySelector(".caul").style.transition = "none";
    document.querySelector(".caul").clientHeight;
    moveTo(document.querySelectorAll(".dian>span").length - 1);
    return;
  }
  moveTo(canIndex - 1);
};
document.querySelector(".right").onclick = function () {
  console.log("right");
  if (canIndex === document.querySelectorAll(".dian>span").length - 1) {
    document.querySelector(".caul").style.transform = "translateX(100%)";
    document.querySelector(".caul").style.transition = "none";
    document.querySelector(".caul").clientHeight;
    moveTo(0);
    return;
  }
  moveTo(canIndex + 1);
};
always();

/**
 * 初始化
 */
function canulInitiate() {
  const cauls = document.querySelector(".caul");
  // console.dir(cauls.getBoundingClientRect());
  // console.log(document.importNode(document.querySelector('.caul').firstElementChild, true));
  // console.dir(cauls.lastElementChild.cloneNode(true));
  const firstEl = document.importNode(cauls.firstElementChild, true);
  const lastEl = cauls.lastElementChild.cloneNode(true);
  cauls.appendChild(firstEl);
  const newF = cauls.insertBefore(lastEl, cauls.firstElementChild);
  newF.style.cssText = "position: absolute;transform: translateX(-100%);";
}
canulInitiate();
