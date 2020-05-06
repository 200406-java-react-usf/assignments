let idCounter =1;
function * idGenerator() {
    while(true) {
        yield idCounter++
    }
}

function addItem() {
    let itemName = document.getElementById('New Item').value;

    if (itemName) {
        let row = document.createElement('tr');
        let itemIdCell = document.createElement('td');
        let itemNameCell = document.createElement('td');

        row.appendChild(itemIdCell);
        row.appendChild(itemNameCell);

        document.getElementById('students').appendChild(row);

        itemIdCell.innerText = idGenerator().next().value;
        itemNameCell.innerText = itemName;

        document.getElementById('name').value = '';
        document.getElementById('major').value = '';
    }

}

document.getElementById('add').addEventListener('click', createStudent);