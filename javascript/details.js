import { Ui } from "./ui.js";

export class Details {
  constructor(id) {
    this.ui = new Ui();
    document.querySelector(".btnClose").addEventListener("click", () => {
      document.querySelector(".details").classList.add("d-none");
      document.querySelector(".games").classList.remove("d-none");
    });
    this.getDetails(id);
  }

  async getDetails(id) {
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
          `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
          options
        )
      ).json();
      this.ui.displayDetails(response);
      loading.classList.add("d-none");
    } catch (error) {
      alert(error);
      loading.classList.add("d-none");
    }
  }
}
