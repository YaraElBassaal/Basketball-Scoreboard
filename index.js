let countGuest=0
let countHome=0
let scoreHome= document.getElementById("score-home")
let scoreGuest= document.getElementById("score-guest")



function addOneH(){
    countHome+=1
    scoreHome.textContent = countHome
    
}
function addTwoH(){
    countHome+=2
    scoreHome.textContent=countHome
}
function addThreeH(){
    countHome+=3
    scoreHome.textContent=countHome
}


function addOneG(){
    countGuest+=1
    scoreGuest.textContent=countGuest
}
function addTwoG(){
    countGuest+=2
    scoreGuest.textContent=countGuest
}
function addThreeG(){
    countGuest+=3
    scoreGuest.textContent=countGuest
}

function reset(){
    countGuest=0
    scoreGuest.textContent=0
    countHome=0
    scoreHome.textContent =0

}