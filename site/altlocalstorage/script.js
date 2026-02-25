// Visits
var numTimes = localStorage.getItem("*****CodeCrew-visits*****");

if(numTimes == null) {
  numTimes = 0;
} else {
  numTimes = parseInt(numTimes, 10);
}

numTimes++;

localStorage.setItem("*****CodeCrew-visits*****", (numTimes).toString(10));
document.getElementById("visits").innerHTML = numTimes.toString(10);
document.getElementById("visitsTable").innerHTML = numTimes.toString(10);

function visits() {
    numTimes = document.getElementById("visitsInput").value 
    localStorage.setItem("*****CodeCrew-visits*****", (numTimes).toString(10));
    document.getElementById("visits").innerHTML = numTimes.toString(10);
    document.getElementById("visitsTable").innerHTML = numTimes.toString(10);
}

// Name
var student = localStorage.getItem("*****CodeCrew-student*****");

if(student === null) {
  student = "Karel";
} else {
  student = student;
}

localStorage.setItem("*****CodeCrew-student*****", student)
document.getElementById("student").textContent = student;
document.getElementById("studentTable").innerHTML = student;

function students() {
    student = document.getElementById("studentInput").value 
    localStorage.setItem("*****CodeCrew-student*****", student)
    document.getElementById("student").textContent = student;
    document.getElementById("studentTable").innerHTML = student;
}

// Animal
var animal = localStorage.getItem("*****CodeCrew-animal*****");

if(animal === null) {
  animal = "human";
} else {
  animal = animal;
}

localStorage.setItem("*****CodeCrew-animal*****", animal)
document.getElementById("animal").textContent = animal;
document.getElementById("animalTable").innerHTML = animal;

function animals() {
    animal = document.getElementById("animalInput").value 
    localStorage.setItem("*****CodeCrew-animal*****", animal)
    document.getElementById("animal").textContent = animal;
    document.getElementById("animalTable").innerHTML = animal;
}

// Hobbies
var hobbies = localStorage.getItem("*****CodeCrew-hobbies*****");

if(hobbies === null) {
  hobbies = "fetching and coding";
} else {
  hobbies = hobbies;
}

localStorage.setItem("*****CodeCrew-hobbies*****", hobbies)
document.getElementById("hobbies").textContent = hobbies;
document.getElementById("hobbiesTable").innerHTML = hobbies;

function hobby() {
    hobbies = document.getElementById("hobbiesInput").value 
    localStorage.setItem("*****CodeCrew-hobbies*****", hobbies)
    document.getElementById("hobbies").textContent = hobbies;
    document.getElementById("hobbiesTable").innerHTML = hobbies;
}

// Activity
var activity = localStorage.getItem("*****CodeCrew-activity*****");

if(activity === null) {
  activity = "amazing";
} else {
  activity = activity;
}

localStorage.setItem("*****CodeCrew-activity*****", activity)
document.getElementById("activity").textContent = activity;
document.getElementById("activityTable").innerHTML = activity;


function activities() {
    activity = document.getElementById("activityInput").value 
    localStorage.setItem("*****CodeCrew-activity*****", activity)
    document.getElementById("activity").textContent = activity;
    document.getElementById("activityTable").innerHTML = activity;
}

// Flag
var flag = localStorage.getItem("*****CodeCrew-flag*****");

if(flag === null) {
  flag = "bagel";
} else {
  flag = flag;
}

localStorage.setItem("*****CodeCrew-flag*****", flag)
document.getElementById("flagTable").innerHTML = flag;

// Balance
var balance = localStorage.getItem("*****CodeCrew-account_balance*****");

if(balance === null) {
  balance = "$5925.85";
} else {
  balance = balance;
}

localStorage.setItem("*****CodeCrew-account_balance*****", balance)
document.getElementById("balanceTable").innerHTML = balance;

function balances() {
    balance = document.getElementById("balanceInput").value 
localStorage.setItem("*****CodeCrew-account_balance*****", balance)
document.getElementById("balanceTable").innerHTML = balance;
    document.getElementById("balanceTable").innerHTML = balance;
}