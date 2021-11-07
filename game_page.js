player_1score = 0;
player_2score = 0;

player1_name = localStorage.getItem("player1_name")
player2_name = localStorage.getItem("player2_name")

document.getElementById("player_1name").innerHTML=player1_name
document.getElementById("player_2name").innerHTML=player2_name

 
document.getElementById("player_1score").innerHTML=player_1score
document.getElementById("player_2score").innerHTML=player_2score

document.getElementById("Question_Turn").innerHTML=player1_name
document.getElementById("Answer_Turn").innerHTML=player2_name

function send(){
  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;
  actual_answer = parseInt(number1) * parseInt(number2);
  question_number = "<h4>" + number1 + "X"+ number2 +"</h4>";
  input_box = "<br>Answer : <input type='text' id='input_check_box'>"
  check_button = "<br> <br><button class='btn btn-info' onclick='check()'>Check</button>";
  row= question_number + input_box + check_button ;
  document.getElementById("output").innerHTML = row;
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
}
question_turn = "player1";
answer_turn = "player2";

function check(){
  get_answer = document.getElementById("input_check_box").value;
  if(get_answer == actual_answer)
  {
    if(answer_turn == "player1")
    {
      player_1score = player_1score + 1;
      document.getElementById("player_1score").innerHTML = player_1score;
    }
    else{
      player2_score = player_2score + 1
      document.getElementById("player_2score").innerHTML = player_2score;
        }
  }
  if(question_turn == "player1")
  {
    question_turn = "player2"
    document.getElementById("Question_Turn").innerHTML =  player2_name;
  }
  else{
    question_turn = "player1"
    document.getElementById("Question_Turn").innerHTML =  player1_name ;
  }
  if(answer_turn == "player1")
  {
    answer_turn = "player2"
    document.getElementById("Answer_Turn").innerHTML =  player2_name;
  }
  else{
    answer_turn = "player1"
    document.getElementById("Answer_Turn").innerHTML =  player1_name;
  }
  document.getElementById("output").innerHTML = ""
}

