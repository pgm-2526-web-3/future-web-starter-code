import '../styles/main.css';


// the button
const btn = document.getElementById("btn");

// the list
const list = document.getElementById("list");

// function to add new element
function addElement() {
    var count = 0;
    return function () {
        count += 1;

        // create a new list item and fill it with text
        const newElement = document.createElement("li");
        const elementContent = document.createTextNode("Item " + count);
        newElement.appendChild(elementContent);

        // add newElement to list
        list.appendChild(newElement);

        // add click event to the newElement
        newElement.addEventListener("click", function () {
            // remove this element
            this.remove();
        });
    };
}

// add click event to button
btn.addEventListener("click", addElement());