let num = document.querySelector("#num");
let fact = document.querySelector("#fact");
let year = document.querySelector("#year");
let yearFact = document.querySelector("#yearFact");
let month = document.querySelector("#month")
let date = document.querySelector("#date")
let dateFact = document.querySelector("#dateFact");
let trivia = document.querySelector("#trivia");

var number = Math.floor(Math.random() * 100);
var request = new XMLHttpRequest();
request.open('GET',"http://numbersapi.com/"+number);
request.onload = function () {
    if (this.status == 200){
        trivia.innerText = this.responseText;
    }
}
request.send();

num.addEventListener("input", getAjax);
year.addEventListener("input", getAnotherAjax);
month.addEventListener("input", yetAnotherAjax);
date.addEventListener("input", yetAnotherAjax);


function getAjax() {
    let number = num.value;
    if (number != "") {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://numbersapi.com/' + number);
        xhr.onload = function () {
            if (this.status == 200) {
                fact.innerText = this.responseText;
            }
        }
        xhr.send();
    }
}
function getAnotherAjax() {
    let cYear = year.value;
    if (year != "") {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://numbersapi.com/' + cYear + '/year');
        xhr.onload = function () {
            if (this.status == 200) {
                yearFact.innerText = this.responseText;
            }
        }
        xhr.send();
    }
}
function yetAnotherAjax() {
    let cMonth = month.value;
    let cDate = date.value;
    if (cMonth != "" || cDate != "") {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://numbersapi.com/' + cMonth + '/' + cDate + '/date');
        xhr.onload = function () {
            if (this.status == 200) {
                dateFact.innerText = this.responseText;
            }
        }
        xhr.send();
    }
}
// gevNpRuUXHhl7kOnRrhZtNW9jOt1