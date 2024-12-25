import { Ui } from "./ui.js";
import { Details } from "./details.js";

export class Games {
  constructor() {
    this.getData("mmorpg");
    document.querySelectorAll(".menu a").forEach((link) => {
      link.addEventListener("click", (e) => {
        document.querySelector(".menu .active").classList.remove("active");
        e.target.classList.add("active");
        this.getData(e.target.dataset.category);
      });
    });
    this.ui = new Ui();
  }

  async getData(category) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a63d9dd397msh6b4c6e30f6237bap134225jsn364e1e63099e",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    try {
      let response = await (
        await fetch(
          `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
          options
        )
      ).json();
      this.ui.displayDataGame(response);
      this.getId();
      loading.classList.add("d-none");
    } catch (error) {
      alert(error);
      loading.classList.add("d-none");
    }
  }

  getId() {
    document.querySelectorAll(".card").forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.dataset.id;
        this.showDetails(id);
      });
    });
  }

  showDetails(id) {
    new Details(id);
    document.querySelector(".details").classList.remove("d-none");
    document.querySelector(".games").classList.add("d-none");
  }
}
