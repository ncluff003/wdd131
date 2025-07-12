const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", (event) => {
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = input.value;
    deleteButton.innerText = "❌";
    deleteButton.ariaLabel = `Remove ${li.textContent}`;
    deleteButton.addEventListener("click", (event) => {
      list.removeChild(li);
      input.focus();
    });
    li.append(deleteButton);
    list.append(li);
    input.value = "";
    return input.focus();
  }
});
