
export function addStudent() {
    let student = document.getElementById('name').innerHTML;
    let major = document.getElementById('major');
    let button = document.getElementById('add');
    
    button.onclick(
        document.createElement(
        <tr>
            <td id="newStudent"></td>
            <td id= "newMajor"></td>
    </tr>))


}

document.getElementById('add').addEventListener('click', ()=> {

})