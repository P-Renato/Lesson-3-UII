
function CreateListItems(list, value){
    const li = document.createElement("li");        // This is to create the <li>
        const span = document.createElement("span");        // This is to create the content that goes inside the <li>
        const deleteButton = document.createElement("button"); 


        span.innerText = value;           // Now we are getting the value given by the user,  
        deleteButton.innerText = "Remove";

   
        
        // deleteButton.addEventListener("click", handleClick)
  
        li.append(span)
        li.append(deleteButton)
        
        // li.style = "color: red"
        // li.style = "width: 80vw; display: flex; justify-content: space-between; border: 1px solid black"

        list.append(li)                 //  to put it inside <li>

        
}





function setup(){
    const input = document.querySelector(".user-input");
    const addButton = document.querySelector(".add");
    const list = document.querySelector("ul");
    // const msg = document.querySelector(".message");
    const msg = document.createElement("div");      // Here we are creating a variable 'div' 
     // document.querySelector("body").append(msg)  the same as below, but longer and without 'return'
     document.body.append(msg)
    // console.log(input)
    // console.dir(input)

    addButton.addEventListener("click", ()=>{   
        const value = input.value;          // creating a variable to contain the users input
        if(!value){                         // this a conditional to ask the user for an input            
            return msg.innerText= "Please enter a valid input"     // Now this variable has a text
        }

        msg.innerText= "";
        CreateListItems(list, value);
        input.value = "";              // This is to make the input empty after the user has given its input
    });



        const handleClick = (e)=> {      // 'e' represents the event that happens within the function
            console.dir(e.target)
            if(e.target.tagName === "BUTTON"){
                 // deleteButton.parentElement.remove()
                console.log("I'm clicking the button")
                e.target.parentElement.remove() // This is the most accurate way to target an element, instead of the one above           
            }
            if(e.target.tagName === "LI"){
                e.target.style.color = "red";
                console.log("I'm clicking the li")
            }
            if(e.target.tagName === "SPAN") {
                console.log("I'm clicking the span")
            }
           
        };

        // console.dir(input);
        // console.log(value);
        list.addEventListener("click", handleClick);
}

setup()