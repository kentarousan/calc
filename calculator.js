nowAns = 0;             // ���݂̍��v�l
nowInput = "";          // ���ݓ��͂��Ă���l
beforeInputNumFlg = 0;  // �������̓t���O
beforeCalc = "�{";      // �O��̉��Z�q

// �������͂̏ꍇ�̏���
function num(input){
  if(nowInput == "0"){
    nowInput = "";
  }
  nowInput += input;
  beforeInputNumFlg = 1;
  document.form.answer.value = nowInput;
}

// ���Z�q���͂̏ꍇ�̏���
function calculate(input){	
  if(beforeInputNumFlg == 1){
    if(beforeCalc == "�{"){
      nowAns = nowAns + parseFloat(nowInput);
    }else if(beforeCalc == "�|"){
      nowAns = nowAns - parseFloat(nowInput);
    }else if(beforeCalc == "�~"){
      nowAns = nowAns * parseFloat(nowInput);
    }else if(beforeCalc == "��"){
      nowAns = nowAns / parseFloat(nowInput);
    }
    nowInput = "0";
    beforeInputNumFlg = 0;
    document.form.answer.value = nowAns;
  }
  if (input == "��"){
    beforeCalc = "�{";
  }else{
    beforeCalc = input;
  }
}

// �N���A���͂̏ꍇ�̏���
function allClear(){
  nowAns = 0;
  nowInput = "";
  beforeInputNumFlg = "";
  beforeCalc = "�{";
  document.form.answer.value = nowAns;
}
