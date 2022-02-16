document.getElementById("currentDay").innerHTML =
  moment().format("dddd, MMM Do");

var saveButton9 = document.querySelector("#nineBtn");
var saveButton10 = document.querySelector("#tenBtn");
var saveButton11 = document.querySelector("#elevenBtn");
var saveButton12 = document.querySelector("#twelveBtn");
var saveButton1 = document.querySelector("#oneBtn");
var saveButton2 = document.querySelector("#twoBtn");
var saveButton3 = document.querySelector("#threeBtn");
var saveButton4 = document.querySelector("#fourBtn");
var saveButton5 = document.querySelector("#fiveBtn");

var userInput9 = document.querySelector("#nine");
var userInput10 = document.querySelector("#ten");
var userInput11 = document.querySelector("#eleven");
var userInput12 = document.querySelector("#twelve");
var userInput1 = document.querySelector("#one");
var userInput2 = document.querySelector("#two");
var userInput3 = document.querySelector("#three");
var userInput4 = document.querySelector("#four");
var userInput5 = document.querySelector("#five");

function formatTimeEntry() {
  $(".time-block").each(function () {
    var varianceFromNow = moment(this.id, "ha").fromNow();
    var testIndex = varianceFromNow.length - 3;
    var elementId = this.id;
    var newClassName = "none";
    var newIndex = elementId.length - 2;
    var newElId = "";

    for (var i = 0; i < newIndex; i++) {
      newElId = newElId + elementId[i];
    }

    //Choses new class
    if (varianceFromNow[testIndex] === "a") {
      newClassName = "past";
    } else if (varianceFromNow[testIndex] === "u") {
      newClassName = "future";
    } else {
      newClassName = "present";
    }

    //Sets to the New Class Name
    if (newElId === "9") {
      document.getElementById("nine").className = newClassName;
    } else if (newElId === "10") {
      document.getElementById("ten").className = newClassName;
    } else if (newElId === "11") {
      document.getElementById("eleven").className = newClassName;
    } else if (newElId === "12") {
      document.getElementById("twelve").className = newClassName;
    } else if (newElId === "1") {
      document.getElementById("one").className = newClassName;
    } else if (newElId === "2") {
      document.getElementById("two").className = newClassName;
    } else if (newElId === "3") {
      document.getElementById("three").className = newClassName;
    } else if (newElId === "4") {
      document.getElementById("four").className = newClassName;
    } else if (newElId === "5") {
      document.getElementById("five").className = newClassName;
    }
  });
}

//Event Listener for 9AM
saveButton9.addEventListener("click", function () {
  var userInput = userInput9.value;
  localStorage.setItem("nine", userInput);
});

saveButton10.addEventListener("click", function () {
  var userInput = userInput10.value;
  localStorage.setItem("ten", userInput);
});

saveButton11.addEventListener("click", function () {
  var userInput = userInput11.value;
  localStorage.setItem("eleven", userInput);
});

saveButton12.addEventListener("click", function () {
  var userInput = userInput12.value;
  localStorage.setItem("twelve", userInput);
});

saveButton1.addEventListener("click", function () {
  var userInput = userInput1.value;
  localStorage.setItem("one", userInput);
});

saveButton2.addEventListener("click", function () {
  var userInput = userInput2.value;
  localStorage.setItem("two", userInput);
});

saveButton3.addEventListener("click", function () {
  console.log(userInput3);
  console.log(userInput3.value);
  var userInput = userInput3.value;
  localStorage.setItem("three", userInput);
});

saveButton4.addEventListener("click", function () {
  var userInput = userInput4.value;
  localStorage.setItem("four", userInput);
});
saveButton5.addEventListener("click", function () {
  var userInput = userInput5.value;
  localStorage.setItem("five", userInput);
});

var loadSchedule = function () {
  formatTimeEntry();
  if (localStorage.getItem("nine")) {
    userInput9.value = localStorage.getItem("nine");
  }
  if (localStorage.getItem("ten")) {
    userInput10.value = localStorage.getItem("ten");
  }
  if (localStorage.getItem("eleven")) {
    userInput11.value = localStorage.getItem("eleven");
  }
  if (localStorage.getItem("twelve")) {
    userInput12.value = localStorage.getItem("twelve");
  }
  if (localStorage.getItem("one")) {
    userInput1.value = localStorage.getItem("one");
  }
  if (localStorage.getItem("two")) {
    userInput2.value = localStorage.getItem("two");
  }
  if (localStorage.getItem("three")) {
    userInput3.value = localStorage.getItem("three");
  }
  if (localStorage.getItem("four")) {
    userInput4.value = localStorage.getItem("four");
  }
  if (localStorage.getItem("five")) {
    userInput5.value = localStorage.getItem("five");
  }
};

loadSchedule();
