let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    
    if(ul.className == "showData"){
        document.getElementById("bar").className= "fa-solid fa-xmark";
    }else{
        document.getElementById("bar").className= "fa-solid fa-bars";

    }
})


// navbar

let hindi = document.getElementById("hindi");
let english = document.getElementById("english");
let reviews = document.getElementById("reviews");
let contacts = document.getElementById("contacts");

hindi.addEventListener("click", ()=>{
    hindi.style.color="rgb(4, 219, 219)";
    reviews.style.color="white";
    
    contacts.style.color="white";


})

english.addEventListener("click", ()=>{
    english.style.color="rgb(4, 219, 219)";
    hindi.style.color="white";
    reviews.style.color="white";
    contacts.style.color="white";


})


reviews.addEventListener("click", ()=>{
    reviews.style.color="rgb(4, 219, 219)";
    english.style.color="white";
    hindi.style.color="white";
    contacts.style.color="white";
})





contacts.addEventListener("click", ()=>{
    contacts.style.color="rgb(4, 219, 219)";
    reviews.style.color="white";
    english.style.color="white";
    hindi.style.color="white";
})


// card js

let crd = document.querySelectorAll(".crd");
let itemPage = document.querySelector(".itemPage")
let container = document.querySelector(".container");
let itemImg = document.getElementById("itemImg");
let buyBtn = document.getElementById("buyBtn");

console.log(crd);


    crd.forEach(function(curValue){
         curValue.addEventListener("click", function(){
            itemPage.style.display="flex";
            container.style.display="none";

            let imgSrc = curValue.firstElementChild.src ;
            itemImg.src=imgSrc;
             
            let buyText =  document.querySelector(".buyText");
            buyBtn.addEventListener("click", function(){
                document.querySelector(".buyPage").style.display="block";
                buyText.innerHTML=`
                <h3>Enter Details :</h3>
                <input type="text" placeholder="Enter Your Name" id="name"> <br>
                <input type="text" placeholder="Enter Your Address" id="address"> <br>
                <input type="text" placeholder="Enter Your Mobile Number" id="num"> <br>
                <h3>Payment Option :</h3>
                <select>
                    <option value="Google-Pay">Google-Pay</option>
                    <option value="Phone-Pay">Phone-Pay</option>
                    <option value="Bharat-Pay">Bharat-Pay</option>
                    <option value="Cash-on-Delivery">Cash-on-Delivery</option>
    
                </select> <br>
                
    
                `
               let button =  document.createElement("button");
               button.innerText="Submit";
               buyText.appendChild(button);

               button.addEventListener("click", function(){
               let name = document.getElementById("name");

               if(name.value == "" && address.value == "" && num.value == ""){
                alert("Please Enter Detail")
               }else{
                alert("Your Response Recorded");
                document.querySelector(".buyPage").style.display="none";

               }
               })
                 
                let cross = document.querySelector(".cross");
                cross.addEventListener("click", function(){
                document.querySelector(".buyPage").style.display="none";

                }
                )
            })

             
         })

    })
 
 
    // connect

    function connect(){
        let names = document.getElementById("names");
        let num = document.getElementById("number");
        if(name.value == "" && num.value == ""){
            alert("Fill Details")
        }else{
            alert("Thanks For Connecting")
        }

    }
