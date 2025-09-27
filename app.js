let s_n_form = document.querySelector(".s_n_form");

// new letter subscribe msg animation
s_n_form.addEventListener("submit", (e) => {
  e.preventDefault();
  let s_n_div = document.createElement("div");
  s_n_div.setAttribute("class", "s_n_form_msg");

  let s_n_para = document.createElement("p");
  s_n_para.textContent = "Subscribe Sucessfully";
  s_n_div.appendChild(s_n_para);

  document.body.append(s_n_div);
  s_n_form.reset();
});
