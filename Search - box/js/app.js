const search = () => {
  const searchBox = document.querySelector("input").value.toUpperCase();
  const li = document.querySelectorAll(".list");
  const title = document.getElementsByTagName("h2");

  for (let i = 0; i < title.length; i++) {
    let match = li[i].getElementsByTagName("h2")[0];
    if (match) {
      let textValue = match.textContent || match.innerHTML;
      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
};
