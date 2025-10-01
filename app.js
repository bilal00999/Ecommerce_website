import { weblistDropdown } from "./weblistDropdown.js";
// import { weblistproducts } from "./weblistproducts.json";
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

// document.addEventListener("DOMContentLoaded", () => {
let user_teamplate = document.querySelector("#user_template");
let container = document.querySelector(".w_l_items");

fetch("weblistproducts.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((user) => {
      const clone = user_teamplate.content.cloneNode(true);

      clone.querySelector(".w_l_i_l_img").src = user.src;
      clone.querySelector(".item_name").innerHTML = user.name;
      clone.querySelector(".item_price").innerHTML = user.price;
      clone.querySelector(".item_description").innerHTML = user.description;
      clone.querySelector(".item_orders").innerHTML = `${user.orders} orders`;

      container.appendChild(clone);
    });
  })
  .catch((error) => console.error("Error loading JSON:", error));
// });
