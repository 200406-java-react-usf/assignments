//Selecting/Targeting
document.getElementById('some-id'); //returns the first element with the provided ID
document.getElementsByClassName('some-class'); //returns an array of elements with the given class
document.querySelector('div.answers > label > input[name^="question-"]:checked'); //very powerful selector
/*
    CSS Selectors
        * { }               Universal
        p { }               Type/Tag
        .className { }      Class
        #idName { }         Id
        h1, a { }           Multi-selector
        h1, #idName { }     Multi-selector
        li > a { }          Child
        p a { }             Descendant
        h1 + p { }          Sibling/Adjacent
*/

//Manipulation
document.createElement('tr');
tr.prepend(); //adds a node as the first child of an element
tr.appendChild(document.createElement('td')); //appends node as the last child of an element

tr.setAttribute('id', 'tr-id'); //adds an attribute of the provided name (1st param) with the provided value (2nd param)
tr.removeAttrubute('id'); //removes the attribute from element