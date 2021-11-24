const url = "./data.json";
// window.onload(() => {});

const jobListings = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((job) => {
        document.querySelector(".grid-Page1").innerHTML += `
          <div class="grid-item">
          <div class="logoDiv" style="background-color: ${job.logoBackground}">
          <img class="logo" src=${job.logo} />
          </div>
          <span class="timeJobType">${job.postedAt} ◽ ${job.contract}</span>
          <span class="jobTitle">${job.position}</span>
          <span class="companyName">${job.company}</span>
          <span class="jobLocation">${job.location}</span>
          </div>`;
      });
    });
};
jobListings();

const loadMore = () => {
  document.querySelector(".grid-Page1").style.height = "100%";
  document.querySelector(".loadButton").style.opacity = 0;
  document.querySelector(".loadButton").style.cursor = "default";
};
