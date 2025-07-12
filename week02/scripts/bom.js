const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const li = document.createElement("li");
const deleteButton = document.createElement("button");

li.textContent = input.value;
deleteButton.innerText = "❌";
deleteButton.ariaLabel = `Remove ${li.textContent}`;

list.append(li);
