function addItem() {
    var newItemInput = document.getElementById("newItem");
    var newItemValue = newItemInput.value.trim();

    if (newItemValue !== "") {
        // Check if the item is already in the list
        var list = document.getElementById("list");
        var listItems = list.getElementsByTagName("li");
        var isDuplicate = false;

        for (var i = 0; i < listItems.length; i++) {
            if (listItems[i].textContent === newItemValue) {
                isDuplicate = true;
                break;
            }
        }

        // Add the item only if it's not in the list
        if (!isDuplicate) {
            var newItemList = document.createElement("li");
            newItemList.textContent = newItemValue;
            list.appendChild(newItemList);

            // Clear the input field
            newItemInput.value = "";
        } else {
            alert("This item is already in the list.");
        }
    }
}