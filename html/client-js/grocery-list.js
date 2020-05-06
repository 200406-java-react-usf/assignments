function addItem() {
    // Get input fields
    let item = document.getElementById('new-item').value;

    // Validate they actually put something there
    if (item) {

        // Create a new list item for the new element to be added to
        let listItem = document.createElement('li');
        listItem.innerText = item;

        // Add item to the list
        document.getElementById('grocery-list-items').appendChild(listItem);

        // Clear the input fields (for future values)
        document.getElementById('new-item').value = '';
    }
}

function moveToPurchased(e) {
    
    // Obtain the target of the click event from the event object
    let eventTarget = e.target;

    // Determine if the tag name of the event target is a list item
    if (eventTarget.tagName === 'LI') {

        // Append the eventTarget to the purchasedItems list
        document.getElementById('purchased-items').appendChild(eventTarget);
    }

}

function moveToGrocery(e) {
    
    // Obtain the target of the click event from the event object
    let eventTarget = e.target;

    // Determine if the tag name of the event target is a list item
    if (eventTarget.tagName === 'LI') {

        // Append the eventTarget to the grocery list
        document.getElementById('grocery-list-items').appendChild(eventTarget);
    }

}

document.getElementById('add-item').addEventListener('click', addItem);
document.getElementById('grocery-list-items').addEventListener('click', moveToPurchased);
document.getElementById('purchased-items').addEventListener('click', moveToGrocery);