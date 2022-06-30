console.log("Welcome to notes app. This is app.js");
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) 
{
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  console.log(notesObj);
  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text"> ${element.text}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

// Function to delete a note
function deleteNote(index) {
//   console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/// console.log('app.js file connected');
// shownotes();

// // script for Add Note button and text area


// let addBtn=document.getElementById('addBtn');
// addBtn.addEventListener('click',(e)=>{
// let addtitle=document.getElementById('input_title');
// let addtxt=document.getElementById('addTxt');
// title=localStorage.getItem("title");
// let notes=localStorage.getItem("notes");
// if (notes==null)
// {
//   titleobj=[];
// }
// else
// {
//   titleobj={
//     title:addtitle.value,
//     text:addtxt.value
//   }
// }

// notes.push(titleobj);
// localStorage.setItem("notes",JSON.stringify(notes));
// addtxt.value="";
// addtitle.value="";
// console.log(notes);
// shownotes()
// });

// // function to show note
// function shownotes() {
//   let notes=localStorage.getItem("notes");
//   if (notes==null)
// {
//   notesobj=[];
// }

//   else
// {
//     notesobj=JSON.parse(notes);
// }
// let html="";
// notesobj.forEach(function(element, index) {
//     html+=`
//     <div class="notecard card my-2 mx-2" style="width: 18rem;">
//         <div class="card-body">
//           <h5 class="card-title"> ${element.title} </h5>
//           <p class="card-text">${element.text}</p>
//           <buttton id="${index}" onclick="deletebtn(this.id)" class="btn btn-primary">DELETE</buttton>
//         </div>
//       </div>`;
// });
// let notesid=document.getElementById("notes");
// if (notesobj.length != 0) {
//   notesid.innerHTML=html;
  
// }
// else{
//   notesid.innerHTML=`Nothing to show! Use "Add a Note" section above to add notes. `
// }
// }//shownotes ends


// function deletebtn(index) {


//   let notes=localStorage.getItem('notes');
//    if (notes==null) {
//      notesobj=[];
//    }
//    else{
//      notesobj= JSON.parse(notes);
//    }
//    notesobj.splice(index,1);
//    localStorage.setItem("notes",JSON.stringify(notesobj));
//    shownotes();
// }



// let search=document.getElementById('searchTxt');
// search.addEventListener("input",()=>{

//   let inputVal=search.value.toLowerCase();

//   let noteCards=document.getElementsByClassName("notecard");  
// Array.from(noteCards).forEach((element)=>{
//   let cardtxt=element.getElementsByTagName('p')[0].innerText;
//   if (cardtxt.includes(inputVal)) {
//     element.style.display="block";    
//   }
//   else{
//     element.style.display="none";
//   }

// })
// });