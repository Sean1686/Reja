
console.log("Frontend JS is working");

function itemTemplate(item) {
  return   `<li class="list-group-item d-flex align-items-center justify-content-between">
            <span class="item-text">${item.reja}</span>
            <div class="btn-group">
            <button
                data-id="${item._id}"
            class="edit-me btn btn-secondary btn-sm">Edit</button>
            <button
                data-id="${item._id}"
            class="delete-me btn btn-danger btn-sm">Delete</button>
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

document.addEventListener("click", function(e) {
  console.log(e);
  if(e.target.classList.contains("delete-me")) {
    if(confirm("Are you sure? you want to delete it!")) {
    axios.post("/delete-item", {id: e.target.getAttribute("data-id")})
    .then((response) => {
      console.log(response.data);
      e.target.parentElement.parentElement.remove();
    })
    .catch((err) => {
      console.log("Please, try again!");
    });
    }
  }
  
  if (e.target.classList.contains("edit-me")) {
  let userInput = prompt("Make changes",
   e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
  );
  if (userInput) {
    axios
      .post("/edit-item", {
        id: e.target.getAttribute("data-id"),
        new_input: userInput
      })
      .then((response) => {
        console.log(response)
        e.target.parentElement.parentElement.querySelector(
        ".item-text")
        .innerHTML = userInput;
      })
      .catch(() => {
        console.log("Please, try again!");
      });
  }
  }
});

document.getElementById("clean-all").addEventListener("click",
   function () {
   axios.post("/delete-all", {delete_all: true}).then((response) => {
    alert(response.data.state);
    document.location.reload();
   })
   .catch((err) => {
    console.log("Please, try again!")
   })
});