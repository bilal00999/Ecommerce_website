import { weblistDropdown } from "./weblistDropdown.js";
let chevrons = document.querySelectorAll(".chevron_up");
// call weblist dropdown
chevrons.forEach((chevron) => {
  chevron.addEventListener("click", (e) => {
    weblistDropdown(e, chevron);
  });
});

// new letter subscribe msg animation
document.addEventListener("DOMContentLoaded", () => {
  let s_n_form = document.querySelector(".s_n_form");

  if (s_n_form) {
    s_n_form.addEventListener("submit", (e) => {
      e.preventDefault();
      let s_n_div = document.createElement("div");
      s_n_div.setAttribute("class", "s_n_form_msg");

      let s_n_para = document.createElement("p");
      s_n_para.textContent = "Subscribe Successfully";
      s_n_div.appendChild(s_n_para);

      document.body.append(s_n_div);
      s_n_form.reset();
    });
  }
});
