console.log("app.js connceted (my js code)")


// initializing key and source
let source='';
let key='c525c7d7a669406c9036d03796e41e1d';

// get ids 
let newsAccordion=document.getElementById("newsAccordion");

let xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=us&apiKey=c525c7d7a669406c9036d03796e41e1d`,true);
xhr.onload=function() 
  
  {
    if(this.status===200)
    {console.log("we are good")
    
   let restxt= JSON.parse(this.response);
   let counter=0;
   let newsAccordion=document.getElementById("newsAccordion");
for (let i in restxt.articles) 
{
  let title=restxt.articles[counter].title
  let description=restxt.articles[counter].description
  
  
  let url=restxt.articles[counter].url

  let news=`<div class="accordion-item"><!--3 -->

        <h2 class="accordion-header my-1" id="panelsStayOpen-headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne">
            ${title}
          </button>
        </h2>


        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne"><!-- 4-->

          <div class="accordion-body"><!-- 5-->
            ${description}
          </div><!--5 -->

        </div><!-- 4-->

      </div><!-- 3-->
`;
newsAccordion.innerHTML+=news;

  counter++;
}
   console.log(restxt.articles[0].title);
  }
  else{
    console.log("Some error occured")
    console.log(`${this.status}`)
  }
  
} 
xhr.send();
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(e){
e.preventDefault();
    let inputVal = search.value.toLowerCase();
    console.log('Input event fired!', inputVal);
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
  

