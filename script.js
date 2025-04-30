let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let msgContainer=document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");
let newGame= document.querySelector("#new-btn");
let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame =()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
 }

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText="O";
            turnO = false;
        }
        else {
            box.innerText="X";
            turnO=true;
                
}
box.disabled="true";
checkWinner();
    })
    
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=" ";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations Winner is ${winner}` ;
    msgContainer.classList.remove("hide");
    disableBoxes();

}
const checkWinner=()=>{
    for(let pattern of winPattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1!="",posVal2!="",posVal3!=""){
            if(posVal1==posVal2 && posVal2==posVal3){
                // console.log(`player ${posVal1} has WON 🥳`)
                showWinner(posVal1);
            }
        }

    }
        
}
reset.addEventListener("click",resetGame)
newGame.addEventListener("click",resetGame)
 