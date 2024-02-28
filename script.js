const items = document.querySelectorAll(".item");


function handleClick(event) {
  const paragraph = event.currentTarget.querySelector("p");
  const img = event.currentTarget.querySelectorAll("img");

  paragraph.classList.toggle("notshown");
  img.forEach((item) => {
    item.classList.toggle("notactive");
  });
}

items.forEach((item) => {
  item.addEventListener("click", handleClick);
});


