// Student Grade Generator
function mymarks(){
    let marks = parseInt(prompt("Please enter your marks between 0 and 100"));

    if (marks< 0 || marks>100) {
        alert("Marks should be between 0 and 100")
    } 
    else if (marks>79) {
        alert("Your Grade is A.")
    } 
    else if (marks>=60 && marks <=79) {
        alert("Your Grade is B.")
    } 
    else if (marks>49 && marks <=59) {
        alert("Your Grade is C.")
    }
    else if (marks>=40 && marks <=49) {
        alert("Your Grade is D.")
    }
    else if (marks<40) {
        alert("Your Grade is E.")
    }
    else {
       alert("Invalid Input") 
    }
}

//  Speed Detector
function calculateSpeed(){
    
}
// Net Salary Calculator


