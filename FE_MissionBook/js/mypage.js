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

  console.log(cnt3);
  console.log(result);
  total.innerText = result;
}

// 색상 변경
var beforeColor;

window.onload = function () {
  init();
  // changeTitle();
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
function changeTitle() {
  var titleEl = document.getElementById("title");
  var titleText = document.querySelector(".title-text").innerText;
  console.log(titleText);
  titleEl.innerText = titleText;

  titleEl = ''
  titleText = ''
}



