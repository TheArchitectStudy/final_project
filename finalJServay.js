var score = 0;
var qusDone = [];
var shouldHave = ["q1","q2","","","",""]
function OpenResponce(evt,portName) {
  if (evt != qusDone[0] && evt != qusDone[1] && evt != qusDone[2] && evt != qusDone[3] && evt != qusDone[4] && evt != qusDone[5]) {
    if (portName == 'ans1') {
      score += 3;
      console.log(score);
      QuestionNum(evt);
    }
    else if (portName == 'ans2') {
      score += 5;
      console.log(score);
      QuestionNum(evt);
    }
    else if (portName == 'ans3') {
      score += 7;
      console.log(score);
      QuestionNum(evt);
    }
    else if (portName == 'ans4') {
      score += 13;
      console.log(score);
      QuestionNum(evt);
    }
    else {
      console.log("error")
    }
  }
  else {
    alert("You alrady answered this question")
  }
}

function QuestionNum(num){
  console.log("we are on", num);
  qusDone.push(num);
}

function OpenDone() {
  var valueLen = qusDone.length;
  var otherLen = shouldHave.length;
  if (valueLen !== otherLen) {
    alert("you are not done");
  }
  else {
    console.log("done")
    Choice();
  }
}

function Choice() {
  if (score < 15) {
    alert("error expecting higher number");
  }
  else if (score > 17.9 && score < 30.1 ) {
      document.getElementById("answer").innerHTML = "you got Mathematician";
  }
  else if (score > 30.9 && score < 35.1) {
    document.getElementById("answer").innerHTML = "you got Psychologist";
  }
  else if (score > 35.9 && score < 37.1) {
    document.getElementById("answer").innerHTML = "you got Information Security Analyst";
  }
  else if (score > 37.9 && score < 39.1) {
    document.getElementById("answer").innerHTML = "you got Biomedical Engineer";
  }
  else if (score > 39.9 && score < 41.1) {
    document.getElementById("answer").innerHTML = "you got Web Develpoer";
  }
  else if (score > 41.9 && score < 43.1) {
    document.getElementById("answer").innerHTML = "you got Doctor";
  }
  else if (score > 43.9 && score < 49.1) {
    document.getElementById("answer").innerHTML = "you got Forensic Science Technician";
  }
  else if (score > 49.9 && score < 78.1) {
    document.getElementById("answer").innerHTML = "you got Information Security Analyst";
  }
  else {
    alert("input is not valid")
  }
}
