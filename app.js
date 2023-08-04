import { Invoice } from "./group/Invoice.js";
import { Payment } from "./group/Payment.js";
import { ListTemplate } from "./group/ListTemplate.js";
const form = document.querySelector(".new-item-form");

const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");

const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let values;
  values = [tofrom.value, details.value, amount.valueAsNumber];
  let doc;
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  list.render(doc, type.value, "end");
});

let icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    icon.src = "imeges/sun.png";
  } else {
    icon.src = "imeges/moon.png";
  }
};
