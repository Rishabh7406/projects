console.log("calapp.js conneceted");

let display = document.getElementById("display");


function ClickHandler(id) 
{
  if(id=="backspace")
  {
    BackSpaceHandler();
  }
  else if(id=="C")
  {
    ClearScreen();
  }
  else if(id=="=")
  {
    ResultHandler();
  }
  else
  {
    AddCharacter(id);
  }
 
}

function ClearScreen() 
{
  display.innerHTML="";
}


function BackSpaceHandler() 
{
  let BeforeTxt=display.innerHTML;
  let AfterTxt = BeforeTxt.substr(0, (BeforeTxt.length) - 1);
  ClearScreen();
  display.innerHTML+=AfterTxt;
}

function ResultHandler() 
{
  console.log(`inside ResultHandler()`)
  let txt= display.innerHTML;
  txt = eval(txt);
  display.innerHTML = txt;

}

function AddCharacter(id) 
{
  display.innerHTML+=id;
}



