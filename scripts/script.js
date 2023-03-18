// Student Grade Generator
function mymarks(){
    let marks = parseInt(prompt("Please enter your marks between 0 and 100"));

    var destination= document.getElementById("grade_answer")

    if (marks< 0 || marks>100) {
        destination.innerHTML="Marks should be between 0 and 100."
    } 
    else if (marks>79) {
        
        destination.innerHTML="Your Grade is A."

    } 
    else if (marks>=60 && marks <=79) {
        destination.innerHTML="Your Grade is B."

    } 
    else if (marks>49 && marks <=59) {
        destination.innerHTML="Your Grade is C."

    }
    else if (marks>=40 && marks <=49) {
        destination.innerHTML="Your Grade is D."

    }
    else if (marks<40) {
        destination.innerHTML="Your Grade is E."

    }
    else {
       destination.innerHTML="Invalid Input."
    }
}

//  Speed Detector
function calculateSpeed(){
    let max=70;

    let currentSpeed=document.getElementById('ssss').value;
    let points= (currentSpeed-max)/5;
    if(points<1){
        result='Ok';
    }
    else if(points>12){
        result='License Suspended';
    }
    else{
        result='points: '+points;
    }
document.getElementById('result').innerText=result;
}
// Net Salary Calculator

function calculateSalary(){

}