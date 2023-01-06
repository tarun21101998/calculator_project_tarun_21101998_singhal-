var button = document.getElementsByClassName('I-B');
var display = document.getElementById('screen');

var operand1 = 0;
var operand2 = null;
var operator = null;

for(var i=0; i<button.length; i++){
    
    button[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');

        if(value=="AC"){
            operand1 = 0;
            operand2 = null;
            operator = null;
            display.innerText = null;
        }

        else if(value == '+' || value == '-' || value == '*' || value == '/') {
            operator = value;
            operand1 += parseFloat(display.textContent);
            display.innerText=null;
        }

        else if(value == "%"){
            var newans = parseFloat(display.textContent);
            operand1 = eval(newans + " " + '/' + " " + '100');
            display.innerText = operand1;
        }

        else if(value == 'signv'){
            operand1 = parseFloat(display.textContent);
            operand1 = -1*operand1;
            display.innerText = operand1;
        }

        else if(value == '='){
            operand2 = parseFloat(display.textContent);

            if(operator == '/' && operand2 == 0) {
                display.innerText = "Error";
                operand1 = 0;
                operand2 = null;
                operator = null;
            }

            else {
                var ans = eval(operand1 + " " + operator + " " + operand2);
                display.innerText = ans;
                operand1 = ans;
                operand2 = null;
            }
        }

        else {
            if(display.innerText == "Error"){
                display.innerText = null;
            }
            display.innerText += value;
        }
    })
}