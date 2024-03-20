let result_final = "";
function winner(me,computer){
    if (me == "Rock" & computer == "Scissors"){
        result_final = "You Win !";
    }
    else if (me == "Rock" & computer == "Paper"){
        result_final = "You Win !";
    }
    else if (me == "Paper" & computer == "Scissors"){
        result_final = "You Lose !";
    }
    else if (me == "Paper" & computer == "Rock"){
        result_final = "You Win !";
    }
    else if (me == "Scissors" & computer == "Paper"){
        result_final = "You Win !";
    }
    else if (me == "Scissors" & computer == "Rock"){
        result_final = "You Lose !";
    }
    else if(me == computer){
        result_final = "Draw";
    }
    else{
        result_final = "Invalid";
    }
}
function game(word){
    let num = Math.floor(Math.random()*3)
    const all = ["Rock","Paper","Scissors"]
    comp_out = all[num]
    winner(word,comp_out)
    console.log(result_final)
    const text_w = document.getElementById("result");
    text_w.innerHTML = `Result : ${result_final}`;

}
