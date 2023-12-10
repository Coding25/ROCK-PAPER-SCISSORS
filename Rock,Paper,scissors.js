let userchoice = 0;
let compscore = 0;

const choice = document.querySelectorAll(".box");
const msg = document.querySelector(".msg");
let userpara=document.querySelector(".user");
let comppara=document.querySelector(".comp");

const computerchoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}

const playgame = (userid) => {
    console.log("User Choice=", userid);
    const compch = computerchoice();
    console.log("Computer Choice=", compch);
    if (userid == compch) {
        console.log("Match draw");
        msg.innerText="GAME IS DRAW";
        msg.style.backgroundColor="Black";
    }
    else {
        let userwin = true;
        if (userid === "Paper") {
            if (compch === "Scissors") {
                userwin = false;
                compchoice++;
                comppara.innerText=compchoice;
                console.log("Computer has won");
                msg.innerText="COMPUTER WON";
                msg.style.backgroundColor="Red";
            } else {
                userwin = true;
                userchoice++;
                userpara.innerText=userchoice;
                console.log("Player has won");
                msg.innerText="PLAYER WON";
                msg.style.backgroundColor="Green";
            }
        }
        if (userid === "Rock") {
            if (compch === "Paper") {
                userwin = false;
                compchoice++;
                comppara.innerText=compchoice;
                console.log("Computer has won");
                msg.innerText="COMPUTER WON";
                msg.style.backgroundColor="Red";
            } else {
                userwin = true;
                userchoice++;
                userpara.innerText=userchoice;
                console.log("Player has won");
                msg.innerText="PLAYER WON";
                msg.style.backgroundColor="Green";
            }
        }
        if (userid === "Scissors") {
            if (compch === "Rock") {
                userwin = false;
                compchoice++;
                comppara.innerText=compchoice;
                console.log("Computer has won");
                msg.innerText="COMPUTER WON";
                msg.style.backgroundColor="Red";
            } else {
                userwin = true;
                userchoice++;
                userpara.innerText=userchoice;
                console.log("Player has won");
                msg.innerText="PLAYER WON";
                msg.style.backgroundColor="Green";
            }
        }
    }
}

choice.forEach((box) => {
    box.addEventListener("click", () => {
        const userid = box.getAttribute("id");
        playgame(userid);
    });
});
