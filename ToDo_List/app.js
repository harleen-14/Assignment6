window.onload = () => {
	const form1 = document.querySelector("#addForm");

	let items = document.getElementById("items");
	let submit = document.getElementById("submit");

	let editItem = null;

	form1.addEventListener("submit", addItem);
	items.addEventListener("click", removeItem);
};

function addItem(e) {
	e.preventDefault();

	if (submit.value != "Submit") {

		editItem.target.parentNode.childNodes[0].data
			= document.getElementById("item").value;

		submit.value = "Submit";
		document.getElementById("item").value = "";

		document.getElementById("lblsuccess").innerHTML
			= "Text edited successfully";

		document.getElementById("lblsuccess")
						.style.display = "block";

		setTimeout(function() {
			document.getElementById("lblsuccess")
							.style.display = "none";
		}, 3000);

		return false;
	}

	let newItem = document.getElementById("item").value;
	if (newItem.trim() == "" || newItem.trim() == null)
		return false;
	else
		document.getElementById("item").value = "";

	let li = document.createElement("li");
	li.className = "list";

	let deleteButton = document.createElement("button");

	deleteButton.className =
		" btn fas fa-1.5x fa-trash-alt  float-right m-2 delete";

	deleteButton.appendChild(document.createTextNode(""));

	let editButton = document.createElement("button");

	editButton.className =
			" btn fas fa-1.5x fa-edit float-right edit";

	editButton.appendChild(document.createTextNode(""));
    let upButton = document.createElement("button");
    upButton.className =
		" btn fas fa-2x fa-caret-up  float-right m-2 up";

	upButton.appendChild(document.createTextNode(""));
    let downButton = document.createElement("button");
    downButton.className =
		" btn fas fa-2x fa-caret-down  float-right m-1 down";

	downButton.appendChild(document.createTextNode(""));
	li.appendChild(document.createTextNode(newItem));
	li.appendChild(deleteButton);
	li.appendChild(editButton);
    li.appendChild(upButton);
    li.appendChild(downButton);

	items.appendChild(li);
}

function removeItem(e) {
	e.preventDefault();
	if (e.target.classList.contains("delete")) {
			let li = e.target.parentNode;
			items.removeChild(li);
			document.getElementById("lblsuccess").innerHTML
				= "Text deleted successfully";

			document.getElementById("lblsuccess")
						.style.display = "block";

			setTimeout(function() {
				document.getElementById("lblsuccess")
						.style.display = "none";
			}, 3000);
	}
	if (e.target.classList.contains("edit")) {
		document.getElementById("item").value =
			e.target.parentNode.childNodes[0].data;
		submit.value = "EDIT";
		editItem = e;
	}
}


function toggleButton(ref, btnID) {
	document.getElementById(btnID).disabled = false;
}
