const galleri_box_tema2 = document.querySelector(".galleri_box.tema_2");
const galleri_box_tema3 = document.querySelector(".galleri_box.tema_3");
const galleri_box_tema4 = document.querySelector(".galleri_box.tema_4");
const galleri_box_tema5 = document.querySelector(".galleri_box.tema_5");
const popup_close = document.querySelector(".popup_close");

window.addEventListener("load", sidenvises);

function sidenvises() {
  galleri_box_tema2.addEventListener("mousedown", reveal_popup);
  galleri_box_tema3.addEventListener("mousedown", reveal_popup);
  galleri_box_tema4.addEventListener("mousedown", reveal_popup);
  galleri_box_tema5.addEventListener("mousedown", reveal_popup);
}

function reveal_popup() {
  console.log("popup revealed");
  this.lastElementChild.classList.add("popup_reveal");
  this.lastElementChild.firstElementChild.addEventListener("click", hide_popup);
  function hide_popup() {
    console.log("popup hidden");
    this.parentElement.classList.remove("popup_reveal");
    this.parentElement.classList.add("popup_hide");
    this.parentElement.addEventListener("animationend", reset_eventlistener);
    function reset_eventlistener() {
      this.classList.remove("popup_hide");
    }
  }
}
