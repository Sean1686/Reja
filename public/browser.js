console.log("Frontend JS is working");

function itemTemplate(item) {
  return `<li class="list-group-item list-group-item-info flex items-center justify-between">
    <span class="item-text">${item.reja}</span>
    <div>
      <button class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
      <button class="delete-me btn btn-danger btn-sm">Delete</button>
    </div>
  </li>`;
}

let createInput = document.getElementById("create-input");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios.post("/create-item", { reja: createInput.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));

      createInput.value = "";
      createInput.focus();
    })
    .catch(() => {
      console.log("Please, try again!");
    });
});