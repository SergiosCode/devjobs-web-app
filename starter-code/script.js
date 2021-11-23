const url = "./data.json";
// window.onload(() => {});
const job = [];
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    return data;
  })
  .then((item) => {
    job.push(item);
  });

console.log(job);



// const jobsListings = fetch(url);
// jobsListings.then((response) => {
//   return console.log(response.json());
// });

const joblisting = (jobs) => {
  for (let i = 0; i < 9; i++) {
    document.querySelector(".grid-Page1").innerHTML += `
    <div class="grid-item">
    <div class="logoDiv">
    <img class="logo" src="./assets/logos/scoot.svg" />
    </div>
    <span class="timeJobType">5h ago ◽ Full Time</span>
    <span class="jobTitle">Senior Software Engineer</span>
    <span class="companyName">Scoot</span>
    <span class="jobLocation">United Kingdom</span>
    </div>`;
  }
};
joblisting();
