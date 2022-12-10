/*global $*/
$(document).ready(function(){
  
  let push = [];
  let num1 = "";
  let num2 = "";
  let cal = "";
  let answer = "";
  let calculation = false;
  
  
  
  $(".num").click(function(){
    
    push.push($(this).text());
    if(calculation == false){
      num1 = push.join("");
      $(".display").text(Number(num1));
    }else{
      num2 = push.join("");
      $(".display").text(Number(num2));
    }
    
  });
  
  
  
  $(".cal").click(function(){
    cal = $(this).attr("id");
    calculation = true;
    push = [];
    $(".display").text(cal);

  });
  
  
  
  $(".result").click(function(){
    switch(cal){
      case "+":
        let sum1 = Number(num1);
        let sum2 = Number(num2);
        answer = sum1 + sum2;
        break;
      case "-":
        answer = num1 - num2;
        break;
      case "×":
        answer = num1 * num2;
        break;
      case "÷":
        answer = num1 / num2;
        break;
    }  
    
    $(".display").text(answer);
    num1 = answer;
    
  });
  
  
  
  $(".reset").click(function(){
    num1 = "";
    num2 = "";
    cal = "";
    answer = "";
    calculation = false;
    push = [];
    
    $(".display").text("");
    
  });
  
});