"strict on";
const url = "./data.json";

// window.onload((e) => {});

fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));
