let idCounter =1;
function * idGenerator() {
    while(true) {
        yield idCounter++
    }
}

function createStudent() {
    let studentName = document.getElementById('name').value;
    let studentMajor = document.getElementById('major').value;

    if (studentName && studentMajor) {
        let row = document.createElement('tr');
        let studentIdCell = document.createElement('td');
        let studentNameCell = document.createElement('td');
        let studentMajorCell = document.createElement('td');

        row.appendChild(studentIdCell);
        row.appendChild(studentNameCell);
        row.appendChild(studentMajorCell);

        document.getElementById('students').appendChild(row);

        studentIdCell.innerText = idGenerator().next().value;
        studentNameCell.innerText = studentName;
        studentMajorCell.innerText = studentMajor;

        document.getElementById('name').value = '';
        document.getElementById('major').value = '';
    }

}

document.getElementById('add').addEventListener('click', createStudent);