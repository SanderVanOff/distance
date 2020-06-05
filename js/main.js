const menuBtn = document.querySelector(".m-menu"),
  menu = document.querySelector(".menu-sidebar");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const tabsItem = document.querySelectorAll(".tabs-item");

tabsItem.forEach(item => {
  console.log(item);
  item.addEventListener("click", () => {
    item.classList.toggle("visible");
  });
});
