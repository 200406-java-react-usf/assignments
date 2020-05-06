//function for grabbing a student

function addNewIngredient() {
    console.log('I got clicked');

    // input fields
    let itemName = document.getElementById('new-item').value;


    //validate
    if(itemName){
        let item = document.createElement('li');

        document.getElementById('grocery-list-items').appendChild(item);

        item.innerText = itemName;

        document.getElementById('new-item').value = '';

    }
}
//event listener on button

document.getElementById('add-item').addEventListener('click', addNewIngredient);
document.getElementById('grocery-list-items').addEventListener('click', (e) => {
    li = e.target;
    if(li.tagName === 'LI'){
        document.getElementById('purchased-items').appendChild(li);
    }
    
})
document.getElementById('purchased-items').addEventListener('click', (e) => {
    li = e.target;
    if(li.tagName === 'LI'){
        document.getElementById('grocery-list-items').appendChild(li);
    }
})
