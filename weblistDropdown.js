// weblist navbar drop down
export function weblistDropdown(e, chevron) {
  e.preventDefault();
  let parent = chevron.closest(".w_l_category");
  let list = parent.querySelector(".w_l_common_list");

  if (list.style.display != "none") {
    list.style.display = "none";
    chevron.classList.add("chevron_down");
  } else if (list.style.display == "none") {
    list.style.display = "block";
    chevron.classList.remove("chevron_down");
  }
}
