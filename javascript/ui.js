export class Ui {
  displayDataGame(data) {
    let gameBox = "";
    for (let i = 0; i < data.length; i++) {
      gameBox += `

       

    <div class="col-sm-6 col-md-4 ">

              <div data-id=${data[i].id} class="card text-white h-100">
                <div class="rounded-2 p-3">
                  <img
                  src="${data[i].thumbnail}"
                  class="card-img-top grayscale  "
                  alt="${data[i].title}"
                />
                </div>
                <div class="card-body">
                  <div
                    class="title d-flex justify-content-between align-items-center mb-2"
                  >
                    <h3 class="name">${data[i].title}</h3>
                    <span class="salary rounded-1 grayscale">Free</span>
                  </div>
                  <p class="text-center text-white-50 description">
                    ${data[i].short_description}
                  </p>
                </div>
                <div
                  class="card-footer d-flex justify-content-between align-items-center"
                >
                  <span class="category text-uppercase footer-bg rounded-1"
                    >${data[i].genre}</span
                  >
                  <span class="platform footer-bg rounded-1">${data[i].platform}</span>
                </div>
              </div>

          </div>



            `;
    }
    document.getElementById("gameData").innerHTML = gameBox;
  }

  displayDetails(data) {
    let detailsBox = `


         <div class="col-md-4">
            <img src="${data.thumbnail}" alt="${data.title}" class="w-100">
          </div>
          <div class="col-md-8 text-white">
            <h3 class="title"><span>Title:</span> ${data.title}</h3>
            <p class="category"><span>Category:</span> <span class="data rounded-2">${data.genre}</span></p>
            <p class="category"><span>Platform:</span> <span class="data rounded-2">${data.platform}</span></p>
            <p class="category"><span>Status:</span> <span class="data rounded-2">${data.status}</span></p>
            <p class="description">${data.description}</p>
            <a href="${data.freetogame_profile_url}" target="_blank" class="btn btn-outline-warning text-decoration-none">Show Game</a>
          </div>


        `;

    document.getElementById("gameDetails").innerHTML = detailsBox;
  }
}
