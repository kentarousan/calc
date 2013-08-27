nowAns = 0;             // 現在の合計値
nowInput = "";          // 現在入力している値
beforeInputNumFlg = 0;  // 数字入力フラグ
beforeCalc = "＋";      // 前回の演算子

// 数字入力の場合の処理
function num(input){
  if(nowInput == "0"){
    nowInput = "";
  }
  nowInput += input;
  beforeInputNumFlg = 1;
  document.form.answer.value = nowInput;
}

// 演算子入力の場合の処理
function calculate(input){	
  if(beforeInputNumFlg == 1){
    if(beforeCalc == "＋"){
      nowAns = nowAns + parseFloat(nowInput);
    }else if(beforeCalc == "－"){
      nowAns = nowAns - parseFloat(nowInput);
    }else if(beforeCalc == "×"){
      nowAns = nowAns * parseFloat(nowInput);
    }else if(beforeCalc == "÷"){
      nowAns = nowAns / parseFloat(nowInput);
    }
    nowInput = "0";
    beforeInputNumFlg = 0;
    document.form.answer.value = nowAns;
  }
  if (input == "＝"){
    beforeCalc = "＋";
  }else{
    beforeCalc = input;
  }
}

// クリア入力の場合の処理
function allClear(){
  nowAns = 0;
  nowInput = "";
  beforeInputNumFlg = "";
  beforeCalc = "＋";
  document.form.answer.value = nowAns;
}
