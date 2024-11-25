import { API } from "./api.js";
import { UI } from "./ui.js";

const api = new API();
const ui = new UI();
document.addEventListener("DOMContentLoaded", () => {
  ui.renderLoader();
  api
    .getPopular()
    .then((data) => ui.renderCards(data))
    .catch((error) => {
      console.error(error);
      alert("Error rendering cards");
    });
});

ui.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = event.target[0].value;
  if (query.trim() === "") return alert("Please make a valid search!");
  ui.renderLoader();
  ui.updateTitle("results for " + query);
  api
    .searchMusic(query)
    .then((data) => ui.renderCards(data))
    .catch((error) => {
      console.error(error);
      alert("Error rendering cards");
    });
});

ui.list.addEventListener("click", (event) => {
  if (event.target.className === "play") {
    const card = event.target.closest(".card");
    const data = card.dataset;
    ui.renderPlayer(data);
  }
});
