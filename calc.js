function addNums(a,b) {
    let results = a + b;
    return results;

}

function subtractNums(a,b) {
    let results = a - b;
    return results;

}

function multiplyNums(a,b) {
    let results = a * b;
    return results;

}

function divideNums(a,b){
    let results = a/b;
    return results;

}


//operator must be in ""
function operate(operator,a,b) {

    if (operator == "+"){
        let results = addNums(a,b);
        return results;
    } else if (operator == "-"){
        let results = subtractNums(a,b);
        return results;
    } else if (operator == "*"){
        let results = multiplyNums(a,b);
        return results;
    } else if (operator == "/"){
        let results = divideNums(a,b);
        return results;
    }

    

}

// making buttons responsive
const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".calcKeys")

const display = document.querySelector(".calcDisplay")

let val1 = 0;
let val2 = 0;
let operator = "";

keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const key = e.target
        
        console.log(key.value);


        // displays content on web
        const keyContent = key.textContent
        const displayedNum = display.textContent



        if (displayedNum == "0"){
                display.textContent = keyContent
        } else{
            if (displayedNum.includes('.') && keyContent == ".") {
                display.textContent = displayedNum
            } else {
                display.textContent = displayedNum + keyContent
            }
        }  


        if (key.value == "allClear"){
            display.textContent = 0;
            val1 = 0;
            val2 = 0;
            operator = "";
        }


        // figure out how to store values and calculate here

        // operators
        if (key.value == "+") {
            operator = "+";
            val1 = displayedNum;
            console.log("val1=", val1);
            display.textContent = 0;
         
            
        } else if (key.value == "-") {
            operator = "-";
            val1 = displayedNum;
            display.textContent = 0;
         
            
        } else if (key.value == "*") {
            operator = "*";
            val1 = displayedNum;
            display.textContent = 0;
        
        } else if (key.value == "/") {
            operator = "/";
            val1 = displayedNum;
            display.textContent = 0;
          
        }

        // calculate
        if (key.value == "=" && operator == "") {
            display.textContent = displayedNum;
        } else if(key.value == "=" ) {
            val2 = displayedNum;
            val1 = Number(val1);
            val2 = Number(val2);

            if (val2 == 0 && operator == "/"){
                alert("am i a joke to you?")
                display.textContent = 0;
                val1 = 0;
                val2 = 0;
                operator = "";
                
            } else {
            results = operate(operator,val1,val2);
            display.textContent = results;

            console.log("val1=",val1);
            console.log("val2=",val2);
            console.log(operator);
            console.log(results);

            }
        }

    }
})





