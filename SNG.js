let obj={
    0:"Snake",
    1:"Water",
    2:"Gun"
}
let rObj = {
    snake: 0,
    water: 1,
    gun: 2

}

let computer= Math.floor(Math.random()*3)
let compChoice= Object.keys(obj)
// console.log(compChoice)
while(1){
    let user= prompt("Enter your choice: ")
    let userChoice = Object.keys(rObj)
    alert("Computer chose: " + obj[computer]);
    
    if(userChoice.includes(user.toLowerCase())){
        let userIndex= rObj[user.toLowerCase()]
        if(userIndex===computer){
            alert("It's a Tie!")
        }
    else if((userIndex===0 && computer===1) || (userIndex===1 && computer===2) || (userIndex===2 && computer===0)){
        alert("You Win!")
    }
    else{
        alert("Computer Wins!")
    }
}
let play= prompt("Do you want to play Snake, Water, Gun game? (yes/no)")
if(play.toLowerCase()!=="yes"){
    break;
}
}
