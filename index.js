let slide = document.querySelectorAll(".patientCard");
let card = document.querySelectorAll(".card");
let closeBtn = document.getElementById("close");
let connectBtn = document.getElementById("connectBtn")

let count = 0;

slide.forEach(function(slides, index){
    slides.style.left=`${index * 100}%`
})

function myFun(){
    slide.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count * 99}%)`
    })
}

setInterval(function(){
    count++;
    if(count == slide.length){
        count=0;
    }
    myFun();
}, 2000)


card.forEach(function(cards){
    cards.addEventListener("click", function(){
        console.log(cards.firstElementChild.src);
        document.querySelector(".content").style.display="block"
       document.querySelector(".contentDetail").innerHTML=`
        <img src=${cards.firstElementChild.src}>
        <div>
            <h1>DR Aparna Tripathi </h1>
            <p>MBBS graduate from AIIMS Delhi!.5 years of experience.</p>
        </div>
        
        <div>
            <h1> DR Priya Aggrawal </h1>
            <p>MBBS graduate from AIIMS Bhubaneswar!. 6 years of exprience.</p>
        </div>
        <div>
            <h1>DR Saurabh Aggrawal </h1>
            <p>MBBS graduate from AIIMS Gorakhpur.10 year experience as Orthopaedic surgeon fron APOLLO ,Chennai. GOLD MEDALLIST for his contribution in different medical fields.</p>
        </div>

        `
        closeBtn.addEventListener("click", function(){
            document.querySelector(".content").style.display="none"

        })
    })
})

connectBtn.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value ==  ""){
        alert("Please Enter Detail")
    }else{
        alert("You Logged In")
        email.value="";
        pass.value="";

    }

})