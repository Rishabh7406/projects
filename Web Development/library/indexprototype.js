console.log("indexprototype.js connected");

//constructor
function Book(name,author,type) {
  this.name=name;
  this.author=author;
  this.type=type;
}

// Display constructor
function Display() {
  
}

Display.prototype.add=function(book) {
  console.log("adding to UI");
    let row=`<tr>
            <td>${book.name}</td>
            <td>${book.author}<td>
            <td>${book.type}</td>
    </tr>`;
    let tablebody=document.getElementById('tableBody');
    tablebody.innerHTML+=row;
}




Display.prototype.clear=function(){
  let libraryForm=document.getElementById('libraryForm');
  libraryForm.reset();
}

// Add submit event listener to libraryForm
let libraryForm=document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("form subitted")
let name=document.getElementById('bookName').value;
let author=document.getElementById('author').value;
let type;
let fiction=document.getElementById('fiction');
let programming=document.getElementById('programming');
let cooking=document.getElementById('cooking');

if (fiction.checked) {
  type=fiction.value;
}
else if (cooking.checked) {
  type=cooking.value;
}
else if (programming.checked) {
  type=programming.value;
}

let book = new Book(name,author,type);
console.log(book)
let display = new Display();
display.add(book);
        display.clear();
e.preventDefault();
}