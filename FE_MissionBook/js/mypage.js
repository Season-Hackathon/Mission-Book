const tabList = document.querySelectorAll('.tab_menu .list li');
for (var i = 0; i < tabList.length; i++) {
  tabList[i].querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault();
    for (var j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove('is_on');
    }

    this.parentNode.classList.add('is_on');
  });
}

// 스탯 총 개수 계산
function plus() {
  const cnt1 = Number(document.querySelector("#study-complete").innerText);
  const cnt2 = Number(document.querySelector("#social-complete").innerText);
  const cnt3 = Number(document.querySelector("#exp-complete").innerText);
  const total = document.getElementById("total");
  const result = cnt1 + cnt2 + cnt3;

  console.log(result);
  total.innerText = result;
}


// 색상 변경
var beforeColor;

window.onload = function () {
  init();
  plus();
}

function init() {
  // 색상 팔레트
  var pallet = [["#D10E0E", "#0E74D1", "#0EBAD1", "#C8D627", "#DA5BC6"]];
  var tag = "";
  for (var i = 0; i < pallet.length; i++) {
    for (var j = 0; j < pallet[i].length; j++) {
      tag += "<div id=" + pallet[i][j] + " class='colorBox' onclick='colorSet(this)'></div>";
    }
  }

  document.getElementById("palletBox").innerHTML = tag;
  ``
  var colorBox = document.getElementsByClassName("colorBox");
  for (i = 0; i < colorBox.length; i++) {
    colorBox[i].style.background = colorBox[i].id;
  }
}

function colorSet(target) {
  document.querySelector("body").style.color = target.id;

  if (beforeColor != undefined && beforeColor != null) {
    document.getElementById(beforeColor).className = document.getElementById(beforeColor).className.replace(" active", "");
  }
  document.getElementById(target.id).className += " active";
  beforeColor = target.id;
}

// 칭호 변경 -> 하나로만 바뀌는 상태 
function changeTitle1() {
  // 바뀐 텍스트가 들어갈 곳
  var titleEl = document.getElementById("title");

  // 바꿀 칭호 
  var title1 = document.querySelector(".title-text1").innerText;

  titleEl.innerText = title1;
}

function changeTitle2() {
  // 바뀐 텍스트가 들어갈 곳
  var titleEl = document.getElementById("title");

  // 바꿀 칭호 
  var title2 = document.querySelector(".title-text2").innerText;

  titleEl.innerText = title2;
}

function changeTitle3() {
  // 바뀐 텍스트가 들어갈 곳
  var titleEl = document.getElementById("title");

  // 바꿀 칭호 
  var title3 = document.querySelector(".title-text3").innerText;

  titleEl.innerText = title3;
}

function changeTitle4() {
  // 바뀐 텍스트가 들어갈 곳
  var titleEl = document.getElementById("title");

  // 바꿀 칭호 
  var title4 = document.querySelector(".title-text4").innerText;

  titleEl.innerText = title4;
}

function changeTitle5() {
  // 바뀐 텍스트가 들어갈 곳
  var titleEl = document.getElementById("title");

  // 바꿀 칭호 
  var title5 = document.querySelector(".title-text5").innerText;

  titleEl.innerText = title5;
}

function changeTitle6() {
  // 바뀐 텍스트가 들어갈 곳
  var titleEl = document.getElementById("title");

  // 바꿀 칭호 
  var title6 = document.querySelector(".title-text6").innerText;

  titleEl.innerText = title6;
}

function changeTitle7() {
  // 바뀐 텍스트가 들어갈 곳
  var titleEl = document.getElementById("title");

  // 바꿀 칭호 
  var title7 = document.querySelector(".title-text7").innerText;

  titleEl.innerText = title7;
}

function changeTitle8() {
  // 바뀐 텍스트가 들어갈 곳
  var titleEl = document.getElementById("title");

  // 바꿀 칭호 
  var title8 = document.querySelector(".title-text8").innerText;

  titleEl.innerText = title8;
}

function changeTitle8() {
  // 바뀐 텍스트가 들어갈 곳
  var titleEl = document.getElementById("title");

  // 바꿀 칭호 
  var title8 = document.querySelector(".title-text8").innerText;

  titleEl.innerText = title8;
}

function changeTitle9() {
  // 바뀐 텍스트가 들어갈 곳
  var titleEl = document.getElementById("title");

  // 바꿀 칭호 
  var title9 = document.querySelector(".title-text9").innerText;

  titleEl.innerText = title9;
}

function changeTitle10() {
  // 바뀐 텍스트가 들어갈 곳
  var titleEl = document.getElementById("title");

  // 바꿀 칭호 
  var title10 = document.querySelector(".title-text10").innerText;

  titleEl.innerText = title10;
}

function changeTitle11() {
  // 바뀐 텍스트가 들어갈 곳
  var titleEl = document.getElementById("title");

  // 바꿀 칭호 
  var title11 = document.querySelector(".title-text11").innerText;

  titleEl.innerText = title11;
}

function changeTitle12() {
  // 바뀐 텍스트가 들어갈 곳
  var titleEl = document.getElementById("title");

  // 바꿀 칭호 
  var title12 = document.querySelector(".title-text12").innerText;

  titleEl.innerText = title12;
}

function changeTitle13() {
  // 바뀐 텍스트가 들어갈 곳
  var titleEl = document.getElementById("title");

  // 바꿀 칭호 
  var title13 = document.querySelector(".title-text13").innerText;

  titleEl.innerText = title13;
}

function changeTitle14() {
  // 바뀐 텍스트가 들어갈 곳
  var titleEl = document.getElementById("title");

  // 바꿀 칭호 
  var title14 = document.querySelector(".title-text14").innerText;

  titleEl.innerText = title14;
}